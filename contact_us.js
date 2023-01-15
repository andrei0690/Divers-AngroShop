// Rezolva Bug-ul unde descrierea are deja spatiu in ea
const contactDescription = document.querySelector('.description-input');

contactDescription.value = '';


//Cand apesi pe Trimite sa iti arate diferite popup-uri, sa dispara daca de duci sus de tot sau apesi pe X sau daca trec 5 secunde
const emailSendSuccesPopup = document.querySelector('.succes-popup');
const xButtonOfemail = document.querySelector('.x-at-the-end-of-flex');
const submitEmailButton = document.querySelector('.submit-button');
const emailForm = document.querySelector('.contact-form');
const succesPopupMessage = document.querySelector('.succes-popup-message');
const emailInputs = document.querySelectorAll('.input-user');
const subjectInput = document.querySelector('.subject-input');
const submitDiv = document.querySelector('.submit-div');
const submitButton = document.querySelector('.submit-button');
let changeValuestimeout;
let changeValuestimeout02;

xButtonOfemail.addEventListener('click', (e) => {
    emailSendSuccesPopup.classList.remove("show-popup");
})

function clearInfo() {
  subjectInput.value = '';
  contactDescription.value = '';
  emailInputs.forEach(e => 
   {
	    e.value = '';
   })
}

function setchangeValuesTimeout() {
    
    clearTimeout(changeValuestimeout);
    clearTimeout(changeValuestimeout02);
    
    changeValuestimeout = setTimeout(() => {
        submitEmailButton.innerHTML = 'Trimite';
        emailSendSuccesPopup.classList.remove("show-popup");

    }, 3000);

    
    
    changeValuestimeout02 = setTimeout(() => {
        emailSendSuccesPopup.style.backgroundColor = 'var(--fourthGreen)';
        succesPopupMessage.innerHTML = 'Email trimis cu succes!';
    }, 10000);

    setTimeout(clearInfo, 3000);
    setTimeout(() =>
    {
        submitDiv.style.pointerEvents = 'all';
        submitDiv.style.cursor = 'pointer';
    }, 3000);


}


document.addEventListener('scroll', (e) => {
    if (window.pageYOffset <= 100) {
        emailSendSuccesPopup.classList.remove("show-popup");
    }
})

submitDiv.addEventListener('click', (e) => {
    if (submitButton.innerHTML == "Trimite") {

        if (emailForm.checkValidity()) {

        emailSendSuccesPopup.classList.add("show-popup");
        submitEmailButton.innerHTML = 'Succes';
        
        } 
        else 
        {
            emailSendSuccesPopup.style.backgroundColor = 'var(--white)';
            submitEmailButton.innerHTML = 'Erroare';
            emailSendSuccesPopup.classList.add("show-popup");
            succesPopupMessage.innerHTML = 'Am detectat o problema';
        }
        submitDiv.style.pointerEvents = 'none';
        setchangeValuesTimeout();
    }

})