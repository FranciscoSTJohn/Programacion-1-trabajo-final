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

            characters += `<section class="container" id="generos">
                            <p><a href= "detalle_Generos.html" >${info[i].name}</a></p>
                            <br><br> <br></section>`
        }
        
        container.innerHTML = characters;

    })
    .catch(function(error){
        console.log(error);
    })