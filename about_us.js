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

const OrarSection = document.querySelector('.orar-info-section');

globalbackupbuttons = 1;

const backUpbuttonObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			globalbackupbuttons = 2;
			backUpButton.classList.remove('display-backup-button-div');

		}
		else
		{
			globalbackupbuttons = 1;
			if (window.pageYOffset >= 1320)
			{
				backUpButton.classList.add('display-backup-button-div');
			}
			
		}
		
	})
})

const createdBackupDiv = document.querySelector('#created-backup-div');
const createdBackupButton = document.querySelector('#created-backup-button');

backUpbuttonObserver.observe(OrarSection);


// Progress Bar

const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
  

  const {scrollTop, scrollHeight} = document.documentElement;

  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100;

  if(scrollPercent == 100)
  {
    progressBar.style.backgroundColor = 'var(--superlightGreen)'
  }
  else
  {
    progressBar.style.backgroundColor = 'var(--thirdGreen)'
  }

  if (window.pageYOffset > 100) 
  {
		progressBar.classList.add('progressBarAnim');

	}
	else
	{
		progressBar.classList.remove('progressBarAnim');
	}
})

function updateProgressBar() 
{
	const {scrollTop, scrollHeight} = document.documentElement;

	const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';

	progressBar.style.setProperty('--progress', scrollPercent);  
}

document.addEventListener('scroll', updateProgressBar);
  


// Carusel

// Radio Carousel Buttons
const carouselRadiop01 = document.querySelector('#r1');
const carouselRadiop02 = document.querySelector('#r2');
const carouselRadiop03 = document.querySelector('#r3');
const carouselRadiop04 = document.querySelector('#r4');
const carouselRadiop05 = document.querySelector('#r5');

// Radio Carousel Labels
const carouselBar01 = document.querySelector('#bar01');
const carouselBar02 = document.querySelector('#bar02');
const carouselBar03 = document.querySelector('#bar03');
const carouselBar04 = document.querySelector('#bar04');
const carouselBar05 = document.querySelector('#bar05');

// Carousel Interval

let carousel;
GlobalPrevious = 0;

// Starts the Carosel
start_carousel();
fill_radio();

// Click and change slide
carouselRadiop01.addEventListener('change', (e) => {
  carousel_remove_fill_all();
  carouselBar01.style.backgroundColor = '#ACD279';
  reset_carousel();
})
carouselRadiop02.addEventListener('change', (e) => {
  carousel_remove_fill_all();
  carouselBar02.style.backgroundColor = '#ACD279';
  reset_carousel();
})
carouselRadiop03.addEventListener('change', (e) => {
  carousel_remove_fill_all();
  carouselBar03.style.backgroundColor = '#ACD279';
  reset_carousel();
})
carouselRadiop04.addEventListener('change', (e) => {
  carousel_remove_fill_all();
  carouselBar04.style.backgroundColor = '#ACD279';
  reset_carousel();
})
carouselRadiop05.addEventListener('change', (e) => {
  carousel_remove_fill_all();
  carouselBar05.style.backgroundColor = '#ACD279';
  reset_carousel();
})



function start_carousel() {
  carousel = setInterval(change_slide, 5000);
}

function reset_carousel() {
  GlobalPrevious = 0;
  clearInterval(carousel);
  start_carousel();
}

function carousel_remove_fill_all()
{
  const carouselBars = document.querySelectorAll('.bar');

  carouselBars.forEach(bar =>
  {
    bar.style.background = 'none';
  })
}

// Changes slide, if it reaches the maximum capacity it goes in "Previous Mode" till it reaches a capacity again
function change_slide() {
  
  radio_checked = get_current_radio();

  

  if(radio_checked.previousElementSibling == null)
  {
    GlobalPrevious = 0;
  }

 
  if(GlobalPrevious != 1)
  {

    if(radio_checked.nextElementSibling.classList.contains('slide') && radio_checked.nextElementSibling.nextElementSibling.classList.contains('slide'))
    {
      GlobalPrevious = 1;
    }
    else
    {
      radio_checked.nextElementSibling.checked = true;
    }


  }

  if(GlobalPrevious == 1)
  {
    radio_checked.previousElementSibling.checked = true;
  }

  fill_radio();

}

function get_current_radio() {
	
	let radio_checked;

  const carouselRadioInputs = document.querySelectorAll('.carousel-radio');
  const arrayofCarouselRadios = Array.from(carouselRadioInputs);

  arrayofCarouselRadios.forEach(e =>
  {
    if(e.checked)
    {
      radio_checked = e;
    }
  })

  return radio_checked;
}




