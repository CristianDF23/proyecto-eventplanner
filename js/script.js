AOS.init();

let navBar = document.getElementById('navBar');
let link = document.getElementsByClassName('link');
let btnMenu = document.getElementById('btncheck');
let logo = document.getElementById('logo')

window.onscroll = () => {
    if (window.innerWidth  > 850) {
        if (document.documentElement.scrollTop > 50) {
            navBar.style.background = 'white';
            for (const elem of link) {
                elem.style.color = 'black';
            }
            logo.style.filter = 'none'
        } else {
            navBar.style.background = 'transparent'
            for (const elem of link) {
                elem.style.color = 'white';
            }
            logo.style.filter = 'invert(100%)'
        }
    }else{
        if (document.documentElement.scrollTop > 50){
            navBar.style.background = 'white';
            btnMenu.style.color = 'black';
            logo.style.filter = 'none'
        }else{
            navBar.style.background = 'transparent'
            btnMenu.style.color = 'white';
            logo.style.filter = 'invert(100%)'
        }
    }
}
