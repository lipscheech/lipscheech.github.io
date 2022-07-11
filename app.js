const CERTIFICADOS = [
    {
        "nome": "Infraestrutura Ágil com práticas DevOps",
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
let carouselItem,
    carouselCaption,
    nome,
    institucao,
    horas,
    ano,
    logo,
    duration,
    index = 0;

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

function createElementLink() {
    return document.createElement('a');
}

function createElementDiv() {
    return document.createElement('div');
}

function createElementP() {
    return document.createElement('p');
}

function createElementH5() {
    return document.createElement('h5');
}

function createElementImage() {
    return document.createElement('img');
}

CERTIFICADOS.forEach(c => {
    console.log(c);
    carouselItem = createElementLink();
    carouselInner.appendChild(carouselItem);
    carouselItem.classList.add('carousel-item');
    carouselItem.classList.add('link');
    index === 0 ? carouselItem.classList.add('active') : 0;
    carouselItem.setAttribute('href', c.link);

    logo = createElementImage();
    carouselItem.appendChild(logo);
    logo.setAttribute('src', c.logo);
    logo.classList.add('education__imagem')
    logo.classList.add('d-block');
    logo.classList.add('img-thumbnail')

    carouselCaption = createElementDiv();
    carouselItem.appendChild(carouselCaption);
    carouselCaption.classList.add('carousel-caption');
    carouselCaption.classList.add('mb-2');
    carouselCaption.classList.add('d-none');
    carouselCaption.classList.add('d-md-block');

    institucao = createElementP();
    carouselCaption.appendChild(institucao);
    institucao.textContent = c.instituicao;
    institucao.classList.add('mb-2');

    nome = createElementH5();
    carouselCaption.appendChild(nome);
    nome.textContent = c.nome;
    nome.classList.add('mb-2');

    duration = createElementDiv();
    carouselCaption.appendChild(duration);

    duration.classList.add('d-flex');
    duration.classList.add('align-items-center');
    duration.classList.add('justify-content-center');

    horas = createElementP();
    duration.appendChild(horas);
    horas.textContent = "Carga horária: " + c.cargaHoraria + "H";
    horas.classList.add('me-3');

    ano = createElementP();
    duration.appendChild(ano);
    ano.textContent = "Ano de conclusão: " + c.ano;

    index++;
})






