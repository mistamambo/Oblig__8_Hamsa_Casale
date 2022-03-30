import { getMovies } from "../lib/services/movieService";
import { Link } from 'react-router-dom'
import { useEffect } from "react";



const Movies = ({ dataM, setDataM }) => {
  
  const clickM = async () => {
    const moviePack = await getMovies()
    setDataM(moviePack)
  }

useEffect(()=>{
  clickM()
}, [])

  return(
  <>
    <button type="button" onClick={clickM} >Movie</button>
    <article>
      {dataM?.length > 0 ? dataM.map((movieArray)=>{
        return(
          <div className="moviesDiv">
            <article key={ movieArray.title } >
              <img src={movieArray.poster.asset.url} alt="Movie poster missing" className="imgClassMovies"></img>
              <h1>{ movieArray.title } </h1>
              <button><Link to={ movieArray.slug }>Movie info</Link></button>
            </article>
          </div>
        )
      }):null}
    </article>
  </>
  )
}

export default Movies;
