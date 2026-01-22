import { createRoot } from "react-dom/client";
import logo from "./assets/images/react-img.png";
import "./index.css";


const root = createRoot(document.getElementById("root"))

root.render( 
    <main>
    <img src={logo} width="90px" alt="Logo" />
    <h1>Fun Facts About React!</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walket</li>
        <li>Has well over 200k Stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </main>
)