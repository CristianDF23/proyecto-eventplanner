AOS.init();

const navBar = document.getElementById('navBar');
const link = document.getElementsByClassName('link');
const btnMenu = document.getElementById('btncheck');
const logo = document.getElementById('logo')
let scrollBar = false

window.onscroll = () => {
    if (window.innerWidth > 850) {
        if (document.documentElement.scrollTop === 0) {
            scrollBar = false
            navBar.style.background = 'transparent'
            for (const elem of link) {
                elem.style.color = 'white';
                logo.style.filter = 'invert(100%)'
            }
            navBar.style.opacity = '1'
        } else {
            scrollBar = true
            navBar.style.background = 'white';
            for (const elem of link) {
                elem.style.color = 'black';
            }
            navBar.style.opacity = '1'
            logo.style.filter = 'none'
            setTimeout(() => {
                if (scrollBar) {
                    scrollBar = false
                    navBar.style.opacity = '.1'
                }
            }, 2000)
        }
    } else {
        if (document.documentElement.scrollTop === 0) {
            scrollBar = false;
            navBar.style.background = 'transparent'
            btnMenu.style.color = 'white'
            logo.style.filter = 'invert(100%)'
            navBar.style.opacity = '1'
        } else {
            scrollBar = true
            navBar.style.background = 'white';
            btnMenu.style.color = 'black'
            logo.style.filter = 'none'
            navBar.style.opacity = '1'
            setTimeout(() => {
                if (scrollBar) {
                    scrollBar = false
                    navBar.style.opacity = '.1'
                }
            }, 2000)
        }
    }
}
