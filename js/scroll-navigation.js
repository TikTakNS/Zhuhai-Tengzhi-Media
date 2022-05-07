// Toggle on-scroll class when user scroll down

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
  // Target element
  const navBar = document.querySelector('.header');

  if (document.documentElement.scrollTop > 50){
    navBar.classList.add('on-scroll');
  } else {
    navBar.classList.remove('on-scroll');
  }
}