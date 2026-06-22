// review.js

// ================================
// REVIEW GENERATOR SYSTEM
// ================================
// Usage:
// - Requires dropdown #rOccasion
// - Requires inputs #rName, #reviewText
// - Uses star containers #occasionStars, #overallStars
// - Uses Bootstrap Toast for notifications
// - Generates and copies Google review text

let occasionRating = 0;
let overallRating = 0;
let step = 0;
// Google Place ID (your business)
const PLACE_ID = "ChIJXyQmoppOXjkRmrKODlUNeEA";
// Review link
const reviewUrl = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;

/* 🎯 ALL OCCASION REVIEWS */
const templates = {
    "Balloon Decoration": [
            "Decoration was very neat and exactly like the photos shared. Balloons quality was good and setup was on time.",
            "Affordable and beautiful setup. They transformed the room completely for the birthday surprise.",
            "Loved the color combination and overall design. The decoration looked elegant and attractive.",
            "Team arrived on time and finished everything perfectly. Highly satisfied with the service.",
            "Great work with premium-quality balloons and creative arrangements. Everyone appreciated the decoration.",
            "The setup was even better than expected. Every detail was carefully arranged and looked stunning.",
            "Very professional team with quick installation. The decoration made the party atmosphere amazing.",
            "Beautiful balloon arch and backdrop design. Guests kept complimenting the setup throughout the event.",
            "Excellent service with creative ideas and perfect execution. Truly made the celebration special.",
            "High-quality balloons and very tidy work. The room looked completely festive and well-decorated.",
            "They understood our theme perfectly and delivered exactly what we wanted. Very happy with the result.",
            "On-time arrival and smooth setup process. The decoration looked premium and photo-ready.",
            "Superb coordination and very polite staff. The final setup looked magical and well-balanced.",
            "Great value for money. The decoration was colorful, vibrant, and beautifully arranged.",
            "Everything was handled professionally from start to finish. Would definitely recommend to others."
    ],

    "Baby Shower Decoration": [
            "Very cute theme and pastel decoration. Everyone loved the setup and photography background.",
            "Perfect baby shower arrangement with balloons, props, and stage setup. Highly recommended.",
            "Beautiful decoration that created a memorable atmosphere for our special day.",
            "Excellent attention to detail and color matching. The setup looked amazing in photos.",
            "Professional team and hassle-free experience. Everything was arranged exactly as discussed.",
            "The decoration was soft, elegant, and perfectly suited for a baby shower celebration.",
            "Amazing balloon styling with creative props that made the event feel very special.",
            "Setup was completed on time and looked exactly like the reference pictures we shared.",
            "Guests were very impressed with the backdrop and overall theme design.",
            "Very neat execution with lovely pastel tones that enhanced the entire venue.",
            "The stage setup was beautifully arranged and became the highlight of the event.",
            "Super smooth coordination and friendly staff who handled everything efficiently.",
            "Everything looked well-balanced and aesthetically pleasing for photography.",
            "Great creativity in combining colors and props for a warm celebration feel.",
            "Overall a wonderful experience that made our baby shower truly memorable."
    ],

    "Birthday Party Decoration": [
            "Super creative theme and balloon arch was perfect. Kids loved it.",
            "On-time setup and great value for money. Decoration looked premium.",
            "The birthday backdrop was beautiful and made the celebration extra special.",
            "Excellent service with attractive decorations and quality materials.",
            "Everyone at the party appreciated the setup. Highly recommend for birthdays.",
            "The entire setup looked vibrant and perfectly matched the birthday theme.",
            "Very professional team that delivered exactly what we wanted for the celebration.",
            "Beautiful balloon arrangements that created a joyful party atmosphere.",
            "Setup was done quickly and neatly without any hassle. Great experience overall.",
            "The decoration made the venue look festive and photo-ready.",
            "Kids absolutely loved the colorful design and fun elements in the setup.",
            "Great attention to detail in every corner of the decoration.",
            "Affordable pricing with high-quality execution. Totally worth it.",
            "The backdrop and lighting combination looked stunning in photos and videos.",
            "Highly satisfied with the creativity and smooth service provided by the team."
    ],

    "Anniversary Party Decoration": [
            "Romantic setup with candles and flower theme. Made our anniversary special.",
            "Beautiful stage decoration and lighting. Everything was well managed.",
            "Elegant decoration that created a wonderful atmosphere for our celebration.",
            "The team understood our requirements perfectly and delivered beyond expectations.",
            "Amazing work with flowers, balloons, and lighting. Loved every detail.",
            "The entire setup looked very romantic and perfectly suited for an anniversary celebration.",
            "Excellent floral arrangements that gave a luxurious and warm feel to the venue.",
            "Very smooth execution with timely setup and professional service throughout.",
            "The decoration created a magical ambience that everyone appreciated.",
            "Beautiful combination of lights and décor that enhanced the evening mood.",
            "Everything was arranged exactly as discussed, with great attention to detail.",
            "Guests were very impressed with the elegant stage and backdrop design.",
            "High-quality decorations that made the celebration feel truly special.",
            "Great coordination from the team, making the whole experience stress-free.",
            "The setup looked stunning in photos and made our memories even more beautiful."
    ],

    "Room Decoration": [
            "Simple but elegant room decoration. Perfect for surprise celebration.",
            "Fast setup and very clean arrangement. Loved the balloon and rose combo.",
            "Beautiful room transformation with attention to every small detail.",
            "The decoration looked exactly as promised and created a memorable surprise.",
            "Professional service and excellent presentation. Worth every penny.",
            "The room looked magical after the decoration, perfect for a surprise moment.",
            "Very neatly arranged balloons and lights that completely changed the ambiance.",
            "Excellent creativity in turning a simple room into a celebration space.",
            "Setup was quick, smooth, and exactly matched the theme we discussed.",
            "Loved the combination of flowers, candles, and balloons used in the setup.",
            "The team did a fantastic job with minimal space but maximum impact.",
            "Everything was well-organized and visually very appealing.",
            "Highly satisfied with the service and overall presentation quality.",
            "The decoration made the surprise unforgettable for my loved one.",
            "Great attention to detail and very professional execution throughout."
    ],

    "Theme Decoration": [
            "Creative theme execution, exactly as discussed. Very professional team.",
            "Great attention to detail. Every corner matched the theme perfectly.",
            "Outstanding decoration with impressive creativity and design.",
            "The setup exceeded our expectations and looked fantastic.",
            "Professional planning and flawless execution of the entire theme.",
            "The theme was brought to life beautifully with perfect coordination of colors and props.",
            "Very innovative ideas that made the entire setup stand out.",
            "The decoration perfectly captured the concept we had in mind.",
            "Smooth execution with no last-minute issues or delays.",
            "Everything looked well-organized and visually very appealing.",
            "Guests were amazed by how well the theme was implemented.",
            "High-quality decor elements that elevated the overall look of the event.",
            "The team did a fantastic job turning ideas into reality.",
            "Impressive styling that made the venue look completely transformed.",
            "Very satisfied with the creativity, professionalism, and final output."
    ],

    "Wedding Entry Decoration": [
            "Grand entry setup with flowers and lights. Looked very royal.",
            "Perfect timing and amazing stage entry decor. Guests were impressed.",
            "The wedding entrance created a stunning first impression for everyone.",
            "Beautiful floral arrangements and elegant lighting effects.",
            "Excellent decoration that added a luxurious touch to the event.",
            "The entry pathway looked absolutely magical and picture-perfect.",
            "Outstanding floral arch that made the bride and groom’s entry unforgettable.",
            "Very elegant and well-coordinated lighting that enhanced the whole setup.",
            "The decoration gave a truly royal and cinematic feel to the wedding entry.",
            "Setup was completed perfectly on time without any hassle.",
            "Guests kept praising the beautiful and grand entrance design.",
            "High-quality flowers and props that elevated the overall look.",
            "Everything was arranged with great precision and professionalism.",
            "The entrance decor completely transformed the venue atmosphere.",
            "A perfect blend of elegance and grandeur for a wedding celebration."
    ],

    "Bridal Entry Decoration": [
            "Beautiful floral walkway and dreamy lighting. Bridal entry looked magical.",
            "Very elegant and well-coordinated setup. Exactly what we wanted.",
            "The decoration made the bridal entry truly unforgettable.",
            "Gorgeous flower arrangements and perfect ambiance for photos.",
            "Professional team that delivered a beautiful and graceful setup.",
            "The entire walkway looked like a fairy tale entrance for the bride.",
            "Excellent use of flowers and lights that created a stunning visual impact.",
            "Very smooth execution with perfect timing for the bridal entry moment.",
            "The setup added a royal and emotional touch to the ceremony.",
            "Guests were amazed by the beautiful and graceful entry design.",
            "Every detail was carefully arranged to enhance the bride’s moment.",
            "The decoration looked extremely photogenic and elegant in every shot.",
            "High-quality floral work that made the entry feel very special.",
            "The team perfectly understood the theme and executed it beautifully.",
            "A truly dreamy setup that made the bridal entry unforgettable."
    ],

    "Groom Entry Decoration": [
            "Stylish entry with smoke and lighting effects. Very impactful moment.",
            "Perfect coordination with music and entry props. Looked very grand.",
            "The groom's entry was energetic and memorable for all guests.",
            "Creative setup with impressive visual effects and smooth execution.",
            "Excellent planning that made the entry look premium and exciting.",
            "The smoke effects and lights created a powerful cinematic entry moment.",
            "Very well-timed coordination between music and entry procession.",
            "Guests thoroughly enjoyed the energetic and stylish groom entry setup.",
            "The entire arrangement looked modern, bold, and visually striking.",
            "Smooth execution with no delays during the entry sequence.",
            "The decoration perfectly matched the groom’s personality and style.",
            "High-impact visuals that made the entry unforgettable for everyone.",
            "Very professional setup that elevated the entire wedding atmosphere.",
            "The lighting and effects created a truly grand stage moment.",
            "A perfectly choreographed entry that impressed all the guests."
    ],

    "Surprise Party Setup": [
            "Everything was hidden and perfectly revealed at the right time. Amazing experience.",
            "Great execution and emotional surprise moment created successfully.",
            "The team planned everything perfectly and maintained complete secrecy.",
            "Wonderful decoration and coordination for a successful surprise event.",
            "Everyone loved the surprise setup and overall arrangement.",
            "The surprise reveal moment was perfectly timed and beautifully executed.",
            "Excellent secrecy maintained from start to finish, truly impressive service.",
            "The setup created a very emotional and unforgettable reaction from everyone.",
            "Very creative planning that made the surprise feel truly special.",
            "Smooth coordination and flawless execution of the entire event.",
            "The decoration looked stunning when revealed and exceeded expectations.",
            "Guests were genuinely surprised and loved the entire arrangement.",
            "Everything was managed professionally without giving away any hints.",
            "The team did a fantastic job in creating a memorable surprise experience.",
            "Highly recommended for anyone planning a surprise celebration."
    ],

    "Balloon Blast Entry": [
            "Very exciting entry effect, balloons bursting looked amazing.",
            "Kids enjoyed it a lot, very fun and energetic setup.",
            "The balloon blast created a memorable and exciting entrance moment.",
            "Great coordination and perfect timing for the special entry.",
            "Unique concept that added extra excitement to the celebration.",
            "The balloon pop effect was perfectly timed and very thrilling to watch.",
            "Amazing energy created during the entry with colorful balloon bursts.",
            "Very creative idea that made the event feel more lively and fun.",
            "The execution was smooth and completely safe for all guests.",
            "Guests were surprised and loved the energetic entry performance.",
            "Perfect addition to make the celebration more entertaining and unique.",
            "The whole setup looked vibrant and full of excitement.",
            "Great teamwork and flawless timing during the balloon blast moment.",
            "It added a wow factor that everyone remembered after the event.",
            "Highly enjoyable and well-planned entry concept for parties."
    ],

    "Smoke Entry": [
            "Smoke effect gave a cinematic entry feel. Very impressive.",
            "Perfect for photos and stage entry, looked very premium.",
            "The effect enhanced the entire entry experience beautifully.",
            "Professional setup with safe and controlled smoke effects.",
            "Created a grand atmosphere and looked amazing in videos.",
            "The smoke effect made the entry look like a movie scene.",
            "Very well-timed release that added drama and excitement.",
            "Guests were amazed by the magical and premium atmosphere.",
            "Perfect visibility control that enhanced the lighting effects.",
            "Smooth and safe execution throughout the entire entry.",
            "The overall setup gave a royal and stylish feel to the event.",
            "Excellent coordination with music and stage lighting.",
            "The smoke added depth and beauty to every photograph.",
            "Highly professional arrangement that elevated the entire moment.",
            "A stunning effect that made the entry unforgettable."
    ],

    "Cold Pyro Entry": [
            "Safe and stunning spark effect during entry. Everyone was shocked in a good way.",
            "Made the event look like a big wedding stage show. Very professional.",
            "The cold pyro effect added excitement and elegance to the celebration.",
            "Perfectly synchronized setup that looked spectacular during entry.",
            "Excellent quality equipment and professional execution throughout.",
            "The sparkling effects created a grand and luxurious entry moment.",
            "Very safe setup that still delivered a high-impact visual experience.",
            "Perfect timing of pyro effects matched the music beautifully.",
            "Guests were amazed by the professional stage-like atmosphere.",
            "The entry looked cinematic and extremely well-coordinated.",
            "High-quality effects that added a premium feel to the celebration.",
            "Smooth execution with no safety concerns at any point.",
            "The cold pyro made the entire entrance unforgettable and grand.",
            "Excellent coordination between lighting, music, and effects.",
            "A perfect addition for a high-energy and elegant entry."
    ],

    "Event Management": [
            "Everything from decoration to coordination was handled smoothly.",
            "Stress-free experience, they managed the whole event professionally.",
            "Great planning and execution from start to finish.",
            "The team was responsive, organized, and very supportive throughout the event.",
            "Highly professional service that ensured everything went perfectly on the special day.",
            "The entire event was managed seamlessly without any last-minute issues.",
            "Excellent coordination between all vendors and on-ground staff.",
            "Very efficient planning that made the whole celebration hassle-free.",
            "The team handled every detail with great professionalism and care.",
            "Smooth execution that allowed us to enjoy the event without worries.",
            "Always available and quick to respond to any requirements.",
            "Perfect time management ensured everything happened as scheduled.",
            "Guests were very impressed with the overall organization.",
            "High level of professionalism from planning to execution.",
            "Truly reliable service that made the event memorable and stress-free."
    ]
};



