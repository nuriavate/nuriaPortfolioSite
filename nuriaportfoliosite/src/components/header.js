import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-white">
            <div>
                 <Link to="/">
                    <img src="/imatges/red_logo.svg" alt="logo" />
                </Link>
            </div>

            <div></div>

            <ul>
                 <li><Link to="/cv" onClick={() => setOpen(false)}>CV</Link></li>
                <li><Link to="/uxuidesign" onClick={() => setOpen(false)}>UX/UI DESIGN</Link></li>
                <li><Link to="/videogamesxr" onClick={() => setOpen(false)}>VIDEOGAMES & XR</Link></li>
                <li><Link to="/other" onClick={() => setOpen(false)}>OTHER</Link></li>
            </ul>

        </div>
    );
}