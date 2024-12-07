import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "../leafletIcons.ts";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const position: LatLngTuple = [51.505, -0.09];

  return (
    <div style={{ height: "100vh", margin: 0, display: "flex", flexDirection: "column" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ flexGrow: 1, width: "100%" }} 
      >
    
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={position}>
          <Popup>
            <b>Bonjour !</b> Ceci est un exemple de popup.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Contact;
