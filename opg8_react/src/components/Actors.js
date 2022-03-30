import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActor } from "../lib/services/movieService";

const Actors = ({ actor, setActor }) => {
    const bringActor = async () => {
        const dataA = await getActor();
        setActor(dataA)
    }

    useEffect(() => {
        bringActor();
    }, [])

    return (
        <>
                <h2 className="text-2xl flex justify-center">Movie actors below:</h2>
                <button type="button" onClick={bringActor} className="bg-gray-500 text-blue-100 py-2 px-4 rounded-lg">Actors</button>
                <div className="py-2 px-2 flex justify-center gap-2">
                {data && data.map((actorList) => {
        return ( 
                        <div className="flex flex-row-2 justify-center gap-2 p-3 mb-5">
                    <article key={actorList.title} className="text-lg font-bold mt-3">
                        <h3>{actorList.title}</h3>
                        <p>{actorList.actor}</p>
                        <img src={actorList.poster.asset.url} className="max-w-sm mb-3 border-2 border-slate-900 round rounded-t-lg"/>
                        <button><Link to={actorList.slug} className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg">Actor info</Link></button>
                    </article>
            </div>
        )    
        })}
</>     )

export default Actors