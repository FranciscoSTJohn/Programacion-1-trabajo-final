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

// peliculas y series
let peliculas_populares=`https://api.themoviedb.org/3/movie/popular?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&page=1`

fetch(peliculas_populares)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let container = document.querySelector('#peliculas_populares');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article class="peliculaspopulares">
                                <a href='Detalle_peliculas.html?id=${info[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' /> </a>
                                <p class="tamaño_texto">${info[i].title} <a href="Favoritos.html"><i class="fa-regular fa-star"></i> </a> </p>
                                <p>${info[i].release_date} </p>
                                <br><br> <br>
                            </article>`
        }
        
        container.innerHTML = characters;

        
    })
    .catch(function(error){
        console.log(error);
    })


let series_populares=`https://api.themoviedb.org/3/tv/popular?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&page=1`

fetch(series_populares)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let container = document.querySelector('#series_populares');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article class="peliculaspopulares">
                                <a href='Detalle_Series.html?id=${info[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' /> </a>
                                <p class="tamaño_texto">${info[i].name} <a href="Favoritos.html"><i class="fa-regular fa-star"></i> </a> </p>
                                <p>${info[i].first_air_date} </p>
                                <br><br> <br>
                            </article>`
        }
        
        container.innerHTML = characters;

        
    })
    .catch(function(error){
        console.log(error);
    })

let lo_mas_visto=`https://api.themoviedb.org/3/movie/top_rated?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&page=1`
fetch(lo_mas_visto)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let container = document.querySelector('#lo_mas_visto');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article class="peliculaspopulares">
                                <a href='Detalle_peliculas.html?id=${info[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' /> </a>
                                <p class="tamaño_texto">${info[i].title} <a href="Favoritos.html"><i class="fa-regular fa-star"></i> </a> </p>
                                <p>${info[i].release_date} </p>
                                <br><br> <br>
                            </article>`
        }
        
        container.innerHTML = characters;

        
    })
    .catch(function(error){
        console.log(error);
    })