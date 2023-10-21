import React, { useEffect, useRef, useState } from 'react';
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

import buses from '../layers/paradas.json';
import { connect, MqttClient } from "mqtt";


var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var busStopIcon = L.icon({
    iconUrl: '/bus-station.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize: [50, 50], // size of the icon
    // shadowSize: [50, 64], // size of the shadow
    iconAnchor: [0, 50], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});





function MapView(props) {

    const mapContainer = useRef();

    const [client, setClient] = useState<MqttClient | null>(
        connect("ws://192.168.6.24:8083/mqtt", {
            username: "user",
            password: "abcd1234.",
        })
    );
    const [connectStatus, setConnectStatus] = useState("Disconnected");
    const [payload, setPayload] = useState([{}]);

    const [busMarker, setBusMarker] = useState();

    useEffect(() => {
        if (client) {
            console.log(client);
            client.on("connect", () => {
                setConnectStatus("Connected");
                client.subscribe("bus/#");
            });
            client.on("error", (err) => {
                console.error("Connection error: ", err);
                client.end();
            });
            client.on("reconnect", () => {
                setConnectStatus("Reconnecting");
            });
            client.on("message", (topic, message) => {
                const payload = { topic, message: message.toString() };

                if (mapContainer.current && mapContainer.current.updateMarker) {
                    mapContainer.current.updateMarker(payload);
                } else {
                    client.end();
                    return;
                }
            });
        }
    }, [client]);


    useEffect(() => {

        const map = L.map(mapContainer.current).setView([43.354375, -8.400403], 13);

        map.setMaxBounds(L.latLngBounds([43.237124, -8.633676], [43.406339, -8.272036]));

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20,
            minZoom: 0
        }).addTo(map);


        L.geoJSON(buses, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            }
        }).addTo(map);

        //const marker = L.circleMarker([50.5, 30.5], {...geojsonMarkerOptions, fillColor: "#1315d9", radius: 10}).addTo(map);

        const renderedTopics = {};

        mapContainer.current.updateMarker = (payload) => {
            console.log(payload)
            const { latitude, longitude, color } = JSON.parse(payload.message);

            if (renderedTopics[payload.topic]) {
                const _current = renderedTopics[payload.topic];
                _current.setLatLng(L.latLng(latitude, longitude))
            } else {
                renderedTopics[payload.topic] = L.marker([latitude, longitude], { ...geojsonMarkerOptions, icon: busStopIcon }).addTo(map);
            }

            //

            //  marker.setLatLng(L.latLng(latitude, longitude));
        };

        return () => {
            map.remove();
        }
    }, []);

    return (
        <div ref={(el: any) => mapContainer.current = el} id={"buses_map"} className={"h-[calc(100dvh_-_4rem_-_1rem_-_theme('spacing.7'))] w-full"}></div>
    );
}

export default MapView;
