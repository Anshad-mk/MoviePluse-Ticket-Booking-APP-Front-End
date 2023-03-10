export const baseUrl='https://api.themoviedb.org/3';
export const APIKey='63d8f97a44d893a550ab1bf23ce2fa64';
export const imageUrl='https://image.tmdb.org/t/p/original'

export const links = {
    action :`${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=28`,
    originals :`${baseUrl}/discover/tv?api_key=${APIKey}&with_networks=213`,
    ComedyMovies:`${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=35`,
    HorrorMovies:`${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=27`,
    ActionMovies:`${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=28`,
    RomanceMovies:`${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=10749`,
    Documentaries:`${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=99`
}

    

