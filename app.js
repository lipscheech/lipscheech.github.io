const CERTIFICADOS = [
    {
        "nome": "Infraestrutura  Ágil  com  práticas  DevOps",
        "instituicao": "4linux",
        "cargaHoraria": 40,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osQV8B73fb1fIK8H0Q",
        "logo": "./assets/img/cursos/logo-4linux.jpg"

    },
    {
        "nome": "Introdução ao Angular 8",
        "instituicao": "Digital Innovation One",
        "cargaHoraria": 5,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osQe65TCxB5_BchoWw",
        "logo": "./assets/img/cursos/logo-dio.jpg"

    },
    {
        "nome": "CyberOps Associate",
        "instituicao": "Cisco Networking Academy",
        "cargaHoraria": 70,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osQhOJPtk1xQR35GGA",
        "logo": "./assets/img/cursos/logo-cisco.png"

    },
    {
        "nome": "Cisco CCNA 1 – Introdução às Redes",
        "instituicao": "Cisco Networking Academy / SENAI",
        "cargaHoraria": 24,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6n60r0CNvSqR7ynEy_Q",
        "logo": "./assets/img/cursos/logo-cisco.png"

    },
    {
        "nome": "JavaScript: programando na linguagem da web",
        "instituicao": "Alura",
        "cargaHoraria": 20,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osF0-75v4HC64tMbBw",
        "logo": "./assets/img/cursos/logo-alura.jpg"

    },
    {
        "nome": "Java  Front/Back",
        "instituicao": "Instituto  Desenvolvimento,  Estratégia  eConhecimento  (IDESCO)  da  Universidade  Estadual  do  Ceará / Lead",
        "cargaHoraria": 33,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osQfMIy9gRMKFhJPOw",
        "logo": "./assets/img/cursos/logo-dell-lead.png"

    },
    {
        "nome": "Programa de Bolsas de Estudos de Língua Inglesa AccessE2C (English to Communicate, Connect,and Catalyze)",
        "instituicao": "Access E2C",
        "cargaHoraria": 210,
        "ano": 2021,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6n6Vh0kvOPNSgs1kmjA",
        "logo": "./assets/img/cursos/logo-access-e2c.png"

    },
]

const nav = document.getElementById('nav');
const links = nav.querySelectorAll('a');
const carouselInner = document.querySelector('.carousel-inner');

document.body.onscroll = () => {
    if (window.pageYOffset >= 567) {

        nav.classList.remove('bg-transparent')
        nav.classList.add('bg-dark')
        nav.classList.add('w-100')
        nav.classList.add('rounded-bottom')
    }
    else {
        nav.classList.add('bg-transparent')
    }
}

function preencherCarrousel(param) {

}

let carouselItem = document.createElement('a');
let carouselCaption = document.createElement('div');
let nome = document.createElement('h5');
let institucao = document.createElement('p');
let horas = document.createElement('p');
let ano = document.createElement('p');
let logo = document.createElement('img');




// link
// d-none d-md-block

function addElement(param){
    
}

CERTIFICADOS.forEach(c => {
    console.log(c);
    carouselInner.appendChild(carouselItem);
    carouselItem.classList.add('carousel-item')
    carouselItem.setAttribute('href', c.link);

    carouselItem.appendChild(logo);
    carouselItem.appendChild(carouselCaption);
    carouselCaption.classList.add('carousel-caption');
    carouselCaption.appendChild(nome);
    carouselCaption.appendChild(institucao);
    carouselCaption.appendChild(horas);
    carouselCaption.appendChild(ano);

    nome.textContent = c.nome;
    institucao.textContent = c.institucao;
    horas.textContent = c.cargaHoraria;
    ano.textContent = c.ano;
    logo.setAttribute('src', c.logo);

})






