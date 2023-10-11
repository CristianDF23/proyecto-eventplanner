AOS.init();

const navBar = document.getElementById('navBar');
const link = document.querySelectorAll('.link');
const btnMenu = document.getElementById('btncheck');
const logo = document.getElementById('logo')
const navMobile = document.getElementById('navMobile')
let scrollBar = false

let navDesplegado = false;

for (const elem of link) {
    elem.addEventListener('click', () => {
        navMobile.style.left = '-100%';
        navDesplegado = false;
    });
}

btnMenu.addEventListener('click', () => {
    if (navDesplegado) {
        navMobile.style.left = '-100%';
        navDesplegado = false;
    } else {
        navMobile.style.left = '0';
        navDesplegado = true;
    }
});






window.onscroll = () => {
    if (window.innerWidth > 850) {
        if (document.documentElement.scrollTop === 0) {
            scrollBar = false
            navBar.style.background = 'transparent'
            for (const elem of link) {
                elem.style.color = 'white';
            }
            logo.style.filter = 'invert(100%)'
            navBar.style.height = '90px'
        } else {
            scrollBar = true
            navBar.style.background = 'white';
            for (const elem of link) {
                elem.style.color = 'black';
            }
            navBar.style.height = '90px'
            logo.style.display = 'block'
            logo.style.filter = 'none'
            setTimeout(() => {
                if (scrollBar) {
                    scrollBar = false
                    navBar.style.height = '0px'
                    logo.style.display = 'none'
                }
            }, 3000)
        }
    } else {
        if (document.documentElement.scrollTop === 0) {
            scrollBar = false;
            navBar.style.background = 'transparent'
            btnMenu.style.color = 'white'
            logo.style.filter = 'invert(100%)'
            btnMenu.style.display = 'block'
        } else {
            scrollBar = true
            navBar.style.background = 'white';
            navBar.style.height = '90px'
            logo.style.display = 'block'
            btnMenu.style.color = 'black'
            logo.style.filter = 'none'
            btnMenu.style.display = 'block'
            setTimeout(() => {
                if (scrollBar) {
                    scrollBar = false;
                    navBar.style.height = '0px'
                    logo.style.display = 'none'
                    btnMenu.style.display = 'none'
                }
            }, 3000)
        }
    }
    console.log(scrollBar)
}

