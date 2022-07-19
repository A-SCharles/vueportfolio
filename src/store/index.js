import { createStore } from "vuex";

export default createStore({
  state: {
    Me: {
      name: "Abdus-Samad Charles",
      headshot: "https://i.postimg.cc/zXh8dSTG/Charles4.jpg",
      logo: "https://i.postimg.cc/x8w6tG9m/navLogo.png",
      about:
        "I am an honest, hard-working, punctual, reliable, patient and confident person with good leadership skills. I am also a good team player.I studied IT at College of Cape-Town for 3 years, I completed the course in 2021, I have a responsive web design certification which can be viewed here. Prior to my IT NCV level 4 certification, I completed the memorization of the Qur'an after 4 years at Madrasatun'Nur, I also have a Level 2 mechanical engineering certification. At a young age I've always been passionate about breaking things and putting them back together, I do not know why, It was just exciting to me. When I first started, I had no idea how to program or do anything technical, but because of my excellent teachers I slowly started to learn how to do it, I became good at it and began to develop a passion for it. Now I find myself eager to learn more about the vast world of Software Development. While studying IT at the College of Cape Town, I found my passion for the tech industry.",
      email: "a.charles.edu@gmail.com",
      cell: "074 269 5595",
    },

    testimonials: [
      {
        name: "Joel Mukanya",
        position: "Lecturer",
        img: "https://i.postimg.cc/jdjCHjxx/joel.png",
        testimonial:
          "Abdus-Samad Charles is a smart, talented, and professional young man who will bring a good input to your company. He seems like he's coming from a good family in addition Charles is very polite and neat.",
      },
      {
        name: "Michaela Ward",
        position: "Colleague",
        img: "https://i.postimg.cc/m2ZV771P/Michaela.png",
        testimonial:
          "Abdus-Samad Charles is one of the most professional and intellectual guys I've ever met. His presence speaks more than words could ever express.",
      },
      {
        name: "Ikhlaas Rawoot",
        position: "Colleague",
        img: "https://i.postimg.cc/BbNV0gkK/Ikhlaas.png",
        testimonial:
          "Abdus-Samad is a kind hearted professional who never hesitates to assist others. He is also excellent at adapting to new environments.",
      },
      {
        name: "Taucia Jackson",
        position: "Colleague",
        img: "https://i.postimg.cc/63hX8CF9/Taucia.png",
        testimonial:
          "Abdus-Samad is a hard working person that excels in all the things he does, he is focused and takes challenges head on, he is very helpful and understanding.",
      },
      {
        name: "Mogamat Saleem Ariefdien",
        position: "Colleague",
        img: "https://i.postimg.cc/zDMdny55/Saleem.png",
        testimonial:
          "Abdus-Samad is a great individual in terms of his hard work, dedication and is always willing to help others in need. He is a honest person, good team player and a true leader.",
      },
    ],
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
