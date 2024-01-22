import React from "react";
import { Link } from 'react-router-dom';


const HeaderButtons = ({ text, link }) => {
    return (
        <Link to={link} className="flex-1 flex flex-row items-center justify-center py-0 pr-[3px] pl-0">
            <div className="h-6 relative font-medium inline-block">{text}</div>
        </Link>
    );
}

export default HeaderButtons;
