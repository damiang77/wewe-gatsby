import React from 'react';
import YouTube from 'react-youtube-embed'

const ResponsivePlayer = ({id}) => {
    return (
        <>
            <YouTube id={id} />
        </>
    );
};

export default ResponsivePlayer;