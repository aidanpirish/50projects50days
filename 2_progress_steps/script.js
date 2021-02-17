let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let startOver = document.getElementById('startOver');
let circles = document.querySelectorAll('.circle');

let currentActive;

try {
    currentActive = localStorage.getItem("currentActive")
    update();
} catch (error) {
    currentActive = 1;
}


next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
});

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
});

startOver.addEventListener('click', () => {
    currentActive = 1;

    next.disabled = false;

    update()
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    console.log(currentActive, circles.length);

    if(currentActive == 1) {
        prev.disabled = true;
        next.disabled = false;
    } else if (currentActive == circles.length) {
        console.log("Hello")
        next.disabled = true;
        prev.disabled = false;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    localStorage.setItem("currentActive", currentActive);

}
