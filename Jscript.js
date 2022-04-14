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
const formID = document.querySelector("#save-later-form")
const url = location.href
const formIdentifier =`${url}${formID}`;
const saveButton = document.querySelector("#save"); 
const alertBox = document.querySelector(".alert"); 
const note = "Form draft has been saved!";

let formElements = form.elements

form.addEventListener("submit",event => {
    event.preventDefault()
    recipientNameDisplay.textContent = recipientNameInput.value;
    senderNameDisplay.textContent = senderNameInput.value;
    titleDisplay.textContent = title.value;
    senderMessageDisplay.textContent = message.value;
    // displayImage.src = selectImage.value;
})

const getFormData = () => {
    let data = { [formIdentifier]: {} }; // create an empty object with the formIdentifier as the key and an empty object as its value
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[formIdentifier][element.name] = element.value;
      }
    }
    return data;
  };
  
  saveButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    alert("Your card has been saved")
  };

  const wrapper = document.querySelector(".wrapper");
  qrInput = wrapper.querySelector(".form input");
  generateBtn = wrapper.querySelector(".form button");
  qrImg = wrapper.querySelector(".qr-code img");
  
  generateBtn.addEventListener("click", () => {
      // when inserting url or text in the input box
      let qrValue = qrInput.value.trim();
      if (!qrValue) return; 
      console.log(qrValue);
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${qrValue}`;
      wrapper.classList.add("active");
  })