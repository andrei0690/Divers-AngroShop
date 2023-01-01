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
  
