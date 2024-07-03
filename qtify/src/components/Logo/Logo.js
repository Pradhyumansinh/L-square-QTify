import React from "react";
import logoUrl from '../../assets/Logo.png';
import logoStyle from './Logo.module.css';

const Logo = ({ altText }) => {
    return (
        <img src={logoUrl} alt={altText} className={logoStyle.logoImage} />
    );
}

export default Logo;