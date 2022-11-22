let queryString =location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get(`id`);
console.log(id);

let url =`https://api.themoviedb.org/3/movie/popular?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&page=1`


fetch(url)
 .then(function(res){
     return res.json();
})
.then(function(data){
    console.log(data);
    let = poster = document.querySelector(`#poster`)
    let = titulo = document.querySelector(`#titulo`)
    let = description = document.querySelector(`#description`)
    let = rating = document.querySelector(`#rating`)
    let = estreno = document.querySelector(`#estreno`)
    let = director = document.querySelector(`#director`)
    let = elenco = document.querySelector(`#elenco`)
    let = genero = document.querySelector(`#genero`)

    poster.src=`https://image.tmdb.org/t/p/w500${data.poster_path}`
    titulo.innerText = data.original_title;
    description.innerText = data.overview;
    rating.innerText = data.vote_average;
    estreno.innerText = data.release_date;
    director.innerText = data.runtime;
    elenco.innerText = data.budget;
    for (i = 0)




