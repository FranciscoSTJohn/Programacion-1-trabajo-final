let url = `https://api.themoviedb.org/3/discover/movie?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate` 
let url2= `https://api.themoviedb.org/3/discover/tv?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let container = document.querySelector('#generos');
        let characters = '';
        let id = info.genre_ids
        ids = localStorage.getItem("ids");
        console.log(ids)
        console.log(id)

        for(let i=0; i<info.length; i++){
            if (id in ids){
            characters += `<p>${info[i].id}</p>
                            <br>`
            }
            else 
            {
                alert("Error, el genero no existe")
            }

        } // que lea 1 por 1 y si el id es = que la ponga
        
        container.innerHTML = characters;
    })

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