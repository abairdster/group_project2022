const catButtn = document.getElementById("catButtn")
catImg = document.getElementById("imgCard")
catButtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("https://api.catboys.com/img").then(function(response) {
        return response.json()
        
    }) .then(function(data) {
        console.log(data)
        catImg.src = data.url;
    })

})

const kayneBtn = document.getElementById("KayneBtn")
quoteInput = document.getElementById("quote")

kayneBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("https://api.kanye.rest")
        .then(response => response.json())
        .then(data => (quoteInput.innerHTML = data.quote));
})


const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    event.preventDefault();
    // when inserting url or text in the input box
    let qrValue = qrInput.value.trim();
    if (!qrValue) return; 
    console.log(qrValue);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    wrapper.classList.add("active");
})

const title = document.getElementById('title');
const titleDisplay = document.querySelector(".title-display");

const recipientNameInput = document.getElementById("rname");
const senderNameInput = document.getElementById("sname");

const recipientNameDisplay = document.querySelector('.r-name-display');
const senderNameDisplay = document.querySelector('.s-name-display');

const message = document.getElementById('message');
const senderMessageDisplay = document.querySelector('.message-display');



title.addEventListener("keyup", function() {
    titleDisplay.textContent = title.value;
})

recipientNameInput.addEventListener("keyup", function() {
    recipientNameDisplay.textContent = recipientNameInput.value;
})

senderNameInput.addEventListener("keyup", function() {
    senderNameDisplay.textContent = senderNameInput.value;
})

message.addEventListener("keyup", function() {
    senderMessageDisplay.textContent = message.value;
})

const form = document.querySelector('form')

form.addEventListener("submit",event => {
    event.preventDefault()
    recipientNameDisplay.textContent = recipientNameInput.value;
    senderNameDisplay.textContent = senderNameInput.value;
    titleDisplay.textContent = title.value;
    senderMessageDisplay.textContent = message.value;
    displayImage.src = selectImage.value;
})