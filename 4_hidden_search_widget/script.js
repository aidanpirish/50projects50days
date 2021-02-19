const btn = document.getElementById('btn');
const search = document.getElementById('search');
const input = document.querySelector('.input');

let isSearch = false;


btn.addEventListener('click', () => {
    if(isSearch) {
        fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${input.value}&limit=5`).then(function(resp) {
        console.log(resp);
        return resp.json()
    }).then(function(data) {
        console.log(data[3][0]);
    })

    } else {
        search.classList.add('active');
        isSearch = true;
        input.focus();
     }
   
});

