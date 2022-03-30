import { useParams, Link } from "react-router-dom";

const Actor = ({ dataA }) => {
  
  const {name}=useParams()
  
  const actorBioArray = dataA.find((actorBio)=>{
    return actorBio.slug === name
  })

  return(
    <article className="actorArticle">
      <img src={actorBioArray.portrait.asset.url} alt="missing portrait"></img>
      <h2>{actorBioArray.fullname}</h2>
      <p><strong>Professsion: </strong>{actorBioArray._type}</p>
        <p>
          <h3><strong>Apeared in: </strong></h3>
          <p className="borderNone">{actorBioArray.movierole}</p>
          <p className="borderNone">{actorBioArray.movierole2}</p>
          <p className="borderNone">{actorBioArray.movierole3}</p>
        </p>
      
      <p><strong>Mini bio: </strong><br></br>{actorBioArray.bio}</p>
      <button><Link to="/Actors">Back</Link></button>
    </article>
  )
}

export default Actor;
