import React from 'react';


const IFrame = ({src, width, height}) => {
    return (
        <div>
            <iframe
            src={src}
            width={width}
            height={height}
            
            ></iframe>
        </div>
    )
}

export default IFrame;