// Looks for the radios checked and updates the labels
function fill_radio() {
  const carouselRadioInputs = document.querySelectorAll('.carousel-radio');
  const arrayofCarouselRadios = Array.from(carouselRadioInputs);

  if(arrayofCarouselRadios[0].checked)
  {
    carousel_remove_fill_all();
    carouselBar01.style.backgroundColor = '#ACD279';
  }
  if(arrayofCarouselRadios[1].checked)
  {
    carousel_remove_fill_all();
    carouselBar02.style.backgroundColor = '#ACD279';
  }
  if(arrayofCarouselRadios[2].checked)
  {
    carousel_remove_fill_all();
    carouselBar03.style.backgroundColor = '#ACD279';
  }
  if(arrayofCarouselRadios[3].checked)
  {
    carousel_remove_fill_all();
    carouselBar04.style.backgroundColor = '#ACD279';
  }
  if(arrayofCarouselRadios[4].checked)
  {
    carousel_remove_fill_all();
    carouselBar05.style.backgroundColor = '#ACD279';
  }
}


// Carusel la STAFF ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Carusel

// Radio Carousel Buttons
const carouselStaffRadiop01 = document.querySelector('#staff-r1');
const carouselStaffRadiop02 = document.querySelector('#staff-r2');
const carouselStaffRadiop03 = document.querySelector('#staff-r3');


// Radio Carousel Labels
carouselStaffBar01 = document.querySelector('#staff-bar01');
carouselStaffBar02 = document.querySelector('#staff-bar02');
carouselStaffBar03 = document.querySelector('#staff-bar03');


// Carousel Interval

let staffCarousel;
GlobalStaffPrevious = 0;

// Starts the Carosel
start_staff_carousel();
fill_staff_radio();


// Click and change slide
carouselStaffRadiop01.addEventListener('change', (e) => {
  carousel_staff_remove_fill_all()
  carouselStaffBar01.style.backgroundColor = '#ACD279';
  check_staff_elements();
  reset_staff_carousel();
})
carouselStaffRadiop02.addEventListener('change', (e) => {
  carousel_staff_remove_fill_all()
  carouselStaffBar02.style.backgroundColor = '#ACD279';
  check_staff_elements();
  reset_staff_carousel();
})
carouselStaffRadiop03.addEventListener('change', (e) => {
  carousel_staff_remove_fill_all()
  carouselStaffBar03.style.backgroundColor = '#ACD279';
  check_staff_elements();
  reset_staff_carousel();
})

function get_current_staff_radio()
{
	let radio_checked;

  const carouselRadioInputs = document.querySelectorAll('.staff-carousel-radio');
  const arrayofCarouselRadios = Array.from(carouselRadioInputs);

  arrayofCarouselRadios.forEach(e =>
  {
    if(e.checked)
    {
      radio_checked = e;
    }
  })

  return radio_checked;
}
function start_staff_carousel() {
  staffCarousel = setInterval(change_staff_slide, 3000);
}
function stop_staff_carousel()
{
  clearInterval(staffCarousel);
}
function reset_staff_carousel() {
  GlobalStaffPrevious = 0;
  clearInterval(staffCarousel);
  start_staff_carousel();
}

function carousel_staff_remove_fill_all()
{
  const carouselBars = document.querySelectorAll('.staff-bar');

  carouselBars.forEach(bar =>
  {
    bar.style.background = 'none';
  })
}

// Changes slide, if it reaches the maximum capacity it goes in "Previous Mode" till it reaches the capacity again
function change_staff_slide() {
  
  radio_checked = get_current_staff_radio();

  

  if(radio_checked.previousElementSibling == null)
  {
    GlobalStaffPrevious = 0;
  }

 
  if(GlobalStaffPrevious != 1)
  {

    if(radio_checked.nextElementSibling.classList.contains('staff-slide') && radio_checked.nextElementSibling.nextElementSibling.classList.contains('staff-slide'))
    {
      GlobalStaffPrevious = 1;
    }
    else
    {
      radio_checked.nextElementSibling.checked = true;
    }


  }

  if(GlobalStaffPrevious == 1)
  {
    radio_checked.previousElementSibling.checked = true;
  }

  fill_staff_radio();
  check_staff_elements();

}

