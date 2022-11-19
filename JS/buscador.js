//Validaciones
let buscador= document.querySelector('#buscadores')
let termino_buscado= document.querySelector('#buscadores');
let men= document.querySelector('#men');

buscador.addEventListener("submit", function(){
    if (termino_buscado.value==" "){
        men.innerHTML="Ingrese una Pelicula o Serie"
    }
    else if(termino_buscado.value.length <3){
        men.innerHTML=" Introduzca por lo menos 3 caracteres"
    }
    else{
        this.submit()
        men.innerHTML=""
    }
})

//Buscador
let query = location.search;
let stringToObject = new URLSearchParams(query); 
let aBuscar = stringToObject.get('q'); 


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
        let container = document.querySelector('.container_busqueda');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article class="peliculaspopulares">
                                    <img class="imagen" src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                                    <p>${info[i].title}</p>
                                
                            </article>`
        }
        container.innerHTML = characters;
        document.querySelector("#titulo").innerHTML= `Ha Buscado ${aBuscar}`

        
    })
        
    .catch(function(error){
        console.log(error);
    })