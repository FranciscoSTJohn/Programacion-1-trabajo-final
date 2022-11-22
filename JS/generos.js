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

            characters += `<article class="peliculaspopulares">
                                <p><a href= "" >${info[i].name}</a></p>
                                <br><br> <br><br>
                            </article>`
        }
        
        container.innerHTML = characters;

    })
    .catch(function(error){
        console.log(error);
    })


// Detalles

    //Peliculas

    let url1 = `https://api.themoviedb.org/3/discover/movie?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate` 
let url2= `https://api.themoviedb.org/3/discover/tv?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
fetch(url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let container1 = document.querySelector('#generos');
        let texto = '';
        let id1 = info.genre_ids
                        
        for(let i=0; i<info.length; i++){
            if (id1 in ids){
            texto += `<p>${info[i].id}</p>
                            <br>`
            }
            else 
            {
                alert("Error, el genero no existe")
            }

        } // que lea 1 por 1 y si el id es = que la ponga
        
        container1.innerHTML = texto;
    })

    //Series

    fetch(url2)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let container = document.querySelector('#generos');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article class="peliculaspopulares">
                                <p><a href= "${info[i].id}" >${info[i].name}</a></p>
                                <br><br> <br><br>
                            </article>`
        }
        
        container.innerHTML = characters;
    })

    .catch(function(error){
        console.log(error);
    })