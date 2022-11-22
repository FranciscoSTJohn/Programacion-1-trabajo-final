let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=d1e5f3bc2bd3300eb31bc59ece54409b&language=en-US`
console.log(url);

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    let info = data.genres
    let lista = document.getElementById('lista');

    for (let i = 0; i < info.lenght; i++)
    {
      lista.innerHTML = `<li><a href="#">${info[i].name}</a></li>`;
    } 
  
  })
  .catch(function(error) {
    console.log("Error: " + error);
  }) 