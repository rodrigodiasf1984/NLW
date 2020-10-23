import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer,Marker, Popup} from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';


interface Orphanage{
  id: number;
  latitude:number;
  longitude: number;
  name:string;
}

const OrphanagesMap: React.FC = () => {
 const[listOrphanages, setListOrphanages]=useState<Orphanage[]>([]);

  useEffect(()=>{
    api.get('orphanages').then(response =>{
      setListOrphanages(response.data)
    });
  },[]);


  return(
    <div id="page-map">
      <aside>
        <header>
          <img  src={mapMarkerImg} alt="Happy" />
          <h2>Escolha uma orfanato no mapa</h2>
          <p>
            Muitas crianças estão esperando a sua visita :)
          </p>
        </header>

        <footer>
          <strong>Cennes de la Vega</strong>
          <strong>Granada España</strong>
        </footer>
      </aside>
      
        <Map  
          center={[37.175296, -3.4868767]}
          zoom={15}
          style={{width:'100%', height:'100%'}}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
          <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
         {
           listOrphanages.map(orphanage=>{
             return(
              <Marker 
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF"/>
                </Link>
              </Popup>
            </Marker>
             )
           })
         }
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32}  color="#FFF"/>
        </Link>
      
    </div>
  );
}

export default OrphanagesMap;