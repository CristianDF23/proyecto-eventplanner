$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});

let navBar = document.getElementById('navBar');
let text = document.getElementsByClassName('link');

window.onscroll = () => {
  if (screen.width > 721) {
    if (document.documentElement.scrollTop > 50) {
      for (let i = 0; i < text.length; i++) {
        text[i].style.color = 'black';
      }
      navBar.style.background = 'white';
    } else {
      for (let i = 0; i < text.length; i++) {
        text[i].style.color = 'white';
      }
      navBar.style.background = 'transparent';
    }
  } else if (screen.width < 721) {
    if (document.documentElement.scrollTop > 50) {
      navBar.style.background = 'white';
    } else {
      navBar.style.background = 'transparent';
    }
  }
}





