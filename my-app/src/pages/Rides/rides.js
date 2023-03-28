import React, { useState } from 'react';
import "./rides.css";
import { Link, animateScroll } from "react-scroll";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const images = {};
const importAll = (r) => {
    r.keys().forEach((key) => {
        images[key.replace('./', '')] = r(key);
    });
};
importAll(require.context('../../images', false, /\.(png|jpe?g|svg|webp)$/));
const skybladeImg = images['SkyBlade.jpg'];
const vortexXImg = images['VortexX.jpg'];
const ThunderboltImg = images['Thunderbolt.jpg'];
const GForceImg = images['G-Force.jpg'];
const WarpZoneImg = images['WarpZone.webp'];
const WildFireImg = images['Wildfire.jpg'];
const AeroJetImg = images['AeroJet.jpg'];
const CosmicCruiserImg = images['CosmicCruiser.jpg'];
const InfernoImg = images['Inferno.jpg'];
const RainbowImg = images['RainbowSwirl.jpg'];
const JungleSafariImg = images['JungleSafari.jpg'];
const PiratePlungeImg = images['PiratePlunge.jpg'];
const SpaceExploreImg = images['SpaceExplorer.webp'];
const DragonsLiarImg = images['DragonsLair.jpg'];
const DinoAdventureImg = images['DinoAdventure.jpg'];


