const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// using async / await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}