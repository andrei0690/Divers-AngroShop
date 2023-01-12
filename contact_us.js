const observer = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		console.log(entry);
		if(entry.isIntersecting)
		{
			entry.target.classList.add("show");	
		}
		
	})
})

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) =>
{
	observer.observe(el);
})

const contactDescription = document.querySelector('.description-input');

contactDescription.value = '';