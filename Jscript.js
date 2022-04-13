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

KayneBtn.addEventListener("click", (event) => {
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

const title = document.getElementById ("title")
const recipient = document.getElementById ("recipient")
const sender = document.getElementById ("sender")
const titleDisplay = document.getElementById ("title-display")
const senderDisplay = document.getElementById ("sender-display")
const recipientDisplay = document.getElementById ("recipient-display")
const message = document.getElementById("message")
const messageDisplay = document.getElementById ("message-display")
const form = document.querySelector('form')
titleDisplay.addEventListener("keyup", function() {
    titleDisplay.textContent = title.value
})
recipientDisplay.addEventListener("keyup", function(){
    recipientDisplay.textContent = recipient.value;
})
senderDisplay.addEventListener("keyup",function(e){
    senderDisplay.textContent = sender.value
})
messageDisplay.addEventListener("keyup", function(){
    messageDisplay.textContent = message.value
})

form.addEventListener("submit",event => {
    event.preventDefault()
    titleDisplay.textContent = title.value
    recipientDisplay.textContent = recipient.value;
    messageDisplay.textContent = message.value
    senderDisplay.textContent = sender.value
})