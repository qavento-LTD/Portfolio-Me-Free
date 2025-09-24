let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');


nav.style.marginLeft = '6000px';
menu.onclick = () => {
    if (nav.style.marginLeft === "6000px") {
      nav.style.marginLeft = '60px';
      menu.src = '/public/icon/clear.svg';
    } else {
      nav.style.marginLeft = '6000px';
      menu.src = '/public/icon/menu.svg'
    }
}
