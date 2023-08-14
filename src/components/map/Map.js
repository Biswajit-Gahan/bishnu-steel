import React from "react";
import { MapSectionContainer } from "./map.styles";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pinIcon from "../../assets/images/pin.png";
import { Icon } from "leaflet";

const Map = () => {
  return (
    <MapSectionContainer>
      <MapContainer center={[20.317766160615026, 85.84777079576398]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker
          position={[20.317766160615026, 85.84777079576398]}
          icon={new Icon({ iconUrl: pinIcon, iconSize: [50, 50] })}
          eventHandlers={{
            click: () => {
              window.open("https://www.google.com/maps/dir//20.317766160615026,%2085.84777079576398", "_blank");
            }
          }}
        >
        </Marker>
      </MapContainer>
    </MapSectionContainer>
  );
};

export default Map;