/* INIT DROPDOWN */
const occ = document.getElementById("rOccasion");

Object.keys(templates).forEach(o => {
    let opt = document.createElement("option");
opt.value = o;
opt.textContent = o;
occ.appendChild(opt);
});


/* ⭐ STAR SYSTEM */
function createStars(id, type) {
    const el = document.getElementById(id);

    for (let i = 1; i <= 5; i++) {
        let star = document.createElement("i");
        star.className = "fa-solid fa-star";

        star.onclick = () => {
            setStars(id, i, type);
    };

el.appendChild(star);
}
}

function setStars(id, value, type) {
    document.querySelectorAll("#" + id + " i").forEach((s, i) => {
        s.classList.toggle("active", i < value);
});

if (type === "occ") occasionRating = value;
if (type === "overall") overallRating = value;

generate();
}


/* 🧠 GENERATE REVIEW */
//random selection
function getRandomReview(list) {
    if (!list || list.length === 0) return "";
    return list[Math.floor(Math.random() * list.length)];
}

function generate() {
    let name = document.getElementById("rName").value.trim() || "Customer";
    let occ = document.getElementById("rOccasion").value;

    if (!occ) return;

    let list = templates[occ];
    //let base = list[Math.floor(Math.random() * list.length)];
    let base = getRandomReview(list);

    document.getElementById("reviewText").value =
    `Name: ${name}
    Occasion: ${occ}

    Occasion Rating: ${"⭐".repeat(occasionRating)}
    Overall Rating: ${"⭐".repeat(overallRating)}

    Review:
        ${base}
    
    Highly recommended 🎈 Balloon Decorations And Events Service 🎈 in Anand for any special occasion!`;
    }


