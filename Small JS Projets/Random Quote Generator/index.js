const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman",
    "It is never too late to be what you might have been. - George Eliot",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn",
    "The only thing we know for sure is that we know nothing at all. - Socrates",
];

const usedIdx = new Set();
let quoteElement = document.getElementById("quote");

function generateQuote() {
    if(usedIdx.size >= quotes.length){
        usedIdx.clear()
    }
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);
        if (usedIdx.has(randomIdx)) continue;

        quoteElement.innerHTML = quotes[randomIdx];
        usedIdx.add(randomIdx);
        break;
    }
}
