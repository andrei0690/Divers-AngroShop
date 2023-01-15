let staffCarouselContainerAll = document.querySelector('.staff-carousel');
let staffSection = document.querySelector('.staff-section');
let staffDiv = document.querySelector('.staff');
let staffSwitched = false;

if(window.innerWidth <= 750 && staffSwitched == false)
{
    createStaffSlideShow()
}
updateStaffSection();


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

window.addEventListener("resize", () =>
{
  updateStaffSection();
});

function updateStaffSection()
{
  if(window.innerWidth >= 750 && staffSwitched == false)
  {
      staffCarouselContainerAll.innerHTML = '';
      stop_staff_carousel();
      create3Photos();
      staffSwitched = true;
  }
  if(window.innerWidth <= 750 && staffSwitched == true)
  {
    staffDiv.innerHTML = '';
    staffSwitched = false;
    createStaffSlideShow()
    reset_staff_carousel();
  }
  
}

function create3Photos() {

  let staffPhotos = document.createElement('div');
  staffPhotos.classList.add('staff-photos');

  let staffPhotoDiv01 = document.createElement('div');
  staffPhotoDiv01.classList.add('staff-photo-div');

  let staffPhotoDiv02 = document.createElement('div');
  staffPhotoDiv02.classList.add('staff-photo-div');

  let staffPhotoDiv03 = document.createElement('div');
  staffPhotoDiv03.classList.add('staff-photo-div');

  let staffName01 = document.createElement('h4');
  staffName01.innerHTML = '<span class="green-text-glow">~</span>Aurora<span class="green-text-glow">~</span>';
  staffName01.classList.add('staff-name')

  let staffName02 = document.createElement('h4');
  staffName02.innerHTML = '<span class="green-text-glow">~</span>Artemis<span class="green-text-glow">~</span>';
  staffName02.classList.add('staff-name')

  let staffName03 = document.createElement('h4');
  staffName03.innerHTML = '<span class="green-text-glow">~</span>Astros<span class="green-text-glow">~</span>';
  staffName03.classList.add('staff-name')


  let staffPhoto01 = document.createElement('img');
  staffPhoto01.classList.add('staff-photo');
  staffPhoto01.src = 'staff02.jpg';
  let staffPhoto02 = document.createElement('img');
  staffPhoto02.classList.add('staff-photo');
  staffPhoto02.src = 'staff02.jpg';

  let staffPhoto03 = document.createElement('img');
  staffPhoto03.classList.add('staff-photo');
  staffPhoto03.src = 'staff02.jpg';

  staffPhotoDiv01.appendChild(staffName01);
  staffPhotoDiv02.appendChild(staffName02);
  staffPhotoDiv03.appendChild(staffName03);

  staffPhotoDiv01.appendChild(staffPhoto01);
  staffPhotoDiv02.appendChild(staffPhoto02);
  staffPhotoDiv03.appendChild(staffPhoto03);

  staffPhotos.appendChild(staffPhotoDiv01);
  staffPhotos.appendChild(staffPhotoDiv02);
  staffPhotos.appendChild(staffPhotoDiv03);

  staffDiv.appendChild(staffPhotos);

  staffSection.appendChild(staffDiv);

}

function createStaffSlideShow()
{

  let staffSliderShow = document.createElement('div');
  staffSliderShow.classList.add('staff-slidershow');

  let staffSlides = document.createElement('div');
  staffSlides.classList.add('staff-slides');

  let inputStaffRadio01 = document.createElement('input');
  inputStaffRadio01.type = 'radio';
  inputStaffRadio01.classList.add('staff-carousel-radio');
  inputStaffRadio01.name = 'staff-r';
  inputStaffRadio01.setAttribute('id', 'staff-r1');
  inputStaffRadio01.checked = true;

  let inputStaffRadio02 = document.createElement('input');
  inputStaffRadio02.type = 'radio';
  inputStaffRadio02.classList.add('staff-carousel-radio');
  inputStaffRadio02.name = 'staff-r';
  inputStaffRadio02.setAttribute('id', 'staff-r2');

  let inputStaffRadio03 = document.createElement('input');
  inputStaffRadio03.type = 'radio';
  inputStaffRadio03.classList.add('staff-carousel-radio');
  inputStaffRadio03.name = 'staff-r';
  inputStaffRadio03.setAttribute('id', 'staff-r3');

  let staffSlide01 = document.createElement('div');
  staffSlide01.classList.add('staff-slide');
  staffSlide01.classList.add('s1');

  let staffSlide02 = document.createElement('div');
  staffSlide02.classList.add('staff-slide');

  let staffSlide03 = document.createElement('div');
  staffSlide03.classList.add('staff-slide');

  let staffImage01 = document.createElement('img');
  staffImage01.src = 'staff02.jpg';
  staffImage01.alt = 'Staff de la Divers';

  let staffImage02 = document.createElement('img');
  staffImage02.src = 'staff02.jpg';
  staffImage02.alt = 'Staff de la Divers';

  let staffImage03 = document.createElement('img');
  staffImage03.src = 'staff02.jpg';
  staffImage03.alt = 'Staff de la Divers';
 
 //

  let staffNavigation = document.createElement('div');
  staffNavigation.classList.add('staff-navigation');

  let staffCarouselPreviousCreatedArrow = document.createElement('button');
  staffCarouselPreviousCreatedArrow.classList.add('carousel-staff-arrow');
  staffCarouselPreviousCreatedArrow.setAttribute('id', 'previous-carousel-staff-arrow');
  staffCarouselPreviousCreatedArrow.innerHTML = '<';

  let staffBar01 = document.createElement('label');
  staffBar01.for = 'staff-r1';
  staffBar01.setAttribute('id', 'staff-bar01');
  staffBar01.classList.add('staff-bar')

  let staffBar02 = document.createElement('label');
  staffBar02.for = 'staff-r1';
  staffBar02.setAttribute('id', 'staff-bar02');
  staffBar02.classList.add('staff-bar')

  let staffBar03 = document.createElement('label');
  staffBar03.for = 'staff-r1';
  staffBar03.setAttribute('id', 'staff-bar03');
  staffBar03.classList.add('staff-bar')


  let staffCarouselNextCreatedArrow = document.createElement('button');
  staffCarouselNextCreatedArrow.classList.add('carousel-staff-arrow');
  staffCarouselNextCreatedArrow.setAttribute('id', 'next-carousel-staff-arrow');
  staffCarouselNextCreatedArrow.innerHTML = '>';

  //

  staffSlide01.appendChild(staffImage01);
  staffSlide02.appendChild(staffImage02);
  staffSlide03.appendChild(staffImage03);

  staffSlides.appendChild(inputStaffRadio01);
  staffSlides.appendChild(inputStaffRadio02);
  staffSlides.appendChild(inputStaffRadio03);

  staffSlides.appendChild(staffSlide01);
  staffSlides.appendChild(staffSlide02);
  staffSlides.appendChild(staffSlide03);


  staffNavigation.appendChild(staffCarouselPreviousCreatedArrow);
  staffNavigation.appendChild(staffBar01);
  staffNavigation.appendChild(staffBar02);
  staffNavigation.appendChild(staffBar03);
  staffNavigation.appendChild(staffCarouselNextCreatedArrow);

  staffSliderShow.appendChild(staffSlides);
  staffCarouselContainerAll.appendChild(staffSliderShow);
  staffCarouselContainerAll.appendChild(staffNavigation);
  


}