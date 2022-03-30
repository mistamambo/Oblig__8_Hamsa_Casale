import { useParams, Link } from "react-router-dom";

const Movie = ({ title, actorm, dataM }) => {

  const {name}=useParams()

  const movieSiteArray = dataM.find((movieSite)=>{
    return movieSite.slug === name
  })

  return(
    <article className="movieArticle">
      <img src={movieSiteArray.poster.asset.url} alt="Movie poster missing"></img>
      <h2>{ movieSiteArray.title }</h2>
      <p><strong>Released in </strong>{ movieSiteArray.year }</p>
        <p>
          <h3><strong>Actors apearing in the movie: </strong></h3>
          <p className="borderNone">{ movieSiteArray.actor }</p>
          <p className="borderNone">{movieSiteArray.actor2 }</p>
        </p>

      <p><strong>Moviedescription: </strong><br></br>{movieSiteArray.description}</p>
      <button><Link to="/Movies">Back</Link></button>
    </article>
  )
}

export default Movie;