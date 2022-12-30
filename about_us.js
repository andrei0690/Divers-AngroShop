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
