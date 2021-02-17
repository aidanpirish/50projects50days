let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let back = document.getElementById('back');
let circles = document.querySelectorAll('.circle');
let radios = document.getElementsByName('label-type');

let currentActive, labelType;

try {
    currentActive = localStorage.getItem("currentActive")
    labelType = localStorage.getItem("labelType")
    update();
} catch (error) {
    currentActive = 1;
    labelType = 'numeric';
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

back.addEventListener('click', () => {
    currentActive = 1;

    next.disabled = false;

    update()
});

radios.forEach((radio, i) => {
    radio.addEventListener('click', () => {
        labelType = radio.value;
        update()
    })
});

function update() {

    radios.forEach((radio, i) => {
        if (radio.checked || radio.value === labelType) {
            labelType = radio.value;
            radio.checked = true;
        } else {
            radio.checked = false;
        }
    });

    circles.forEach((circle, idx) => {
        let index;

        if(labelType === 'alpha') {
            index = String.fromCharCode(idx + 65);
        } else {
            index = idx + 1;
        }

        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
        circle.innerHTML = index;
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'


    if(currentActive == 1) {
        prev.disabled = true;
        next.disabled = false;
        back.disabled = true;
    } else if (currentActive == circles.length) {
        next.disabled = true;
        prev.disabled = false;
        back.disabled = false;
    } else {
        prev.disabled = false;
        next.disabled = false;
        back.disabled = false;
    }

    localStorage.setItem("currentActive", currentActive);
    localStorage.setItem("labelType", labelType);

}
