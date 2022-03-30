import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActor } from "../lib/services/movieService";

import { getActors } from "../lib/services/movieService";
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Actors = ({ dataA, setDataA }) => {
  
  const clickA = async () => {
    const actorPack = await getActors()
    setDataA(actorPack)
  }

 useEffect(()=>{
  clickA()
 }, []) 

  return(
  <>
    <button type="button" onClick={clickA}>Actor</button>
    <article>
      {dataA?.length > 0 ? dataA.map((actorArray)=>{
        return (
        <div className="actorsDiv">
          <article key={ actorArray.fullname }>
            <img src={actorArray.portrait.asset.url} alt="missing portrait" className="imgClassActors"></img>
            <h1>{ actorArray.fullname }</h1>
            <button><Link to={ actorArray.slug } >Actor bio</Link></button>
          </article>
        </div>
        )
      }) :null }
    </article>
  </>
  )
}

export default Actors;