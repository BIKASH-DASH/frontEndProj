import React, { useState,useEffect } from 'react';

const withHoverHOC = (WrappedComponent) => {
    const WithHover = () => {
        const [textHover, setHover] = useState(false);
        const [textColor, setTextColor] = useState('#888');
        const [textContent,setTextContent] = useState('Mouse Out');
        useEffect(() => {
            const textEffect = (textHover)?"Mouse Over":"Mouse Out";
            setTextContent(textEffect);
        }, [textHover])
        return <WrappedComponent
            textColor={textColor}
            textHover={textHover}
            textContent={textContent}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setTextColor('red')} />
    }

    return WithHover;
}

export default withHoverHOC;