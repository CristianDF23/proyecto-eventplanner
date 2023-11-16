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
            navBar.style.opacity = '.80'
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
            navBar.style.opacity = '.80'
            btnMenu.style.color = 'black'
        }
    }
}

const inputNombre = document.getElementById('nombre');
const inputTelefono = document.getElementById('telefono');
const inputCorreo = document.getElementById('correo');
const inputConsulta = document.getElementById('consulta');
const formAction = document.getElementById('form');
const enviar = document.getElementById('bottom');

enviar.addEventListener('click', (e) => {
    if (inputNombre.value === "" || inputTelefono.value === "" || inputCorreo.value === "" || inputConsulta.value === "") {
        swal({
            icon: "warning",
            title: "Complete todos los campos",
            buttons: false
        });
        e.preventDefault();
    }
    else {
        swal({
            icon: "success",
            title: "Mensaje Enviado",
            buttons: false
        });
        formAction.setAttribute('action', 'https://formsubmit.co/c49ad75802c833620593ea5a588f6196');

        setTimeout(() => {
            const enlace = document.createElement('a');
            enlace.href = 'index.html';
            enlace.style.display = 'none';
            document.body.appendChild(enlace);
            enlace.click();
        }, 1000);
    }
});



