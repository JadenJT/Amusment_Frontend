import React, { useState } from 'react';
import "./concessions.css";
import { Link, animateScroll } from "react-scroll";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const images ={};
const importAll = (r) => {
    r.keys().forEach((key) => {
        images[key.replace('./', '')] = r(key);
    });
};
importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));
const wonderTreatsImg = images['Wonder Treats.webp'];
const SpectacularSnacksImg = images['Spectacular Snacks.jpg'];
const IncredibleEatsImg = images['Incredible Eats.jpg'];
const EnchantedDelightsImg = images['Enchanted Delights.jpg'];
const EpicureanAdventuresImg = images['Epicurean Adventures.jpg'];
const MarvelousMealsImg = images['Marvelous Meals.jpg'];

const Concessions = () => {
    const [concessions, setConcessions] = useState([
        {
            name: 'Wonder Treats',
            imgSrc: wonderTreatsImg,
            description: 'Indulge in a wonderland of sweet and savory treats for the whole family!',
            location: 'Zone A',
            showInfo: false,
        },
        {
            name: 'Spectacular Snacks',
            imgSrc: SpectacularSnacksImg,
            description: 'Fuel up with our amazing snacks that will leave you feeling satisfied and ready to tackle the parks rides and attractions.',
            location: 'Zone A',
            showInfo: false,
        },
        {
            name: 'Incredible Eats',
            imgSrc: IncredibleEatsImg,
            description: 'Treat yourself to our incredible selection of mouth-watering eats that will leave you amazed.',
            location: 'Zone B',
            showInfo: false,
        },
        {
            name: 'Enchanted Delights',
            imgSrc: EnchantedDelightsImg,
            description: 'Enter our world of enchantment with our sweet and savory delights that are perfect for any age.',
            location: 'Zone B',
            showInfo: false,
        },
        {
            name: 'Epicurean Adventures',
            imgSrc: EpicureanAdventuresImg,
            description: 'Embark on an epicurean adventure with our diverse selection of delectable items that cater to every taste bud.',
            location: 'Zone C',
            showInfo: false,
        },
        {
            name: 'Marvelous Meals',
            imgSrc: MarvelousMealsImg,
            description: 'Enjoy our marvelous meals that feature the best of both worlds-kid-friendly favorites and adult-approved dishes.',
            location: 'Zone C',
            showInfo: false,
        },
    ]);

    const handleConcessionClick = (concession) => {
        setConcessions(prevState => {
            const updatedConcessions = prevState.map(item => {
                if (item === concession) {
                    return { ...item, showInfo: !item.showInfo }
                }
                return item;
            });
            return updatedConcessions;
        });
    };

    const handleConcessionInfoClose = (concession) => {
        setConcessions(prevState => {
          const updatedConcessions = prevState.map(item => {
            if (item === concession) {
              return { ...item, showInfo: false };
            }
            return item;
          });
          return updatedConcessions;
        });
      };
      
      const handleConcessionOverlayClick = (event, index) => {
        if (event.target.className === "concession-info-overlay") {
            const updatedConcessions =[...concessions];
            updatedConcessions[index].showInfo = false;
            setConcessions(updatedConcessions);
        }
      };

    
    return(
        <div>
        
            {/* Bottom-box */}
            <div className='bottom-box'>
                {/* Concessions button*/}
                <div className='center-dropdown-cons'>
                    <div className='dropdown-cons'>
                        <button className='concessions-button'>CONCESSIONS</button>
                        <div className='dropdown-content-cons'>
                            <Link to="zoneA-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone A</Link>
                            <Link to ="zoneB-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone B</Link>
                            <Link to = "zoneC-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone C</Link>
                        </div>
                    </div>
                </div>

                <h1 id="zoneA-title"><u>Zone A</u></h1>
                {concessions.some(concession => concession.location === 'Zone A') ? (
                    concessions.filter(concession => concession.location === 'Zone A').map((concession, index) => (
                        <div className='all-concessions' key={concession.name} onClick={(event) => handleConcessionClick(concession)}>
                            <img className='concession-img' src={concession.imgSrc} alt={concession.name}/>
                            <div className='concession-details'>
                                <h2 className='concession-name'>{concession.name}</h2>
                                <p>
                                    {concession.description}
                                    <br />
                                    Location: {concession.location}
                                    <br />
                                </p>
                            </div>
                            {concession.showInfo && concession.location === 'Zone A' &&(
                                <div className='concession-info-overlay' onClick={(event) => handleConcessionOverlayClick(event, index)}>
                                    <div className='concession-info-box'>
                                        <h2 className='concession-name-onClick'>{concession.name}</h2>
                                        <img className='concession-img-onClick' src={concession.imgSrc} alt={concession.name} />
                                        <p>
                                            {concession.description}
                                            <br />
                                            Location: {concession.location}
                                        </p>
                                        <button className= 'close-button' onClick={(event) => {
                                            event.stopPropagation();
                                            handleConcessionInfoClose(concession)
                                        }}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No concessions found in Zone A</p>
                )}

                <h1 id="zoneB-title"><u>Zone B</u></h1>
                {concessions.some(concession => concession.location === 'Zone B') ? (
                    concessions.filter(concession => concession.location === 'Zone B').map((concession, index) => (
                        <div className='all-concessions' key={concession.name} onClick={(event) => handleConcessionClick(concession)}>
                            <img className='concession-img' src={concession.imgSrc} alt={concession.name}/>
                            <div className='concession-details'>
                                <h2 className='concession-name'>{concession.name}</h2>
                                <p>
                                    {concession.description}
                                    <br />
                                    Location: {concession.location}
                                    <br />
                                </p>
                            </div>
                            {concession.showInfo && concession.location === 'Zone B' && (
                                <div className='concession-info-overlay' onClick={(event) => handleConcessionOverlayClick(event, index)}>
                                    <div className='concession-info-box'>
                                        <h2 className='concession-name-onClick'>{concession.name}</h2>
                                        <img className='concession-img-onClick' src={concession.imgSrc} alt={concession.name} />
                                        <p>
                                            {concession.description}
                                            <br />
                                            Location: {concession.location}
                                        </p>
                                        <button className= 'close-button' onClick={(event) => {
                                            event.stopPropagation();
                                            handleConcessionInfoClose(concession)
                                        }}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No concessions found in Zone B</p>
                )}

                <h1 id="zoneC-title"><u>Zone C</u></h1>
                {concessions.some(concession => concession.location === 'Zone C') ? (
                    concessions.filter(concession => concession.location === 'Zone C').map((concession, index) => (
                        <div className='all-concessions' key={concession.name} onClick={(event) => handleConcessionClick(concession)}>
                            <img className='concession-img' src={concession.imgSrc} alt={concession.name}/>
                            <div className='concession-details'>
                                <h2 className='concession-name'>{concession.name}</h2>
                                <p>
                                    {concession.description}
                                    <br />
                                    Location: {concession.location}
                                    <br />
                                </p>
                            </div>
                            {concession.showInfo && concession.location === 'Zone C' &&(
                                <div className='concession-info-overlay' onClick={(event) => handleConcessionOverlayClick(event, index)}>
                                    <div className='concession-info-box'>
                                        <h2 className='concession-name-onClick'>{concession.name}</h2>
                                        <img className='concession-img-onClick' src={concession.imgSrc} alt={concession.name} />
                                        <p>
                                            {concession.description}
                                            <br />
                                            Location: {concession.location}
                                        </p>
                                        <button className= 'close-button' onClick={(event) => {
                                            event.stopPropagation();
                                            handleConcessionInfoClose(concession)
                                        }}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No concessions found in Zone C</p>
                )}

            </div>

        </div>
    );
};

export default Concessions;