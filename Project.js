let movies = [

    {
        name:"Jawaan",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbY-fnqzQidBeuk6v9hNmYlJbPKlWka9mT0Q&s",
        rating: 9.5,
        cast: "Shahrukh khan, Vijay Setupathi, Nayantara ",
        watch: "https://www.tokyvideo.com/video/jawan-movie"
    },
    {
        name:"Jersey",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTPyGblgbUcR4DjtF_i7bzcywf1m0690j4Q&s",
        rating: 7.8,
        cast: "Nani",
        watch: "https://www.amazon.in/minitv/tp/86e060cd-20d1-4fd5-a72b-d94e834518cc"
    },
    {
        name:"Pk",
        poster:"https://bollywoodmovieposters.com/wp-content/uploads/2021/11/pk-movie-aamir-khan-poster.jpg",
        rating: 9.5,
        cast: "Amir khan, Anuska sharma",
        watch: "https://www.dailymotion.com/video/x3kr9o2?retry"
    },
    {
        name:"Chennai Express",
        poster:"https://bollywoodmovieposters.com/wp-content/uploads/2021/02/shahrukh-khan-film-poster-chennai-express.jpg",
        rating: 7.0,
        cast: "Shahrukh khan, Depika padukone",
        watch: "https://www.tokyvideo.com/video/chennai-express-movie"
    },
    {
        name:"Devdas",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07_G4WgYI3lCnafU6bqI4H0UjZMarb_3cdQ&s",
        rating: 8.0,
        cast: "Shahrukh khan, Aishwaria Rai ",
        watch: "https://www.jiocinema.com/movies/devdas/3484419/watch"
    },
    {
        name:"Goat",
        poster:"https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-112527716/112527716.jpg",
        rating: 8.0,
        cast: "Vijay Thalapaty",
        watch: "https://www.netflix.com/in/title/81762714"
    },
    {
        name:"Joker",
        poster:"https://m.media-amazon.com/images/M/MV5BMjE0NjIxODMxN15BMl5BanBnXkFtZTcwMjM5MDcxOA@@._V1_.jpg",
        rating: 8.2,
        cast: "Akshay kumar, Sonakshi sinha",
        watch: "https://www.google.com/search?q=joker+movie+akshay+kumar+online&oq=joker+akshay+movie+onl&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIKCAMQABiABBiiBDIKCAQQABiABBiiBDIKCAUQABiABBiiBNIBCTEwOTk4ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:1d3c383c,vid:Ha6PHjcg3uA,st:0"
    },
    {
        name:"The Goat Life",
        poster:"https://m.media-amazon.com/images/M/MV5BN2IwOTZjNDYtMGI4Ny00NTEyLTg4YmEtMmE0ZjcxOGU5NmEwXkEyXkFqcGc@._V1_.jpg",
        rating: 9.2,
        cast: "Prithviraj Sukumaran,Amala Paul",
        watch: "https://www.dailymotion.com/video/x94gt7q"
    },
    {
        name:"Leo",
        poster:"https://m.media-amazon.com/images/I/71c2cxxNQIL._AC_UF894,1000_QL80_.jpg",
        rating: 8.2,
        cast: "Vijay Thalapaty",
        watch: "https://www.dailymotion.com/video/x8q3kuk"
    },
    {
        name:"Holiday",
        poster:"https://i.ytimg.com/vi/PPc2Y6UZx-g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWZVi8EYV5pD12lBOvnH1hN6UcNQ",
        rating: 8.6,
        cast: "Akshay kumar, Sonakshi sinha",
        watch: "https://www.youtube.com/watch?v=PPc2Y6UZx-g"
    },
    
    {
        name:"Jailer",
        poster:"https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg",
        rating: 9.0,
        cast: "Rajnikant",
        watch: "https://www.sunnxt.com/marathi-movie-jailer-2024/detail/194350"
    },
    {
        name:"Raayan",
        poster:"https://m.media-amazon.com/images/M/MV5BYzdmNzBjMDgtMmJkNC00ZjU3LTgxZTctY2QyOTkxMTFhOTU5XkEyXkFqcGc@._V1_QL75_UX190_CR0,8,190,281_.jpg",
        rating: 8.6,
        cast: "Dhanush",
        watch: "https://watch.plex.tv/en-GB/movie/raayan"
    },
    {
        name:"Life",
        poster:"https://m.media-amazon.com/images/S/pv-target-images/2ff453b9387a5894d30e46bf59277617872a2404f32cd20a4bc21f192223fe67.jpg",
        rating: 9.0,
        cast: "Jake Gyllenhaal",
        watch: "https://tv.apple.com/in/movie/life/umc.cmc.z5xzrnboog3c3iix1oxj0rhq?playableId=tvs.sbd.9001%3A1246107231"
    }
    
   

];




function searchMovie()
{
    let movieName = document.getElementById('search-value').value;
    
    if(movieName!=="")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    })

        if(result.length==0)
        {
            
        }


       displayMovies(result);


    }
    else 
    {
        displayMovies(movies);
    }
    


}

function displayMovies(data)
{
    
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
            <div class="overlay" >
                <a href="${data[i].watch}" target="_blank"><div class="video"></div>
                <div class="details">
                    <h2>${data[i].name}</h2>
                    <h3>${data[i].rating}</h3>
                    <h4>${data[i].cast}</h4>
                </div></a>
            </div>
            <img class="poster" src="${data[i].poster}" alt="Jawaan">
        </div>
        `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;
}

displayMovies(movies);