window.addEventListener('scroll',function(){
	var nav = document.getElementById('page-nav');  
	var rect = nav.getBoundingClientRect();  
	var sidebar = document.getElementById('sidebar-container');
	sidebar.style.top = rect.bottom + 5 * getEmPixels() + 'px';
})

window.addEventListener('load',function(){
	var nav = document.getElementById('page-nav');  
	var rect = nav.getBoundingClientRect();  
	var sidebar = document.getElementById('sidebar-container');
	sidebar.style.top = rect.bottom + 5 * getEmPixels() + 'px';
	//sidebar.style.display = 'inline';
	console.log(sidebar.style.display);
})
