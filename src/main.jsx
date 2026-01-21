import { createRoot } from "react-dom/client";
import logo from "./assets/images/react-img.png";


const root = createRoot(document.getElementById("root"))

root.render( 
    <img src={logo} alt="Logo" />
) 