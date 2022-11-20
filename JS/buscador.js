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

//Buscador
let query = location.search;
let stringToObject = new URLSearchParams(query); 
let aBuscar = stringToObject.get('valor'); 


let url_movies = `https://api.themoviedb.org/3/search/movie?query=${aBuscar}&api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&page=1&include_adult=false`
let url_series = `https://api.themoviedb.org/3/search/tv?query=${aBuscar}&api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&page=1&include_adult=false`
console.log(url_movies);
console.log(url_series);


fetch(url_movies)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('#Peliculas_buscadas');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article class="peliculaspopulares">
                                    <a href='Detalle_peliculas.html?id=${info[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' /> </a>
                                    <p class="tamaño_texto">${info[i].title} <a href="Favoritos.html"><i class="fa-regular fa-star"></i> </a> </p>
                                
                            </article>`
        }
        container.innerHTML = characters;
        document.querySelector("#titulo").innerHTML= `Ha Buscado ${aBuscar}`

        
    })
        
    .catch(function(error){
        console.log(error);
    })

fetch(url_series)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('#Series_buscadas');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article class="peliculaspopulares">
                                    <a href='Detalle_Series.html?id=${info[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' /> </a>
                                    <p class="tamaño_texto">${info[i].name} <a href="Favoritos.html"><i class="fa-regular fa-star"></i> </a> </p>
                                    <br>
                            </article>`
        }
        container.innerHTML = characters; 
    })
    .catch(function(error){
        console.log(error);
    })