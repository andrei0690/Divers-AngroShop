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