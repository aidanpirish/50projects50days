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

    jokeEl.innerHTML = formatJoke(data.joke)
}

function formatJoke(joke) {
    // if text includes '?', highlight the answer
    if(joke.includes("?")) {
        let qIndex = joke.indexOf('?')
        //get answer
        var answer = joke.slice(qIndex+1)
        //get joke without answer
        var joke = joke.slice(0, qIndex+2)
        //add answer back with span with class answer
        answer = `<span class="answer">${answer}</span>`
        joke = joke + answer

    }

    return joke

}
