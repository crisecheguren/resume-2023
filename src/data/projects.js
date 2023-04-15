import quote from '../images/quote.png'
import endless from '../images/endless.png'
import pip from '../images/pip.png'
import joke from '../images/joke.png'
import lightDark from '../images/lightDark.png'
import monsters from '../images/monsters.png'
import clothing from '../images/clothing.png'
import animatedLP from '../images/animatedLP.png'

const projects = [
    {
        id: 1,
        name: 'Dingos Clothing',
        img: clothing,
        projectLink: "https://crisecheguren.github.io/dingos-clothing/",
        sourceLink: "https://github.com/crisecheguren/dingos-clothing",
        description: "This is big e-commerce clothing store project that I made using React and Firebase.  I learned a lot about how to use Firebase to store user data. I'm currently converting this project to use Redux and the Stripe API to process payments."
    },
    {
        id: 2,
        name: 'Infinite Scroll',
        img: endless,
        projectLink: "https://crisecheguren.github.io/infinite-scroll/",
        sourceLink: "https://github.com/crisecheguren/infinite-scroll",
        description: 'This infinite scroll project was made using vanilla JS and the unsplashAPI.  I pull some photos and make the api call again to load some more once the user reaches a certain place in the window while scrolling. Each photo links to the unsplash website.'
    },
    {
        id: 3,
        name: 'Quote Generator',
        img: quote,
        projectLink: "https://crisecheguren.github.io/quote-generator",
        sourceLink: "https://github.com/crisecheguren/quote-generator",
        description: 'This inspirational quote generator was made mostly using CSS and vanilla JS.  I am fetching a big JSON object filled with quotes and storing them in an array.  Then I use Math.random to find a quote and display it.  I also provide a way for you to tweet the quote!'
    },
    {
        id: 4,
        name: 'Picture in Picture',
        img: pip,
        projectLink: "https://crisecheguren.github.io/picture-in-picture/",
        sourceLink: "https://github.com/crisecheguren/picture-in-picture",
        description: 'This is a fun picture-in-picture project.  When the page loads, the user is prompted to select a screen or media to share. When you press the start button, it initates picture-in-picture mode.'
    },
    {
        id: 5,
        name: 'Joke Teller',
        img: joke,
        projectLink: "https://crisecheguren.github.io/joke-teller/",
        sourceLink: "https://github.com/crisecheguren/joke-teller",
        description: 'This project showcased the VoiceRSS API (text-to-speech) and the JokeAPI.  I fetched a joke and played it through an audio element triggered by a button.'
    },
    {
        id: 6,
        name: 'Light/Dark Mode',
        img: lightDark,
        projectLink: "https://crisecheguren.github.io/light-dark-theme/",
        sourceLink: "https://github.com/crisecheguren/light-dark-theme",
        description: 'This light/dark mode project was made using vanilla JS and CSS.  I learned a lot about how to manipulate the root theme and also how to use localStorage to make sure I remember which theme a user picks.'
    },
    {
        id: 7,
        name: 'Monsters Rolodex',
        img: monsters,
        projectLink: "https://crisecheguren.github.io/monsters-rolodex/",
        sourceLink: "https://github.com/crisecheguren/monsters-rolodex/",
        description: 'This is a super simple project that uses vanilla react to fetch some monsters from an API and display them on the page.  I also added a search bar to filter the monsters by name.'
    },
    {
        id: 8,
        name: 'Animated Landing Page',
        img: animatedLP,
        projectLink: "https://crisecheguren.github.io/animated-landing-page/",
        sourceLink: "https://github.com/crisecheguren/animated-landing-page/",
        description: 'This is a super simple project I made to learn how to use the Animate on Scroll library.  I took a template provided by Creative Tim and added some animations to it.'
    },

]

export default projects;