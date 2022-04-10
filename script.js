const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    // when inserting url or text in the input box
    let qrValue = qrInput.value.trim();
    // if there is no input in the text box no qr will be generated
    if (!qrValue) return; 
    console.log(qrValue);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        // when QR image is loading wrapper will show new qr code
        wrapper.classList.add("active");
        generateBtn.innerText = "Generating new QR code";
    })
})