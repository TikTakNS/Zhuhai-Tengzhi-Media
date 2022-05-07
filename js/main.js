let menuTog = document.querySelector('.burger');
let navHolder = document.querySelector('.nav-holder');
let navLinks = Array.from(document.querySelectorAll('.nav-links'));
let contact = document.querySelector('.contact');

menuTog.addEventListener('click', ()=>{
  menuTog.classList.toggle('active');
  navHolder.classList.toggle('active');
  

  // Remove active classs to restard delayed effect
  contact.classList.remove('active');
 

  if(menuTog.classList.contains('active')){
    for(let i = 0; i < navLinks.length; i++){
      navLinks[i].classList.remove('active');
      setTimeout(()=>{
        navLinks[i].classList.add('active')
      }, i * 150)
    }

    setTimeout(()=> {
      contact.classList.add('active');
    }, 600)
  }
});



// Smooth Scroll Script
let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});
