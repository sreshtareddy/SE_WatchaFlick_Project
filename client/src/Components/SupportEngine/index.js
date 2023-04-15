import React, {useState} from "react";
import Avatar from './Avatar';
import SupportWindow from "../SupportEngine/SupportWindow/index.js"

const SupportEngine = () => {
    const [visible, setVisible] = useState(false)

    const handleAvatarClick = () => {
        setVisible(true);
    }

    return (
        <div>
            <SupportWindow visible={visible}/>
            <Avatar 
                onClick={handleAvatarClick}
                isVisible={visible}
            />
        </div>
    )
}


export default SupportEngine;