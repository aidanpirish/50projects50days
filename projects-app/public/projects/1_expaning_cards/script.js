

const panels = document.querySelectorAll('.panel');

const images = {
    "mountain" : [
        "https://images.unsplash.com/photo-1612875895771-76bba1a61a49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

    ],
    "tents" : [
        "https://images.unsplash.com/photo-1613169620329-6785c004d900?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
        "https://images.unsplash.com/photo-1550988547-bb59938650fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80"

    ],
    "road" : [
        "https://images.unsplash.com/photo-1613054244154-4e47c3dd5134?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1108&q=80",
        "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1132&q=80",
        "https://images.unsplash.com/photo-1489402954857-207e3f591c0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

    ],
    "bridge" : [
        "https://images.unsplash.com/photo-1473421128459-ca4900980e03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1429041966141-44d228a42775?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1512187849-463fdb898f21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"

    ],
    "beach" : [
        "https://images.unsplash.com/photo-1530194579541-703b0bbc9363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],

}

let currentActiveId;
setRandomActive();




panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        currentActiveId = panel.id;
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

$(function () {
    var i = 0;
    $(".active").css("background-image", "url(" + images[currentActiveId][i] + ")");
    setInterval(function () {
        i++;
        if (i == images[currentActiveId].length) {
            i = 0;
        }
        $(".active").fadeOut("slow", function () {
            $(this).css("background-image", "url(" + images[currentActiveId][i]  + ")");
            $(this).fadeIn("slow");
        });
    }, 5000);
});


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function setRandomActive() {
    var i = getRandomInt(4);
    panels[i].classList.add('active');
    currentActiveId = panels[i].id;
}

