let inputBox = document.querySelector(".qr-box input");
let imageBox = document.querySelector(".img-box");
let qrImage = document.getElementById("qrImage");

const generateQR = () => {
  const qrCode =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    inputBox.value;
  if (inputBox.value == "") {
    inputBox.classList.add("shake");
    inputBox.style.border = "1px solid red";
    setTimeout(() => {
      inputBox.classList.remove("shake");
    }, 1000);
  } else {
    qrImage.src = qrCode;
    qrImage;
    imageBox.classList.add("show-qr");
    inputBox.style.border = "1px solid black";
  }
};
