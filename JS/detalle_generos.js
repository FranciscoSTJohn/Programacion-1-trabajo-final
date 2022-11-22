let url = `https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate` 
let url2= `https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

    })