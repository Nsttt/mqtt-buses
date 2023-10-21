import React from 'react';
import dynamic from "next/dynamic";
const MapView = dynamic(() => import("@/components/MapView"), {ssr: false});

function Map(props: any) {
    return (
        <div>
            <MapView/>
        </div>
    );
}

export default Map;
