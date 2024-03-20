import MovieItem from "./MovieItem";




const MovieList=({movies})=>{

    return(
         
        <div className="row" style={{ paddingBottom: '80px' , paddingTop: '10px'  }} >
            
            
            {movies.map((movie)=>(
                
                 
                <MovieItem key={movie.Title} movie={movie}/>
                )
                )}
           
        </div>
       
    )

}

export default MovieList;