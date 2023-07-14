var quote = document.getElementById("quote");
var writer = document.getElementById("writer");
var writerImg = document.getElementById("writerImg");
var quoteCard = document.getElementById("quoteCard");
quoteCard.style.display ="none"
var lastRand =-1;
var quotesList = [
    {
        quoteBody: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        writer: "Bernard M. Baruch"
    },
    {
        quoteBody: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        writer: "Dr. Seuss"
    },
    {
        quoteBody: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        writer: "Maya Angelou"
    },
    {
        quoteBody: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        writer: "Ralph Waldo Emerson"
    },
    {
        quoteBody: "It is better to be hated for what you are than to be loved for what you are not.",
        writer: "Andre Gide, Autumn Leaves"
    },
    {
        quoteBody: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        writer: "Neil Gaiman, Coraline"
    },
    {
        quoteBody: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        writer: "Bill Keane"
    },
    {
        quoteBody: "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
        writer: "Dr. Seuss"
    },
    {
        quoteBody: "For every minute you are angry you lose sixty seconds of happiness.",
        writer: "Ralph Waldo Emerson"
    },
    {
        quoteBody: "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
        writer: "Friedrich Nietzsche"
    },
    {
        quoteBody: "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
        writer: "Albert Einstein"
    }
];
function generate() {
    var rand = Math.floor(Math.random() * quotesList.length);
    if (lastRand == rand) {
        generate();
        return;
    }
    quoteCard.style.display = "block";
    writerImg.src = `img/${quotesList[rand].writer}.jpg`;
    quote.innerHTML = `"${quotesList[rand].quoteBody}"`;
    writer.innerHTML = `--${quotesList[rand].writer}--` ;
    lastRand = rand
}