const Rides = () => {
    const [rides, setRides] = useState([
        {
            name: 'SkyBlade',
            imgSrc: skybladeImg,
            location: 'Zone A',
            heightRequirement: "42 cm",
            description: 'A high-speed roller coaster that takes riders on a thrilling journey through twists, turns, and loops.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'VortexX',
            imgSrc: vortexXImg,
            location: 'Zone A',
            heightRequirement: "42 cm",
            description: 'A spinning ride that merges the adrenaline-pumping experience of a roller coaster with the exhilarating sensation of whirling through the air, similar to a twirling carnival swing ride.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'Thunderbolt',
            imgSrc: ThunderboltImg,
            location: 'Zone A',
            heightRequirement: "42 cm",
            description: 'A high-speed drop tower that takes riders up to great heights before plummeting down at lighting speeds.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'G-Force',
            imgSrc: GForceImg,
            location: 'Zone B',
            heightRequirement: "42 cm",
            description: 'A ride that uses centrifugal force to spin riders around in circles at dizzying speeds.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
          name: 'WarpZone',
          imgSrc: WarpZoneImg,
          location: 'Zone B',
          heightRequirement: "42 cm",
          description: 'A futuristic ride that takes riders on a high-speed journey through time and space, complete with special effects and immersive theming.',
          maintenanceHours: 0,
          inMaintenance: false,
          status: 'Get from database', //status
          showInfo: false, 
        },
        {
            name: 'Wildfire',
            imgSrc: WildFireImg,
            location: 'Zone B',
            heightRequirement: "42 cm",
            description: 'A water ride that takes riders on a thrilling journey through rapids, waterfalls, and splashy drops.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'AeroJet',
            imgSrc: AeroJetImg,
            location: 'Zone C',
            heightRequirement: "42 cm",
            description: 'A high-flying ride that takes riders on a soaring journey through the air, complete with twist, turns and thrilling drops.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'Cosmic Cruiser',
            imgSrc: CosmicCruiserImg,
            location: 'Zone C',
            heightRequirement: "42 cm",
            description: 'A dark ride that takes riders on a space-themed adventure through the stars, complete with special effects, animations, and interactive elements.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'Inferno',
            imgSrc: InfernoImg,
            location: 'Zone C',
            heightRequirement: "42 cm",
            description: 'A fiery thrill ride that takes riders on a blazing journey through twist, turns, and sudden drops, all a while surrounded by special effects and pyrotechnics.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
    ]);

    const[kidRides, setRides2] = useState([
        {
            name: 'Rainbow Swirl',
            imgSrc: RainbowImg,
            location: 'Zone A',
            heightRequirement: "36 cm",
            description: 'A colorful spinning teacup-style attraction that takes kids on a magical journey through a swirling rainbow of colors.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'Jungle Safari',
            imgSrc: JungleSafariImg,
            location: 'Zone A',
            heightRequirement: "36 cm",
            description: 'An exciting ride that takes kids on a wild adventure through the jungle in a safari jeep that travels on a track through a jungle-themed environment.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'Pirate Plunge',
            imgSrc: PiratePlungeImg,
            location: 'Zone B',
            heightRequirement: "36 cm",
            description: 'A water-based attraction that takes kids on a swashbuckling adventure on a pirate ship that plunges down a steep drop into a splash pool below.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'Space Explorer',
            imgSrc: SpaceExploreImg,
            location: 'Zone B',
            heightRequirement: "36 cm",
            description: 'A ride that takes kids on an intergalactic adventure through the stars in a spacecraft that travels on a track through a space-themed environment.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'Dragons Liar',
            imgSrc: DragonsLiarImg,
            location: 'Zone C',
            heightRequirement: "36 cm",
            description: 'A thrilling roller coaster that takes kids on a high-speed journey through a dragons lair with twists, turns, and drops that simulate a dragons flight through dark caverns and winding tunnels.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
        {
            name: 'Dino Adventure',
            imgSrc: DinoAdventureImg,
            location: 'Zone C',
            heightRequirement: "36 cm",
            description: 'A ride that takes kids back in time to the age of the dinosaurs, exploring a prehistoric landscape filled with animatronic dinosaurs, volcanoes, and other ancient landmarks.',
            maintenanceHours: 0,
            inMaintenance: false,
            status: 'Get from database', //status
            showInfo: false,
        },
    ]);


    const handleRideClick = (index, event) => {
        const updatedRides = [...rides];
        updatedRides[index].showInfo = !updatedRides[index].showInfo;
        setRides(updatedRides);
    };

    const handleKidsRideClick = (index, event) =>{
        const updatedKidRides = [...kidRides];
        updatedKidRides[index].showInfo = !updatedKidRides[index].showInfo;
        setRides2(updatedKidRides);
    };

    const handleInfoClose = (index) => {
        const updatedRides = [...rides];
        updatedRides[index].showInfo = false;
        setRides(updatedRides);
    };

    const handleKidsInfoClose = (index) => {
        const updatedKidRides = [...kidRides];
        updatedKidRides[index].showInfo = false;
        setRides2(updatedKidRides);
    };

    const handleOverlayClick = (event, index) => {
        if (event.target.className === "ride-info-overlay") {
          const updatedRides = [...rides];
          updatedRides[index].showInfo = false;
          setRides(updatedRides);
        }
      };
    
    const handleKidsOverlayClick = (event, index) => {
        if(event.target.className === "ride-info-overlay"){
            const updatedKidRides = [...kidRides];
            updatedKidRides[index].showInfo = false;
            setRides2(updatedKidRides);
        }
    }
    return (
        <div>
            <div className="center-dropdown">
                <div className="dropdown">
                    <button className="ridesButton">RIDES</button>
                    <div className="dropdown-content">
                        <Link to="adult-rides-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Adult Rides</Link>
                        <Link to="kids-rides-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Kids Rides</Link>
                    </div>
                </div>
            </div>

            {/*Adult Rides Title*/}
            <h1 id="adult-rides-title"><u>Adult Rides</u></h1>
            {rides.map((ride, index) => (
                <div className="all-rides" key={ride.name} onClick={() => handleRideClick(index)}>
                    <img className="img-ride" src={ride.imgSrc} alt={ride.name} />
                    <div className="ride-details">
                        <h2 className="ride-name">{ride.name}</h2>
                        <p>
                            {ride.description}
                            <br />
                            Location: {ride.location}
                            <br />
                            Must be {ride.heightRequirement} to ride
                        </p>
                    </div>
                    {ride.showInfo && (
                        <div className="ride-info-overlay" onClick={(event) => handleOverlayClick(event, index)}>
                            <div className="ride-info-box">
                                <h2 className="ride-name-onClick">{ride.name}</h2>
                                <img className="img-ride-onClick" src={ride.imgSrc} alt={ride.name} />
                                <p>This will show if the ride is available or not. <br />
                                    {ride.description}
                                    <br />
                                    Location: {ride.location}
                                    <br />
                                    Must be {ride.heightRequirement} to ride
                                </p>
                                <button className="close-button" onClick={(event) => {
                                    event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                    handleInfoClose(index)
                                }}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/*Kids Rides*/}
            <h1 id="kids-rides-title"><u>Kids Rides</u></h1>
            {kidRides.map((ride, index) => (
                <div className="all-rides" key={ride.name} onClick={() => handleKidsRideClick(index)}>
                    <img className="img-ride" src={ride.imgSrc} alt={ride.name} />
                    <div className="ride-details">
                        <h2 className="ride-name">{ride.name}</h2>
                        <p>
                            {ride.description}
                            <br />
                            Location: {ride.location}
                            <br />
                            Must be {ride.heightRequirement} to ride
                        </p>
                    </div>
                    {ride.showInfo && (
                        <div className="ride-info-overlay" onClick={(event) => handleKidsOverlayClick(event, index)}>
                            <div className="ride-info-box">
                                <h2 className="ride-name-onClick">{ride.name}</h2>
                                <img className="img-ride-onClick" src={ride.imgSrc} alt={ride.name} />
                                <p>This will show if the ride is available or not.<br />
                                    {ride.description}
                                    <br />
                                    Location: {ride.location}
                                    <br />
                                    Must be {ride.heightRequirement} to ride
                                </p>

                                <button className="close-button" onClick={(event) => {
                                    event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                    handleKidsInfoClose(index)
                                }}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}


        </div>
    );
};

export default Rides;