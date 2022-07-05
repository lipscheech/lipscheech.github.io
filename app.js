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

const CERTIFICADOS = [
    {
        "nome": "Infraestrutura  Ágil  com  práticas  DevOps",
        "instituicao": "4linux",
        "carga-horaria": 40,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osQV8B73fb1fIK8H0Q",
        "logo": "./assets/img/cursos/logo-4linux.jpg"

    },
    {
        "nome": "Introdução ao Angular 8",
        "instituicao": "Digital Innovation One",
        "carga-horaria": 5,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osQe65TCxB5_BchoWw",
        "logo": "./assets/img/cursos/logo-dio.jpg"

    },
    {
        "nome": "CyberOps Associate",
        "instituicao": "Cisco Networking Academy",
        "carga-horaria": 70,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osQhOJPtk1xQR35GGA",
        "logo": "./assets/img/cursos/logo-cisco.png"

    },
    {
        "nome": "Cisco CCNA 1 – Introdução às Redes",
        "instituicao": "Cisco Networking Academy / SENAI",
        "carga-horaria": 24,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6n60r0CNvSqR7ynEy_Q",
        "logo": "./assets/img/cursos/logo-cisco.png"

    },
    {
        "nome": "JavaScript: programando na linguagem da web",
        "instituicao": "Alura",
        "carga-horaria": 20,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osF0-75v4HC64tMbBw",
        "logo": "./assets/img/cursos/logo-alura.jpg"

    },
    {
        "nome": "Java  Front/Back",
        "instituicao": "Instituto  Desenvolvimento,  Estratégia  eConhecimento  (IDESCO)  da  Universidade  Estadual  do  Ceará / Lead",
        "carga-horaria": 33,
        "ano": 2022,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6osQfMIy9gRMKFhJPOw",
        "logo": "./assets/img/cursos/logo-dell-lead.png"

    },
    {
        "nome": "Programa de Bolsas de Estudos de Língua Inglesa AccessE2C (English to Communicate, Connect,and Catalyze)",
        "instituicao": "Access E2C",
        "carga-horaria": 210,
        "ano": 2021,
        "link": "https://1drv.ms/b/s!AgfZDenlbzQ6n6Vh0kvOPNSgs1kmjA",
        "logo": "./assets/img/cursos/logo-access-e2c.png"

    },
]


