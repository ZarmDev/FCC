import './App.css';

var quotes = ['Meow when you want to', 'Do what makes you a bark']
var authors = ['Catington', 'Woofington']

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text"></p>
        <p id="author"></p>
        <button id="new-quote">New quote</button>
        <a target="_blank" id="tweet-quote"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png"></img><i class="fa-brands fa-twitter"></i></a>
      </div>
    </div>
  );
}

var prevNum = undefined;

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length)
  if (prevNum == randomNum) {
    randomNum = Math.floor(Math.random() * quotes.length)
  }
  prevNum = randomNum;
  console.log(randomNum);
  let randomQuote = quotes[randomNum]
  let randomAuthor = authors[randomNum]
  document.getElementById('text').innerHTML = randomQuote;
  document.getElementById('author').innerHTML = randomAuthor;
  document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${randomQuote}`
}

window.onload = function () {
const newQuote = document.getElementById('new-quote');
getRandomQuote()
newQuote.addEventListener('click', function () {
  getRandomQuote()
})
}

export default App;
