let queryString =location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let url =`https://api.themoviedb.org/3/movie/${id}?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US`
console.log(url)


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let container = document.querySelector('#especificaciones');

        container.innerHTML = `<article class="test">
                                    <p>Rating: ${data.vote_average}</p> 
                                    <p>${data.release_date}</p>
                                    <p>Generos: ${data.genres}</p>
                                </article>
                                <article ><img class="modify" src=https://image.tmdb.org/t/p/w500/${data.poster_path} alt='' />`
    
    document.querySelector("#title").innerHTML= `${data.title}`
    })
    .catch(function(error){
        console.log(error);
    })

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let container = document.querySelector('#resumen');

        container.innerHTML = `<article class="p">
                                    <p>Rating: ${data.overview}</p>
                                </article>
                                `
        document.querySelector(".Rey").innerHTML= `${data.title}`
    })
    .catch(function(error){
        console.log(error);
    })
