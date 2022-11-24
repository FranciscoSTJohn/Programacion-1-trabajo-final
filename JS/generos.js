let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US`
console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.genres
        let container = document.querySelector('#generos');
        let characters = '';
        let ids = []

        for(let i=0; i<info.length; i++){
           let id = info[i].id
           ids.push(id)
           console.log(ids) 

            characters += `<li><a href= "detalle_Generos.html" style="color:#808080; text-decoration:none">${info[i].name}</a></li>`
        }
        
        container.innerHTML = characters;
        
    })
    .catch(function(error){
        console.log(error);
    })

// Detalles

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
        let id1 = info1.genre_ids

            for(let i=0; i<info1.length; i++){

            if (id1 in ids){
                    texto += `<section id="detalle_generos"><a href='Detalle_generos.html?id=${info1[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info1[i].poster_path} alt='' /> </a> <br>
                    <p class="tamaño_texto">${info1[i].name}
                    <p>${info1[i].first_air_date} </p>
                    <br><br></section>`
        }
        else
        {
            alert("Error, el genero no existe")
        }
    
        }

        container1.innerHTML = texto;
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
        let id2 = info2.genre_ids

        for(let i=0; i<info2.length; i++){
            
            if (id2 in ids){
                texto2 += `<section id="detalle_generos_series"> <a href='Detalle_Generos.html?id=${info2[i].id}'><img class="imagen" src=https://image.tmdb.org/t/p/w500/${info2[i].poster_path} alt='' /> </a> <br>
                <p class="tamaño_texto">${info2[i].name}
                <p>${info2[i].first_air_date} </p>
                <br><br></section>`
        }
        else
        {
            alert("Error, el genero no existe")
        }
        
        }
        
        container2.innerHTML = texto2;
    })

    .catch(function(error){
        console.log(error);
    })