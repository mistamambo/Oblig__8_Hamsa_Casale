import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (

        <nav className="bg-gray-300 py-10 ">
            <div>
                <div className="flex justify-between">
                <h1 className="text-3xl font-bold ml-2  rounded-lg" >Oppgave 8 utført av Hamsa Casale</h1>
                    <ul className="flex justify-center gap-3 mr-2">
                        <li className="bg-blue-500 text-blue-100 py-2 px-4 rounded-lg"><NavLink to="/movies">Movies</NavLink></li>
                        <li className="bg-red-500 text-red-100 py-2 px-4 rounded-lg"><NavLink to="/actors">Actors</NavLink></li>
                    </ul>
                    <p>samarbeidet med Jennie-Lovise Nordheim Bjerke </p>
                </div>
            </div>
        </nav>
    )
}
export default Navigation