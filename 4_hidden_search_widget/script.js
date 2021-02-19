const btn = document.getElementById('btn');
const search = document.getElementById('search');
const input = document.querySelector('.input');

let isSearch = false;

btn.addEventListener('click', () => {
    if(isSearch) {
        searchWiki();
    } else {
        openSearch();
     }
});

function handle(event) {
    if(event.keyCode === 13) {
        searchWiki();
    }
}

function openSearch() {
    search.classList.add('active');
    isSearch = true;
    input.focus();
}

function searchWiki() {
    fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${input.value}&limit=5`).then(function(resp) {
        return resp.json()
    }).then(function(data) {
        window.location.href = data[3][0];
    })
}
