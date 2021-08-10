import React from 'react';
import withHoverHOC from './withHoverHOC';

function MouseHoverComponent(props) {
    const { textColor, textHover,textContent, ...divProps } = props;
    return (
        <div>
            <h2 {...divProps} style={{ color: textColor }}>{textContent}</h2>
        </div>
    )
}

export default withHoverHOC(MouseHoverComponent);