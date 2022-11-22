let queryString =location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let url =`https://api.themoviedb.org/3/tv/${id}?api_key=<<api_key>>&language=en-US`
console.log(url)


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let container = document.querySelector('#mirta');

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
        let container = document.querySelector('#pakon');

        container.innerHTML = `<article class="p">
                                    <p>resu: ${data.overview}</p>
                                </article>
                                `
        document.querySelector(".felix").innerHTML= `${data.title}`
    })
    .catch(function(error){
        console.log(error);
    })

    
