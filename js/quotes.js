const quotes = [
    {
        quote: "a",
        author: "a"
    }, 
    {
        quote: "b",
        author: "b"
    }, 
    {
        quote: "test text",
        author: "author"
    }, 
    {
        quote: "text test",
        author: "author"
    }, 
    {
        quote: "example text",
        author: "example author"
    }, 
    {
        quote: "example text 2",
        author: "example author 2"
    },
    {
        quote: "c",
        author: "c"
    }, 
    {
        quote: "d",
        author: "d"
    }, 
    {
        quote: "123123",
        author: "456456"
    }, 
    {
        quote: "12121212",
        author: "34343434"
    }, 
];


const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");

const randomForQuotes = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomForQuotes];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;