const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

if (typeof(Storage) !== "undefined") {
    console.log("Web storage found");

} else {
    console.log("Web storage unavailable");
    let currentActive = 1;
}

let currentActive = 1;

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

    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

function updateStorage() {
    localStorage.setItem("progress", document.getElementById('progress'));
    localStorage.setItem("prev", document.getElementById('prev'));
    localStorage.setItem("next", document.getElementById('next'));
    localStorage.setItem("circles", document.querySelectorAll('.circle'));
    localStorage.setItem("currentActive", currentActive);
}

function loadStorage() {
    progress = localStorage.getItem("progress");
    prev = localStorage.getItem("prev");

}