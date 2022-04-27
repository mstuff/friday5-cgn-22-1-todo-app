import {NavLink} from "react-router-dom";


export default function NavigationBar(){
    return (
        <div>
            <NavLink to={"/overview"}>
                Start
            </NavLink>
        </div>
    )
}