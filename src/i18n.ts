import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const translationsEn={
    "home":"Home",
    "pet":"Pet projects",
    "about":"About me",
    "titleHome1":"Discover the Power of React and TypeScript",
    "titleHome2":"Explore My Pet Projects",
    "titleHome3":"Meet the Developer Behind the Code",
    "textHome1":"Welcome to my website where I showcase my expertise in React and TypeScript. As a beginner developer, I've spent countless hours perfecting my skills and building exciting projects that demonstrate my abilities. With my knowledge of front-end and back-end development, I can create web applications that are not only visually appealing but also highly functional.",
    "textHome2":"I believe that the best way to showcase my skills as a React developer is by sharing my pet projects. These projects have allowed me to experiment with different techniques and technologies, pushing the boundaries of what is possible. By exploring my projects, you'll get a glimpse into my creative process and the level of quality I strive for in every project I undertake.",
    "textHome3":"Behind every project is a developer, and I'm excited to introduce myself to you. As a developer, I always strive to learn new skills and techniques. On my About Me page, you'll learn more about my background, my goals, and my passion for creating innovative solutions.",
    "app":"APP",
    "source":"SOURCE CODE",
    "titleAbout":"Meet the Developer Behind the Code",
    "textAbout1":"Hello and welcome to my website! My name is Ihor Pohaidak, and I am a motivated React full-stack developer. As a newcomer to the industry, I am seeking my first professional opportunity and would love to tell you more about myself.",
    "textAbout2":"I began learning programming in October 2021 and have since become proficient in a variety of technologies such as React, JavaScript, TypeScript, Express, MUI, MongoDB, Firebase, i18next and  more. While I may not have commercial experience, I am eager to apply my knowledge and skills to real-world projects.",
    "textAbout3":"After discovering React, I was immediately drawn to its component-based structure and intuitive design. It enables me to create responsive and dynamic applications that provide users with a seamless experience across all devices.",
    "textAbout4":"My journey into full-stack development began when I learned how to use Express, a popular Node.js framework, to create powerful server-side applications. This skillset allowed me to create fully-functional applications with a back-end database that stores and retrieves information. Additionally, I use MUI to create beautiful and adaptive user interfaces.",
    "textAbout5":"As a self-motivated individual, I am always looking to improve my skills and stay up-to-date with the latest industry trends. I am a quick learner and a problem solver who enjoys tackling new challenges.",
    "textAbout6":"I understand that the job market can be competitive, but I am confident in my abilities and determined to prove myself as a valuable asset to any team. Thank you for taking the time to learn more about me. If you are looking for a dedicated and motivated developer to join your team, I would be honored to speak with you about any opportunities you may have available. ",
}
  const translationsUa={
    "home":"Головна",
    "pet":"Мої проєкти",
    "about":"Про мене",
    "titleHome1":"Дізнайтесь про силу React та TypeScript",
    "titleHome2":"Досліджуйте Мої Пет-проекти",
    "titleHome3":"Зустріньте Розробника За Кодом",
    "textHome1":"Ласкаво просимо на мою веб-сторінку, де я демонструю свої знання та вміння в React та TypeScript. Як початківець розробник, я витратив безліч годин, вдосконалюючи свої навички та будуючи захопливі проекти, що демонструють мої здібності. З моїми знаннями розробки фронтенду та бекенду я можу створювати веб-застосунки, які не тільки візуально привабливі, але й високофункціональні.",
    "textHome2":"Я вважаю, що найкращим способом демонструвати свої навички в розробці на React є показ моїх пет-проектів. Ці проекти дали мені змогу експериментувати з різними техніками та технологіями, розширюючи межі того, що можливо. Досліджуючи мої проекти, ви зможете знайти відблиск мого творчого процесу та рівень якості, до якого я прагну в кожному проекті.",
    "textHome3":"За кожним проектом стоїть розробник, і я радий представити себе Вам. Як розробник, я завжди прагну вчитися новим навичкам та технікам. На моїй сторінці 'Про мене' ви дізнаєтесь більше про мій досвід, мої цілі та прагнення до створення інноваційних рішень.",
    "app":"ВЕБ САЙТ",
    "source":"КОД",
    "titleAbout":"Зустріньте Розробника За Кодом",
    "textAbout1":"Привіт, запрошую Вас на мій сайт! Мене звуть Ігор Погайдак, я вмотивований React Full-Stack розробник. Як новачок у галузі, я шукаю свою першу роботу і хотів би розповісти Вам більше про себе.",
    "textAbout2":"Я почав вивчати програмування в жовтні 2021 року і з того часу набув досвіду роботи з різними технологіями, такими як React, JavaScript, TypeScript, Express, MUI, MongoDB, Firebase, i18next тощо. Хоча я можу не мати комерційного досвіду, я хочу застосувати свої знання та навички в реальних проектах.",
    "textAbout3":"Відкривши для себе React, мене відразу привернула його компонентна структура та інтуїтивно зрозумілий дизайн. Це дає мені змогу створювати адаптивні та динамічні додатки, які забезпечують бездоганну роботу користувачів на всіх пристроях.",
    "textAbout4":"Моє знайомство з full-stack розробкою почалася, коли я навчився використовувати Express, популярну структуру Node.js, для створення потужних програм на стороні сервера. Цей набір навичок дозволив мені створювати повнофункціональні програми з внутрішньою базою даних, яка зберігає та отримує інформацію. Крім того, я використовую MUI для створення красивих і адаптивних інтерфейсів користувача.",
    "textAbout5":"Як самовмотивована людина, я завжди прагну вдосконалювати свої навички та намагаюся бути в курсі останніх тенденцій. Я швидко навчаюся та вирішую проблеми, мені подобається вирішувати нові виклики.",
    "textAbout6":"Дякую Вам, що знайшли час дізнатися про мене більше. Якщо ви шукаєте відданого та вмотивованого розробника, який би приєднався до вашої команди, я буду радий поговорити з вами про будь-які доступні можливості.",  
}

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: translationsEn },
      ua: { translation: translationsUa },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  export default i18n;