const nav = document.getElementById('nav');
const links = nav.querySelectorAll('a')

document.body.onscroll = () => {

    if(window.pageYOffset >= 567){

        nav.classList.remove('bg-transparent')
        nav.classList.add('bg-dark')
        nav.classList.add('w-100')
        nav.classList.add('rounded-bottom')
    }
    else {
        nav.classList.add('bg-transparent')
    }
}


