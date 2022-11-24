//Peliculas
            
let url1 = `https://api.themoviedb.org/3/discover/movie?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate` 
let url2 = `https://api.themoviedb.org/3/discover/tv?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    
fetch(url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info1 = data.results
        let container1 = document.querySelector('#detalle_generos');
        let texto = '';
    
        for(let i=0; i<info1.length; i++){
            console.log(data.results[i])
            texto += `<section id="detalle_generos"> <a href='Detalle_generos.html?id=${info1[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info1[i].poster_path} alt='' /> </a>
                    <p class="tamaño_texto">${info1[i].title}</p>
                    <p>${info1[i].release_date}</p>
                    <br><br></article>`
        
            }
        console.log(texto)

        container1.innerHTML = texto
        })

//Series

fetch(url2)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let info2 = data.results
        let container2 = document.querySelector('#detalle_generos_series');
        let texto2 = '';
    
        for(let i=0; i<info1.length; i++){
            console.log(data.results[i])
            texto2 += `<section id="detalle_generos_series"> <a href='Detalle_generos.html?id=${info2[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info2[i].poster_path} alt='' /> </a>
                    <p class="tamaño_texto">${info2[i].title}</p>
                    <p>${info2[i].release_date}</p>
                    <br><br></article>`
            }
        console.log(texto2)

        container2.innerHTML = texto2
    })