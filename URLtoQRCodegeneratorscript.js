// Get the URL you want to generate a QR code for
const url = "https://www.linkedin.com/in/tanushree-borase77/";

// Generate QR code
const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200
});
