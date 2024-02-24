import { useState, useEffect } from "react";
import { ReactComponent as DarkLogo } from  '../../../assets/img/dark_logo.svg';
import { ReactComponent as LightLogo } from '../../../assets/img/light_logo.svg';

const LoginLogo = () => {

    const [svg, setSvg] = useState(<DarkLogo/>);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setSvg(<DarkLogo/>);
        } else {
            setSvg(<LightLogo/>);
        }
    }, []);

    return (
        <>{svg}</>
    );
}

export default LoginLogo;
