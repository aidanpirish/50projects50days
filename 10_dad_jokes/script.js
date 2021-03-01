const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const config = {
    headers: {
        'Accept': 'application/json',   
    }
}

generateJoke() 

jokeBtn.addEventListener('click', generateJoke)


async function generateJoke() {

    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()

    jokeEl.innerHTML = data.joke
}
