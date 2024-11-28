var quoteGenerated = document.getElementById("quoteDisplay"); // >>> h2
var quoteAuthor = document.getElementById("authorDisplay"); // >>> p
var quotebtn = document.getElementById("quote-Button"); // >>> button

var quoteArray = [
    {
        "quote" :"“ Be yourself ; everyone else is already taken. ”",
        "author":"― Oscar Wilde"
    },
    {
        "quote" :" Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ”",
        "author":"― Albert Einstein"
    },
    {
        "quote" :"“ A room without books is like a body without a soul. ”",
        "author":"― Marcus Tullius Cicero"
    },
    {
        "quote" :"“ Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ”",
        "author":"― Bernard M. Baruch"
    },
    {
        "quote" :"“ You only live once, but if you do it right, once is enough. ”",
        "author":"― Mae West"
    },
    {
        "quote" :"“ Be the change that you wish to see in the world. ”",
        "author":"― Mahatma Gandhi"
    },
    {
        "quote" :"“ In three words I can sum up everything I've learned about life: it goes on. ”",
        "author":"― Robert Frost"
    },
    {
        "quote" :"“ If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. ”",
        "author":"― J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        "quote" :"“ If you tell the truth, you don't have to remember anything. ”",
        "author":"― Mark Twain"
    },
    {
        "quote" :"“ I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ”",
        "author":"― Maya Angelou"
    },
    {
        "quote" :"“ A friend is someone who knows all about you and still loves you. ”",
        "author":"― Elbert Hubbard"
    },
    {
        "quote" :"“ Live as if you were to die tomorrow. Learn as if you were to live forever. ”",
        "author":"― Mahatma Gandhi"
    },
    {
        "quote" :"“ To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ”",
        "author":"― Ralph Waldo Emerson"
    }
   
]


//! A copy of the array to keep track of unused quotes
var remainingQuotes = [...quoteArray];

//* Function to get a random quote without repeat the quote
function getRandomQuote() {
    if (remainingQuotes.length === 0) {
        // Reset the array once all quotes are used
        remainingQuotes = [...quoteArray];
    }

    // Get a random index from the remaining quotes
    var randomIndex = Math.floor(Math.random() * remainingQuotes.length);

    // Remove the selected quote from the remainingQuotes array
    var selectedQuote = remainingQuotes.splice(randomIndex, 1)[0];

    // Display the quote and author 
    quoteGenerated.innerHTML = selectedQuote.quote;
    quoteAuthor.innerHTML = selectedQuote.author;
}








