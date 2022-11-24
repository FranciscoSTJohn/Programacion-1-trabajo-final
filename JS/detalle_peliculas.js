//Validaciones
let buscador= document.querySelector('#buscadores')
let termino_buscado= document.querySelector('#buscado');

buscador.addEventListener("submit", function(defalt){
    defalt.preventDefault();
    if (termino_buscado.value==""){
        alert("Ingrese una Pelicula o Serie")
    }
    else if(termino_buscado.value.length < 3){
        alert(" Introduzca por lo menos 3 caracteres")
    }
    else{
        this.submit()
    }
})


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
        id = data.id
        genresArray = []
        genresIdArray= []
        let container = document.querySelector('#especificaciones');
        for (var i = 0; i < data.genres.length; i++) {
            var genres = data.genres[i].name
            genresArray.push(genres)
            var genresId = data.genres[i].id
            genresIdArray.push(genresId)
        }
        container.innerHTML = `<article class="test">
                                    <p>Rating: ${data.vote_average}</p> 
                                    <p>${data.release_date}</p>
                                    <p>${data.runtime} minutes</p>
                                    <p>Genres:<span id="genre-list"></span></p>

                                </article>
                                <article ><img class="modify" src=https://image.tmdb.org/t/p/w500/${data.poster_path} alt='' />`
        for (let i = 0; i < genresArray.length; i++) {
            genreList = document.getElementById("genre-list");
            genreList.innerHTML += `<a href="Detalle_Generos.html?genreid=${genresIdArray[i]}&genrename=${genresArray[i]}">${genresArray[i]}</a> `
            }
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
                                    <p>Resumen: ${data.overview}</p>
                                </article>
                                `
        document.querySelector(".Rey").innerHTML= `${data.title}`
    })
    .catch(function(error){
        console.log(error);
    })




    let favoritosPeli = []
    let recuperoStoragepelis = localStorage.getItem("pelisfavoritas")
    
    if (recuperoStoragepelis !== null) {
        favoritosPeli = JSON.parse(recuperoStoragepelis)
    }
    
    let botonfavs = document.querySelector(".botonfav");
    if(favoritosPeli.includes(id)) {
        botonfavs.innerText = "sacar_de_favoritos"
    }
    botonfavs.addEventListener("click", function() {
        if(favoritosPeli.includes(id)) {
            let indicepeli = favoritosPeli.indexOf(id);
            favoritosPeli.splice(indicepeli, 1)
            botonfavs.innertext = "agregar_a_favoritos";
        } else {
            favoritosPeli.push(id)
            botonfavs.innertext = "sacar_de_favoritos";
    
        }
        let favs = JSON.stringify(favoritospeli)
        localStorage.setItem("pelisfavoritas", favs)
        console.log(localStorage)
    })