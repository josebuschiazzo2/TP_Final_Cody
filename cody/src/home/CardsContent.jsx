import React from 'react'
import Card from './Card'
import "./card.css"

import Carlini from "./../img/CarliniSmall.jpg"
import Esperanza from "./../img/EsperanzaSmall.jpg"
import Marambio from "./../img/MarambioSmall.jpg"
import Orcadas from "./../img/OrcadasSmall.jpg"
import SanMartin from "./../img/SanMartinSmall.jpg"
import Belgrano2 from "./../img/Belgrano2Small.jpg";
import Camara from "./../img/CamaraSmall.jpg"
import Decepcion from "./../img/DecepcionSmall.jpg";
import Primavera from "./../img/PrimaveraSmall.jpg";
import Melchior from "./../img/MelchiorSmall.jpg";
import Brown from "./../img/BrownSmall.jpg";
import Petrel from "./../img/PetrelSmall.jpg";
function CardsContent() {
  return (
    <div>
      <div id="cards" className='container'>
         <Card
          cardImg={Carlini}
          cardBadge="Permanente"
          cardTitle="Base Carlini"
          cardText="Está ubicada en Caleta Potter, Isla 25 de Mayo, y es la principal base científica permanente argentina. Su origen data del 21 de noviembre de 1953 cuando la Armada Argentina instaló el Refugio Naval Caleta Potter, luego Estación Aeronaval." />

        <Card
          cardImg={Esperanza}
          cardBadge="Permanente"
          cardTitle="Base esperanza"
          cardText="Fue inaugurada en diciembre de 1952 como Base de Ejército Bahía Esperanza por el entonces capitán Jorge Edgar Leal, luego comandante de la Operación 90, la expedición terrestre argentina al Polo Sur, y también director de la Dirección Nacional del Antártico (DNA)" />

        <Card
          cardImg={Marambio}
          cardBadge="Permanente"
          cardTitle="Base Marambio"
          cardText="La Base Marambio, dependiente de la Fuerza Aérea Argentina, es la principal puerta de entrada de la logística argentina en la Antártida y desde ella se despliega el mayor número de campamentos científicos durante la Campaña Antártica de Verano" />

        <Card
          cardImg={Orcadas}
          cardBadge="Permanente"
          cardTitle="Base Orcadas"
          cardText="La Base Orcadas fue la primera base antártica argentina y constituye la presencia humana de carácter estable más antigua del continente. Se encuentra situada en el Istmo de Ibarguren, entre las Bahías de Scotia y la Uruguay, en de la Isla Laurie, Orcadas del Sur." />

        <Card
          cardImg={SanMartin}
          cardBadge="Permanente"
          cardTitle="Base San Martín"
          cardText="Está localizada en el islote San Martín del grupo de islotes Debenham en Bahía Margarita, al oeste de la Península Antártica, siendo la más occidental de las bases argentinas. " />

        <Card
          cardImg={Belgrano2}
          cardBadge="Permanente"
          cardTitle="Base Belgrano II"
          cardText="Está ubicada sobre el Nunatak Bertrab, en los 77º51’S y 34º33’W, en bahía de Vahsel sobre la costa Confín en la Tierra de Cotas. Se encuentra a 1300 km del Polo Sur " />

        <Card
          cardImg={Camara}
          cardBadge="Temporal"
          cardTitle="Base Cámara"
          cardText="UBICACIÓN GEOGRÁFICA Caleta Menguante, isla Media Luna 62°36´S - 59°54´O" />

        <Card
          cardImg={Decepcion}
          cardBadge="Temporal"
          cardTitle="Base Decepción"
          cardText="UBICACIÓN GEOGRÁFICA Bahía 1˚ de Mayo, isla Decepción 62°59´S - 60°43´O" />

        <Card
          cardImg={Primavera}
          cardBadge="Temporal"
          cardTitle="Base Primavera"
          cardText="UBICACIÓN GEOGRÁFICA  Cabo Primavera, Costa Danco 64°09´S - 60°58´O" />

        <Card
          cardImg={Melchior}
          cardBadge="Temporal"
          cardTitle="Base Melchior"
          cardText="UBICACIÓN GEOGRÁFICA Isla Observatorio, Archipiélago Melchior 64°20´S - 62°59´O" />

        <Card
          cardImg={Brown}
          cardBadge="Temporal"
          cardTitle="Base Brown"
          cardText="UBICACIÓN GEOGRÁFICA Punta Proa, Bahía Puerto Paraíso 64°52´S - 62°54´O64°52´S - 62°54´O" />

        <Card
          cardImg={Petrel}
          cardBadge="Temporal"
          cardTitle="Base Petrel"
          cardText="UBICACIÓN GEOGRÁFICA Rada Petrel, Isla Dundee 63°28´S - 56°12´O" />
      </div> 
    </div>
  )
}

export default CardsContent;
