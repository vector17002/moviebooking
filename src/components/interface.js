import { Register } from "../module/user/Register";
import { User } from "../module/user/User";
import './css/interface.css'
const Interface=()=>{
return(
    <div className="intercontainer">
        <User/>
        <Register/>
    </div>
);
}
export default Interface;