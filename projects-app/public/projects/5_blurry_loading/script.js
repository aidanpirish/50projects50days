const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const nextBtn = document.querySelector('.next')

let load_text = 0
let load_next = 0
let int_text = setInterval(blurring, 30)
let int_next
let img_index = 0

const images = [
    'https://images.unsplash.com/photo-1534804769946-7825967d435e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80',
    'https://images.unsplash.com/photo-1595837235924-6acb3a4a173b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1357&q=80',
    'https://images.unsplash.com/photo-1545651499-f513b4899856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1506854596053-00675f377786?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80',
    'https://images.unsplash.com/photo-1601082669480-55ca016ac034?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80'
    ,
]

function blurring() {
    load_text++

    if (load_text > 99) {
        clearInterval(int_text)
        int_next = setInterval(displayNext, 30)
        loadText.style.display = 'none'
        nextBtn.style.display = ''
    } else {
        loadText.innerText = `${load_text}%`
        loadText.style.opacity = scale(load_text, 0, 100, 1, 0)
        bg.style.filter = `blur(${scale(load_text, 0, 100, 30, 0)}px)`

    }
}

function displayNext() {
    load_next++
    
    if (load_next > 99) {
        clearInterval(int_next)
    } else {
        nextBtn.style.opacity = scale(load_next, 0, 100, 0, 1)
    }
}

function resetImg () {
    load_text = 0
    loadText.style.display = ''
    nextBtn.style.display = 'none'
    bg.style.filter = `blur(30px)`
    img_index++
    if(img_index > images.length -1) {
        img_index = 0
    }
    bg.style.background = `url(${images[img_index]}) no-repeat center center/cover`
}

nextBtn.addEventListener('click', () => {
    resetImg()
    int_text = setInterval(blurring, 30)
})

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
