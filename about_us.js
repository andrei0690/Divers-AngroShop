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

const hiddenHeaders = document.querySelectorAll('.header');

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) =>
{
	observer.observe(el);
})

hiddenHeaders.forEach((el) =>
{
	headerObserver.observe(el);
})

// BackUp Button

// Ca sa apara

const backupButtons = document.querySelectorAll('.backup-button');
const backUpButton = document.querySelector('.backup-div');

console.log('mata');
backUpButton.classList.remove('display-backup-button-div');
console.log('tactu ;)');

window.addEventListener('scroll', () => {
  
  	if (window.pageYOffset >= 1320) 
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
fill_radio()

// Click and change slide
carouselRadiop01.addEventListener('change', (e) => {
  carousel_remove_fill_all()
  carouselBar01.style.backgroundColor = '#ACD279';
  reset_carousel()
})
carouselRadiop02.addEventListener('change', (e) => {
  carousel_remove_fill_all()
  carouselBar02.style.backgroundColor = '#ACD279';
  reset_carousel()
})
carouselRadiop03.addEventListener('change', (e) => {
  carousel_remove_fill_all()
  carouselBar03.style.backgroundColor = '#ACD279';
  reset_carousel()
})
carouselRadiop04.addEventListener('change', (e) => {
  carousel_remove_fill_all()
  carouselBar04.style.backgroundColor = '#ACD279';
  reset_carousel()
})
carouselRadiop05.addEventListener('change', (e) => {
  carousel_remove_fill_all()
  carouselBar05.style.backgroundColor = '#ACD279';
  reset_carousel()
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
  const CarouselBars = document.querySelectorAll('.bar');

  CarouselBars.forEach(bar =>
  {
    bar.style.background = 'none';
  })
}

// Changes slide, if it reaches the maximum capacity it goes in "Previous Mode" till it reaches a capacity again
function change_slide() {
  
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
