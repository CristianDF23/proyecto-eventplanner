AOS.init();

const navBar = document.getElementById('navBar');
const link = document.querySelectorAll('.link');
const btnMenu = document.getElementById('btncheck');
const logo = document.getElementById('logo')
const navMobile = document.getElementById('navMobile')

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
            navBar.classList.remove('navScroll')
            navBar.style.background = 'transparent'
            for (const elem of link) {
                elem.style.color = 'white';
            }
        } else {
            navBar.classList.add('navScroll')
            navBar.style.background = 'white';
            navBar.style.opacity = '.95'
            for (const elem of link) {
                elem.style.color = 'black';
            }
        }
    } else {
        if (document.documentElement.scrollTop === 0) {
            navBar.classList.remove('navScroll')
            navBar.style.background = 'transparent'
            btnMenu.style.color = 'white'
            navDesplegado = false;
        } else {
            navBar.classList.add('navScroll')
            navBar.style.background = 'white';
            navBar.style.opacity = '.95'
            btnMenu.style.color = 'black'
        }
    }
}