function check_staff_elements() {
  
  radio_checked = get_current_staff_radio();
  

  radio_checked_id = radio_checked.getAttribute('id');


  if (radio_checked_id == 'staff-r1') 
  {
     previousStaffArrow.style.opacity = '0.1';
     previousStaffArrow.style.pointerEvents = 'none';
  }
  else
  {
     previousStaffArrow.style.opacity = '1';
     previousStaffArrow.style.pointerEvents = 'all';
  }

  if (radio_checked_id == 'staff-r3') 
  {
     nextStaffArrow.style.opacity = '0.1';
     nextStaffArrow.style.pointerEvents = 'none';
  }
  else
  {
     nextStaffArrow.style.opacity = '1';
     nextStaffArrow.style.pointerEvents = 'all';
  }

}


// Looks for the radios checked and updates the labels
function fill_staff_radio(){

  const carouselRadioInputs = document.querySelectorAll('.staff-carousel-radio');
  const arrayofCarouselRadios = Array.from(carouselRadioInputs);

  if(arrayofCarouselRadios[0].checked)
  {
    carousel_staff_remove_fill_all()
    carouselStaffBar01.style.backgroundColor = 'var(--fourthGreen)';
  }
  if(arrayofCarouselRadios[1].checked)
  {
    carousel_staff_remove_fill_all()
    carouselStaffBar02.style.backgroundColor = 'var(--fourthGreen)';
  }
  if(arrayofCarouselRadios[2].checked)
  {
    carousel_staff_remove_fill_all()
    carouselStaffBar03.style.backgroundColor = 'var(--fourthGreen)';
  }

}

previousStaffArrow = document.querySelector('#previous-carousel-staff-arrow');
nextStaffArrow = document.querySelector('#next-carousel-staff-arrow');
check_staff_elements();

previousStaffArrow.addEventListener('click', () => {
  
  radio_checked = get_current_staff_radio();
  radio_checked.previousElementSibling.checked = true;
  fill_staff_radio();
  check_staff_elements()
  reset_staff_carousel();

})

nextStaffArrow.addEventListener('click', () => {
  
  radio_checked = get_current_staff_radio();

  radio_checked.nextElementSibling.checked = true;
  fill_staff_radio();
  check_staff_elements();
  reset_staff_carousel();

})

// Cand sunt pe Desktop sa nu existe caruselul, deci sa existe 3 fotografii si nume
let staffCarouselContainerAll = document.querySelector('.staff-carousel');
let staffSection = document.querySelector('.staff-section');
let staffDiv = document.querySelector('.staff');
let staffSwithced = false;

updateStaffSection();

window.addEventListener("resize", () =>
{
  updateStaffSection();
});

function updateStaffSection()
{
  if(window.innerWidth >= 750 && staffSwithced == false)
  {
      staffCarouselContainerAll.innerHTML = '';
      stop_staff_carousel();
      create3Photos();
      staffSwithced = true;
  }
  if(window.innerWidth <= 750 && staffSwithced == true)
  {
    console.log("ELSE");
    staffDiv.innerHTML = '';
    staffSwithced = false;
    // reset_staff_carousel();
  }

}

function create3Photos() {

  console.log('CREATE');

  let staffPhotos = document.createElement('div');
  staffPhotos.classList.add('staff-photos');

  let staffPhotoDiv01 = document.createElement('div');
  staffPhotoDiv01.classList.add('staff-photo-div');

  let staffPhotoDiv02 = document.createElement('div');
  staffPhotoDiv02.classList.add('staff-photo-div');

  let staffPhotoDiv03 = document.createElement('div');
  staffPhotoDiv03.classList.add('staff-photo-div');


  let staffPhoto01 = document.createElement('img');
  staffPhoto01.classList.add('staff-photo');
  staffPhoto01.src = 'staff02.jpg';
  let staffPhoto02 = document.createElement('img');
  staffPhoto02.classList.add('staff-photo');
  staffPhoto02.src = 'staff02.jpg';

  let staffPhoto03 = document.createElement('img');
  staffPhoto03.classList.add('staff-photo');
  staffPhoto03.src = 'staff02.jpg';



  staffPhotoDiv01.appendChild(staffPhoto01);
  staffPhotoDiv02.appendChild(staffPhoto02);
  staffPhotoDiv03.appendChild(staffPhoto03);

  staffPhotos.appendChild(staffPhotoDiv01);
  staffPhotos.appendChild(staffPhotoDiv02);
  staffPhotos.appendChild(staffPhotoDiv03);

  staffDiv.appendChild(staffPhotos);

  staffSection.appendChild(staffDiv);

}