/* 🍞 TOAST */
function showToast(msg, type = "success") {
    document.getElementById("toastMsg").innerText = msg;

    const toast = document.getElementById("reviewToast");
    toast.className = `toast text-bg-${type} border-0`;

    bootstrap.Toast.getOrCreateInstance(toast, { delay: 2000 }).show();
}


    /* ⚡ COPY TEXT */
    function copyText(textarea) {
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, 99999);

        try {
            document.execCommand("copy");
            showToast("Copied successfully 📋");
            return true;
        } catch (e) {
            showToast("Copy failed ❌", "danger");
            return false;
        }
    }


    /* 🔄 RESET FORM */
    function resetForm() {
        document.getElementById("rName").value = "";
        document.getElementById("rOccasion").value = "";
        document.getElementById("reviewText").value = "";

        occasionRating = 0;
        overallRating = 0;
        step = 0;

        document.querySelectorAll(".stars i").forEach(s => s.classList.remove("active"));

        let btn = document.getElementById("submitReview");
        btn.innerText = "Submit Review";
        btn.className = "btn btn-success w-100 mt-3";
    }


    /* 🚀 FLOW */
    document.getElementById("submitReview").addEventListener("click", function () {

        let textarea = document.getElementById("reviewText");

        if (!document.getElementById("rName").value ||
            !document.getElementById("rOccasion").value) {
            showToast("Please fill all fields", "danger");
            return;
        }

        if (step === 0) {

            if (!textarea.value) {
                showToast("Generate review first", "danger");
                return;
            }

            copyText(textarea);

            this.innerText = "Copy Review";
            this.className = "btn btn-primary w-100 mt-3";

            step = 1;
            return;
        }

        if (step === 1) {            
            window.open(reviewUrl, "_blank");

            resetForm();
        }

    });


    /* INIT */
    createStars("occasionStars", "occ");
    createStars("overallStars", "overall");

