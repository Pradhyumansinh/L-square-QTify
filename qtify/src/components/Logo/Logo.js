import React from "react";
import logoUrl from '../../assets/Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <img src={logoUrl} alt="LogoImage" className="logoImage" />
    );
}

export default Logo;