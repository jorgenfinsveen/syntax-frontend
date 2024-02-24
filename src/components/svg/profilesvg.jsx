import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";

const ProfileSVG = () => {
    const value = useContext(ThemeContext)

    const picColor = () => {
        if (value.theme == 'light') {
            return "data:image/png;base64,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"
        } else {
            return "data:image/png;base64,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"
        }
    }

    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="22" height="22">
            <title>loginperson</title>
            <defs>
                <image  width="22" height="22" id="profile" href={picColor()}/>
            </defs>
            <style>
            </style>
            <use id="Background" href="#profile" x="0" y="0"/>
        </svg>
   )
}

export default ProfileSVG