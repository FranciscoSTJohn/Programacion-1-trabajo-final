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

        for(let i=0; i<info.length; i++){
            characters += `<article class="peliculaspopulares">
                                <p>${info[i].name} </p>
                                <br><br> <br><br>
                            </article>`
        }
        
        container.innerHTML = characters;

        
    })
    .catch(function(error){
        console.log(error);
    })