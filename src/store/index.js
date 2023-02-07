import {
  createStore
} from "vuex";

export default createStore({
  state: {
    Me: {
      name: "Abdus-Samad Charles",
      headshot: "https://i.postimg.cc/zXh8dSTG/Charles4.jpg",
      logo: "https://i.postimg.cc/x8w6tG9m/navLogo.png",
      about: "I am an honest, hard-working and confident person with good leadership skills. At a young age I've always been passionate about breaking things and putting them back together. When I first started, I had no idea how to program or do anything technical, but because of my excellent teachers I slowly started to learn how to do it, I became good at it and began to develop a passion for it. Now I find myself eager to learn more about the vast world of Software Development. While studying IT at the College of Cape Town, I found my passion for the tech industry.",
      email: "a.charles.edu@gmail.com",
      cell: "074 269 5595",
      location: "Cape Town, South Africa"
    },

    testimonials: [{
        name: "Joel Mukanya",
        position: "Lecturer",
        img: "https://i.postimg.cc/jdjCHjxx/joel.png",
        testimonial: "Abdus-Samad Charles is a smart, talented, and professional young man who will bring a good input to your company. He seems like he's coming from a good family in addition Charles is very polite and neat.",
      },
      {
        name: "Michaela Ward",
        position: "Colleague",
        img: "https://i.postimg.cc/m2ZV771P/Michaela.png",
        testimonial: "Abdus-Samad Charles is one of the most professional and intellectual guys I've ever met. His presence speaks more than words could ever express.",
      },
      {
        name: "Ikhlaas Rawoot",
        position: "Colleague",
        img: "https://i.postimg.cc/BbNV0gkK/Ikhlaas.png",
        testimonial: "Abdus-Samad is a kind hearted professional who never hesitates to assist others. He is also excellent at adapting to new environments.",
      },
      {
        name: "Taucia Jackson",
        position: "Colleague",
        img: "https://i.postimg.cc/63hX8CF9/Taucia.png",
        testimonial: "Abdus-Samad is a hard working person that excels in all the things he does, he is focused and takes challenges head on, he is very helpful and understanding.",
      },
      {
        name: "Mogamat Saleem Ariefdien",
        position: "Colleague",
        img: "https://i.postimg.cc/zDMdny55/Saleem.png",
        testimonial: "Abdus-Samad is a great individual in terms of his hard work, dedication and is always willing to help others in need. He is a honest person, good team player and a true leader.",
      },
      {
        name: "Clayton Adonis",
        position: "Colleague",
        img: "https://i.postimg.cc/Sshmf4V4/clayton.jpg",
        testimonial: "Charles is really passionate about programming and works hard to ensure that his projects are the best they can be",
      },
    ],
    projects: [{
      id:1,
        name: "My First Digital Portfolio",
        desc: "The first ever digital portfolio I created.",
        img: "https://i.postimg.cc/9Fwvm3Gp/firstport.png",
        github: "https://github.com/A-SCharles/myfirstportfolio",
        live: "https://fccfirstportfolio.netlify.app/",
        category: "HTML / CSS"
      },
      {
        id : 2,
        name: "Auto Shop Landing Page",
        desc: "An example of a landing page for an auto shop.",
        img: "https://i.postimg.cc/wMC4yvhk/prodland.png",
        github: "https://github.com/A-SCharles/ProductLand",
        live: "https://fccprodland.netlify.app/",
        category: "HTML / CSS"
      },
      {
        id : 3,
        name: "PC Technical Document",
        desc: "A Technical Document on how to build a PC",
        img: "https://i.postimg.cc/7YCy5JyS/fcctech.png",
        github: "https://github.com/A-SCharles/TechnicalDoc",
        live: "https://fcctechnicaldoc.netlify.app",
        category: "HTML / CSS"
      },
      {
        id : 4,
        name: "Property Listing Website",
        desc: "A website where a user is able to view properties",
        img: "https://i.postimg.cc/zGHGBWbX/image-3.png",
        github: "https://github.com/A-SCharles/propertyList",
        live: "https://asc-property-list.netlify.app/",
        category: "Vue"
      },
      {
        id : 5,
        name: "To Do list",
        desc: "A to do list web application",
        img: "https://i.postimg.cc/26rk2KHV/image.png",
        github: "https://github.com/A-SCharles/toDoList",
        live: "https://asc-todoapp.netlify.app/",
        category: "Javascript"
      },
      {
        id : 6,
        name: "Random User Generator",
        desc: "A web app that generates random users via an API",
        img: "https://i.postimg.cc/769xcncX/image-2.png",
        github: "https://github.com/A-SCharles/RandomUserGenerator",
        live: "https://asc-rug.netlify.app",
        category: "Javascript"
      },
      {
        id : 7,
        name: "Javascript Calculator",
        desc: "A normal calculator built using Javascript",
        img: "https://i.postimg.cc/8C8Pr5Md/image-1.png",
        github: "https://github.com/A-SCharles/JS_Calc",
        live: "https://asc-calculator.netlify.app",
        category: "Javascript"
      },
      {
        id : 8,
        name: "Unholy Season",
        desc: "A site where you can view horror animes",
        img: "https://i.postimg.cc/Hk5jm0t0/image.png",
        github: "https://github.com/A-SCharles/UnholySeason",
        live: "https://unholyseason-3ff41.web.app/",
        category: "Vue"
      },
      {
        id : 9,
        name: "Go Figure",
        desc: "A collabarative anime merch website.",
        img: "https://i.postimg.cc/8kHVVCxV/image-1.png",
        github: "https://github.com/DanielJamesF/GoFigure",
        live: "https://gofigure-b695c.web.app",
        category: "Vue"
      },
      {
        id : 10,
        name: "Charles Autos",
        desc: "CAPSTONE Project",
        img: "https://i.postimg.cc/x8YY3J76/image.png",
        github: "https://github.com/A-SCharles/Charles_Autos",
        live: "http://charlesautos-d58ac.web.app/",
        category: "Vue"
      },
    ],
    skills: [{
        name: "HTML",
        icon: "https://i.postimg.cc/qMvtphKC/html5-logo.png"
      },
      {
        name: "CSS",
        icon: "https://i.postimg.cc/gcqRzbB1/css3-logo.png"
      },
      {
        name: "Bootstrap",
        icon: "https://i.postimg.cc/3N04gzZQ/bootstrap-logo.png"
      },
      {
        name: "Visual Basics",
        icon: "https://i.postimg.cc/rsdv9Nbr/VS-logo.png"
      },
      {
        name: "Adobe Animate",
        icon: "https://i.postimg.cc/gjDN8XcZ/Adobe-Animate-Logo-wine.png"
      },
      {
        name: "Adobe Photoshop",
        icon: "https://i.postimg.cc/cCrNbSK6/PS-logo.png"
      },
      {
        name: "Vue",
        icon: "https://i.postimg.cc/8Pbc7x93/1184px-Vue-js-Logo-2.png "
      },
      {
        name: "MySQL",
        icon: "https://i.postimg.cc/NMwZ6pPn/1012821-code-development-logo-mysql-icon.png"
      },
      {
        name: "Javascript",
        icon: "https://i.postimg.cc/GptL2kFS/187-Js-logo-logos-512.png"
      },
      {
        name: "Node JS",
        icon: "https://i.postimg.cc/cLZBtcLh/1012818-code-development-logo-nodejs-icon.png"
      },
      {
        name: "WordPress",
        icon: "https://i.postimg.cc/xCJTmKGR/1200px-Word-Press-blue-logo-svg.png"
      },
    ],
    Resume: {
      education: [
        {
          name: "Search Engine Optimization",
          place: "Grizzly New Marketing",
          link: "https://www.grizzlymarketing.com",
          duration: "September - December 2022"
        },
        {
          name: "Life Choices Coding Academy",
          place: "Life Choices Academy",
          link: "https://www.lifechoices.co.za/academy",
          duration: "March - September 2022"
        },
        {
          name: "Information Technology NCV4",
          place: "College of Cape-Town",
          link: "https://www.cct.edu.za/index.php/en/programmes/newmain-ict/nc-v-it-computer-science-l2-4",
          duration: "2019 - 2021"
        },
        {
          name: "Mechanical Engineering NCV2",
          place: "College of Cape-Town",
          link: "https://www.cct.edu.za/index.php/en/programmes/mainmechanical-engineering/nc-v-engineering-related-design-l254",
          duration: "2018"
        },
      ],
      experience: [
        {
          position: "Buffet Waiter",
          place: "La Qualité Catering",
          link: "https://web.facebook.com/darulislamhall",
          duration: "2018 - 2020"        
      },
        {
          position: "Buffet Waiter",
          place: "Ashura's Catering",
          link: "https://web.facebook.com/ashuracaterers/",
          duration: "2018 - 2019"        
      },
    ]
    },

    Colors: {
      space_cadet: "222e50",
      teal_blue: "007991",
      flax: "e9d985",
    },
  },

  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});