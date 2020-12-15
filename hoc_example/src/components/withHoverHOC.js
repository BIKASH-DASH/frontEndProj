import React, { useState } from 'react';

const withHoverHOC = (WrappedComponent) => {
    const WithHover = () => {
        const [textHover, setHover] = useState(false);
        const [textColor, setTextColor] = useState('#888');
        return <WrappedComponent
            textColor={textColor}
            textHover={textHover}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setTextColor('red')} />
    }

    return WithHover;
}

export default withHoverHOC;