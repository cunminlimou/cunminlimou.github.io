
; (function () {

  const menuToggler = document.getElementById('navbar-toggler')
  const slideToggler = document.getElementById('slide-toggler')
  const navbar = document.getElementById('navbar-list')
  const slide = document.getElementById('slide-list')
  const pagenav = document.getElementById('page-nav')
  
  var navbar_open = false;
  var slide_open = false;

  menuToggler.addEventListener('click', function () {
    
	if(slide_open)
	{
		slideToggler.click();
	}
	
	pagenav.classList.toggle('active')
	navbar.classList.toggle('active')
	navbar_open = !navbar_open;

  })
  
  slideToggler.addEventListener('click', function () {
    
	if(navbar_open)
	{
		menuToggler.click();
	}
	
	pagenav.classList.toggle('active')
	slide.classList.toggle('active')
	slide_open = !slide_open;

  })

})()
