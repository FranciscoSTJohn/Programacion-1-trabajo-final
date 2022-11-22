let recuperoStoragepelis = localStorage.getItem("pelisfavoritas")
let peliculas = JSON.parse(recuperoStoragepelis)
console.log(peliculas)

let listaFavpelis = document.querySelector("FavsPelis")

if (peliculas==null || peliculas.length == 0){
    listaFavpelis.innerHTML = `<span class = firulete> no tenes favoritos </span>`
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
            let urlimg = "----------"
            listaFavpelis.innerHTML += `<article class="---------">
            <a href="--------" </a>
            <strong> ${data.title} </strong>
            <p class="--------"> ${data.release_date} </p>
            </article>`
        })
        .catch(function(error){
            console.log(error)
        })
    }