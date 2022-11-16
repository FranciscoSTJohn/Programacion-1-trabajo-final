let query = location.search;
let stringToObject = new URLSearchParams(query); 
let aBuscar = stringToObject.get('q'); 


let url = `https://api.themoviedb.org/3/search/movie?query=${aBuscar}&api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US&page=1&include_adult=false`
console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('.peliculaspopulares');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article>
                                <img src=${info[i].poster_path} alt='' />
                                <p>Name: ${info[i].title}</p></a>
                                
                            </article>`
        }
        container.innerHTML = characters;

        
    })
        
    .catch(function(error){
        console.log(error);
    })