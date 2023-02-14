// Cand vede o sectiunea o arata cu animatie

const observer = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			entry.target.classList.add("show");	
		}
		
	})
})

const headerObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			entry.target.classList.add("intersect");
		}

		
	})
})

const downAnimationObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			entry.target.classList.add("down-up-anim");
		}

		
	})
})

const hiddenHeaders = document.querySelectorAll('.header');

const hiddenElements = document.querySelectorAll('.hidden');

const downElements = document.querySelectorAll('.down-up-preset');

hiddenElements.forEach((el) =>
{
	observer.observe(el);
})

hiddenHeaders.forEach((el) =>
{
	headerObserver.observe(el);
})

downElements.forEach((el) =>
{
	downAnimationObserver.observe(el);
})

// FUZZ LA TEXT

let scrolling = false;
timeoutfromscrollingforgreentext = false;

const greenTexts = document.querySelectorAll('.green-text');

function start_glow_from_green_text_timeout(greenText) {
	
	 scrollTimeout = setTimeout(() => {

	  	scrolling = false;
	  	greenText.style.textShadow = 'none';
	  	timeoutfromscrollingforgreentext = true;
	    
	  }, 100)
}

greenTexts.forEach(greenText =>
{
	document.addEventListener('scroll', () => {
	  
	  if(!scrolling)
	  {
	  	greenText.style.textShadow = '1px 0px 0.15em var(--fourthGreen)';
	  }


	  start_glow_from_green_text_timeout(greenText);
	  
	 
	})
})

// BACKUP BUTTON

// BackUp Button

// Calculam procentul la pagina ca sa apara butonul mereu dupa o anumita josime

const backupButtons = document.querySelectorAll('.backup-button');
const backUpButton = document.querySelector('.backup-div');

window.addEventListener('scroll', () => {
    
    const {scrollTop, scrollHeight} = document.documentElement;

    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100;



  	if (scrollPercent >= 23) 
  	{
  		if(globalbackupbuttons == 1)
  		{
  			backUpButton.classList.add('display-backup-button-div');
  		}
	 }
	 else
	 {
		backUpButton.classList.remove('display-backup-button-div');
	 }
})

// Cand apesi te duce sus 
backupButtons.forEach(button =>
{
	button.addEventListener('click', () => {
	  window.scrollTo({
	    top: 0,
	    behavior: 'smooth'
	  });
	});
})

// Cand vede ultima sectiune sa dispara
const diversOrarDiv = document.querySelector('.divers-orar-div');
const createdBackupButtonDivHTML = document.querySelector('.created-backup-button-div-html');
const createdBackupDiv = document.querySelector('#created-backup-div');
const createdBackupButton = document.querySelector('#created-backup-button');
const OrarSection = document.querySelector('.orar-info-section');
const endSection =  document.querySelector('.end-section');
const endSectionStart = document.querySelector('.end-section-start')
globalbackupbuttons = 1;
buttonMoved = false;

function setBackupButton()
{
      let orarSectionRect = endSectionStart.offsetTop;
      
      backUpButton.classList.add('positioned-backup-button');
      backupbuttontopVar = orarSectionRect + 'px';

      backUpButton.classList.add('postion-backup-button-div');
      backUpButton.style.setProperty('--top', backupbuttontopVar);

      buttonMoved = true;
}

function unsetBackupButton()
{
      backUpButton.classList.remove('positioned-backup-button');
      backUpButton.classList.remove('postion-backup-button-div');

      buttonMoved = false;
}



const backUpbuttonObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{

    const {scrollTop, scrollHeight} = document.documentElement;

    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100;
    if(entry.isIntersecting && buttonMoved == false)
    {
      setBackupButton();
    }
    if(!entry.isIntersecting && buttonMoved == true && scrollPercent <= 85)
    {
      unsetBackupButton();
    }
  
  })
}
)


backUpbuttonObserver.observe(endSectionStart);

function dissapearBackupButton()
{
  backUpButton.classList.add('dissapear-backup-button-div');
  backUpButton.classList.remove('display-backup-button-div');

}

function createBackupButton()
{
   let realCreatedBackupButtonDiv = document.createElement('div');
   realCreatedBackupButtonDiv.classList.add('display-backup-button-div');
   realCreatedBackupButtonDiv.style.marginTop = '25px';

   let realCreatedBackupButton = document.createElement('button');
   realCreatedBackupButton.classList.add('backup-button');
   realCreatedBackupButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

   realCreatedBackupButtonDiv.appendChild(realCreatedBackupButton);

   createdBackupButtonDivHTML.appendChild(realCreatedBackupButtonDiv);
   
}
