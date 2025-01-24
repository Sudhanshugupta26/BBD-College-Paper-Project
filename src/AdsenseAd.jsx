import React from 'react';

const AdsenseAd = ({ adClient, adSlot, width, height, display }) => {
    return (
        <ins
            className="adsbygoogle"
            style={{ display: display }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
            //data-adtest="on" // Remove this in production
        ></ins>
    );
};

export default AdsenseAd;
