const truth = [
    {
        id: 1,
        text: "Reveal all the details of your first kiss.",
    },
    {
        id: 2,
        text: "Who is your secret crush?",
    },
    {
        id: 3,
        text: "What is a secret you kept from your parents?",
    },
    {
        id: 4,
        text: "Have you ever cheated on someone?",
    },
    {
        id: 5,
        text: "When was the last time you wet the bed?",
    },
    {
        id: 6,
        text: "Have you ever peed in the shower?",
    },
    {
        id: 7,
        text: "What's the longest you've ever slept?",
    },
    {
        id: 8,
        text: "When was the last time you lied?",
    },
    {
        id: 9,
        text: "What is the biggest lie you ever told your parents?"
    },
    {
        id: 10,
        text: "When was the last time you cried?"
    },
    {
        id: 11,
        text: "What animal do you think you most look like?",
    },
    {
        id: 12,
        text: "How many selfies do you take a day?",
    },
    {
        id: 13,
        text: "Why did your last relationship break down?",
    },
    {
        id: 14,
        text: "What's your favorite part of your body?",
    },
    {
        id: 15,
        text: "What's your biggest fear?",
    },
    {
        id: 16,
        text: "What's one silly thing you can't live without?",
    },
    {
        id: 17,
        text: "Where's the weirdest place you've had sex?",
    },
    {
        id: 18,
        text: "What person do you text the most?",
    },
    {
        id: 19,
        text: "What's the weirdest thing you've ever eaten?",
    },
    {
        id: 20,
        text: "Who is your celebrity crush?"
    },
]

const dare = [
    {
        id: 1,
        text: "Do a rap freestyle for the next minute.",
    },
    {
        id: 2,
        text: "Let another person post a status on your behalf.",
    },
    {
        id: 3,
        text: "Bark like a dog.",
    },
    {
        id: 4,
        text: "Empty a glass of cold water onto your head outside.",
    },
    {
        id: 5,
        text: "Do a plank for a full minute.",
    },
    {
        id: 6,
        text: "Gulp down a raw egg.",
    },
    {
        id: 7,
        text: "Do 20 squats.",
    },
    {
        id: 8,
        text: "Show us your best dance moves.",
    },
    {
        id: 9,
        text: "Talk in a British accent until your next turn."
    },
    {
        id: 10,
        text: "Act like a chicken until your next turn."
    },
    {
        id: 11,
        text: "Smell another player's armpit.",
    },
    {
        id: 12,
        text: "Laugh your ass out for 5 minutes",
    },
    {
        id: 13,
        text: "Try to put your whole fist in your mouth",
    },
    {
        id: 14,
        text: "Show off your secret talent",
    },
    {
        id: 15,
        text: "Twerk for a minute",
    },
    {
        id: 16,
        text: "Show your orgasm face",
    },
    {
        id: 17,
        text: "Smile as widely as you can and hold it for two minutes",
    },
    {
        id: 18,
        text: "Give a lap dance to someone of your choice",
    },
    {
        id: 19,
        text: "Let someone else tickle you and try not to laugh",
    },
    {
        id: 20,
        text: "Send a sext to the last person in your phonebook"
    },
]

const truthBtn = document.querySelector('.truth-btn');
const dareBtn = document.querySelector('.dare-btn');
const truthText = document.querySelector('.truth-question')
const dareText = document.querySelector('.dare-question')
const button = document.querySelectorAll('.btn');

let click = true;

button.forEach((btn)=> {
    btn.addEventListener('click', (e)=> {
       const btnClassName = e.target.className;
       if(click && btnClassName === 'btn truth-btn') {
        const randomText = randomTruthQuestion()
        truthText.textContent = truth[randomText].text
       } else {
           truthText.textContent = 'speak the truth'
       }

       if(click && btnClassName === 'btn dare-btn') {
        const randomText = randomTruthQuestion()
        dareText.textContent = dare[randomText].text
       } else {
           dareText.textContent = 'Do The Dare'
       }
    })
})
// get random number in order to display random text
function randomTruthQuestion() {
  return Math.floor(Math.random() * truth.length);
}
