let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');
let links = document.querySelectorAll('.link a');


nav.style.marginLeft = '6000px';
menu.onclick = () => {
    if (nav.style.marginLeft === "6000px") {
      nav.style.marginLeft = '136px';
      menu.src = 'public/icon/clear.svg';
    } else {
      nav.style.marginLeft = '6000px';
      menu.src = 'public/icon/menu.svg';
    }
}
links.forEach(link => {
    link.onclick = () => {
        nav.style.marginLeft = '6000px';
        menu.src = 'public/icon/menu.svg';
    } 
});