const navlist = document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');

// Click Event 
hamburger.addEventListener('click', ()=> {
    navlist.classList.toggle('navlist-active')
})