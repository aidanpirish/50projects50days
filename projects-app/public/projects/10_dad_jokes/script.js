const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const imageEl = document.getElementById('image')

const config = {
    headers: {
        'Accept': 'application/json',   
    }
}

const ignore = ["and", "what's", "the", "a", "it", "is", "in", "well", "do", "you", "call", "an", "know", "knows", "someone", "yes", "no", "can", "put", "my", "i", "don't", "think", "they", "their", "there", "they're", "they'll", "me", "your", "i'm", 
"like", "then", "than", "other", "them", "come", "only", "good", "which", "over", "or", "at", "do", "side", "are", "want", "about", "doesn't", "just", "to", "if", "of", "was", "but", "now", "used", "sure", "not", "few", " few", "read", "what", "i've", "all", "free", "how", "on"]

generateJoke() 

jokeBtn.addEventListener('click', generateJoke)


async function generateJoke() {

    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()

    let img = relatedImage(data.joke)
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

async function relatedImage(text) {
    // get each word
    text = text.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    console.log(text)

    newText = []

    text.forEach((word, i) => {
        word = word.toLowerCase()
        if (!ignore.includes(word)) {
            newText.push(word)
        }
    })
    console.log(newText)
    wordsToSearch = getRandom(newText, 2)
    // console.log(wordToSearch)

    let searchStr = ""

    wordsToSearch.forEach(word => {
        searchStr = searchStr + word + "+"
    })

    //build search 

    const res = await fetch(`https://pixabay.com/api/?key=20496271-890413fc848d5b0e8711680d5&q=${searchStr}&image_type=photo`)
    const data = await res.json()

    console.log(data)

    // let img = relatedImage(data.joke)
    // jokeEl.innerHTML = formatJoke(data.joke)
    try {
        imageEl.src = data.hits[0].previewURL
    } catch(err) {
        console.log(err)
    }

}


function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}