// maintenance.js
const maintenance = true;

// false
if (maintenance) {
    fetch("appoffline.html")
        .then(res => {
            if (res.ok) {
                window.location.href = "appoffline.html";
} else {
    showMessage();
}
})
        .catch(() => {
            showMessage();
});
}

function showMessage() {
    document.body.innerHTML = `
<style>
    body {
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
        background: #f4f4f4;
        text-align: center;
    }
    .box {
        padding: 30px;
    }
    h2 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 10px;
        color:#d11212;
    }
    p {
        font-size: 16px;
        margin: 8px 0;
    }
    a {
        color: #007bff;
        font-weight: bold;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    </style>

    <div class="box">
        <h2>Site is under maintenance</h2>
        <p>Please try again later.</p>
        <p>
            Need assistance? Contact our support team:<br>
            <a href="https://abronixtechnologies.github.io/abronix-landing/" target="_blank">
                Abronix Technologies
            </a>
        </p>
    </div>
`;
}