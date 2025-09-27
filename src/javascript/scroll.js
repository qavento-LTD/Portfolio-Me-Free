let btn = document.querySelector('.btn_top');

// لما أعمل Scroll
window.onscroll = function() {
   if (window.scrollY > 100) {
      btn.style.display = 'inline-block';
   } else {
      btn.style.display = 'none';
   }
}

// لما أضغط على الزر
btn.onclick = function() {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}