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


let recuperoStoragepelis = localStorage.getItem("pelisfavoritas")
let peliculas = JSON.parse(recuperoStoragepelis)
console.log(peliculas)

let listaFavsPelis = document.querySelector(".FavsPelis")

if(peliculas == null || peliculas.length == 0){
    listaFavsPelis.innerHTML = "no tenes peliculas"
}else{
    for (let i=0; i<peliculas.length; i++){
        buscarymostrarpelis(peliculas[i])
    }
}

function buscarymostrarpelis(id) {
    let urlpeli = `https://api.themoviedb.org/3/movie/${id}?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US`
    fetch(urlpeli)
       .then(function(response){
           return response.json()
        })
        .then(function(data){
            console.log(data);
            let urlimg = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            listaFavsPelis.innerHTML += `<article class="FavsPelis">
            <a href= detalle_peliculas.html?id=${data.id}>
            <strong> ${data.title} </strong>
            </article>`
        })
        .catch(function(error){
            console.log(error)
        })
    }

    let recuperoStoragepeli = localStorage.getItem("pelisfavoritas")
    let pelicula = JSON.parse(recuperoStoragepelis)
    console.log(peliculas)
    
    let listaFavPelis = document.querySelector(".FavsPelis")
    
    if (peliculas==null || peliculas.length == 0){
        listaFavPelis.innerHTML = `no tenes peliculas`
    }else{
        for (let i=0; i<peliculas.length; i++){
            buscarymostrarpelis(peliculas[i])
        }
    }
    
    function buscarymostrarpelis(id) {
        let urlpeli = `https://api.themoviedb.org/3/movie/${id}?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US`
        fetch(urlpeli)
           .then(function(response){
               return response.json()
            })
            .then(function(data){
                console.log(data);
                let urlimg = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                listaFavPelis.innerHTML += `<article class="FavsPelis">
                <a href= detalle_series.html?id=${data.id}>
                <strong> ${data.title} </strong>
                </article>`
            })
            .catch(function(error){
                console.log(error)
            })
        }