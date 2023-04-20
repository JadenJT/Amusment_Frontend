import React from "react";
import Logo from '../../icons/Umazing.svg';
import "./zone.css"
import GiftShop1 from '../../images/giftshop1.jpg'
import GiftShop2 from '../../images/giftshop2.jpg'
import GiftShop3 from '../../images/giftshop3.jpg'

import SkyBlade from '../../images/SkyBlade.jpg'
import VortexX from '../../images/VortexX.jpg'
import Thunderbolt from '../../images/Thunderbolt.jpg'
import RainbowSwirl from '../../images/RainbowSwirl.jpg'
import JungleSafari from '../../images/JungleSafari.jpg'
import GForce from '../../images/G-Force.jpg'
import WarpZone from '../../images/WarpZone.jpg'
import Wildfire from '../../images/Wildfire.jpg'
import PiratePlunge from '../../images/PiratePlunge.jpg'
import SpaceExplorer from '../../images/SpaceExplorer.jpg'
import AeroJet from '../../images/AeroJet.jpg'
import CosmicCruiser from '../../images/CosmicCruiser.jpg'
import Inferno from '../../images/Inferno.jpg'
import DragonsLair from '../../images/DragonsLair.jpg'
import DinoAdventure from '../../images/DinoAdventure.jpg'

import WonderTreats from '../../images/Wonder Treats.jpg'
import SpectacularSnacks from '../../images/Spectacular Snacks.jpg'
import IncredibleEats from '../../images/Incredible Eats.jpg'
import EnchantedDelights from '../../images/Enchanted Delights.jpg'
import EpicureanAdventures from '../../images/Epicurean Adventures.jpg'
import MarvelousMeals from '../../images/Marvelous Meals.jpg'

export default function Zone() {
    return (
        <>
            <div className="zwp">
                <img src={Logo} alt="park logo" className="wLogo"></img>
            </div>
            <div className="zBody">
                <div className="zSection">
                    <h1 className="zName">Zone A</h1>
                    <div className="zContainer">
                        <div className="zCard">
                            <div><img className="view" src={SkyBlade} alt="SkyBlade"></img></div>
                            <div><h3>SkyBlade</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone A</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={VortexX} alt="VortexX"></img></div>
                            <div><h3>VortexX</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone A</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={Thunderbolt} alt="Thunderbolt"></img></div>
                            <div><h3>Thunderbolt</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone A</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={RainbowSwirl} alt="Rainbow Swirl"></img></div>
                            <div><h3>Rainbow Swirl</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone A</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={JungleSafari} alt="Jungle Safari"></img></div>
                            <div><h3>Jungle Safari</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone A</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={WonderTreats} alt="concession"></img></div>
                            <div><h3>Wonder Treats</h3></div>
                            <div>Type: Concession</div>
                            <div>Location: Zone A</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                                <div><img className="view" src={SpectacularSnacks} alt="concession"></img></div>
                                <div><h3>Spectacular Snacks</h3></div>
                                <div>Type: Concession</div>
                                <div>Location: Zone A</div>
                                <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={GiftShop1} alt="gift shop"></img></div>                    
                            <div><h3>Gift Shop A</h3></div>
                            <div>Type: GiftShop</div>
                            <div>Location: Zone A</div>
                            <div>Status: Open</div>
                        </div>
                    </div>
                </div>

                <div className="zSection">
                    <h1 className="zName">Zone B</h1>
                    <div className="zContainer">
                        <div className="zCard">
                            <div><img className="view" src={GForce} alt="G Force"></img></div>
                            <div><h3>G-Force</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone B</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={WarpZone} alt="Warp Zone"></img></div>
                            <div><h3>WarpZone</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone B</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={Wildfire} alt="Wildfire"></img></div>
                            <div><h3>Wildfire</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone B</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={PiratePlunge} alt="Pirate Plunde"></img></div>
                            <div><h3>Pirate Plunge</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone B</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={SpaceExplorer} alt="Space Explorer"></img></div>
                            <div><h3>Space Explorer</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone B</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={IncredibleEats} alt="concession"></img></div>
                            <div><h3>Incredible Eats</h3></div>
                            <div>Type: Concession</div>
                            <div>Location: Zone B</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={EnchantedDelights} alt="concession"></img></div>
                            <div><h3>Enchanted Delights</h3></div>
                            <div>Type: Concession</div>
                            <div>Location: Zone B</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={GiftShop2} alt="gift shop"></img></div>
                            <div><h3>Gift Shop B</h3></div>
                            <div>Type: GiftShop</div>
                            <div>Location: Zone B</div>
                            <div>Status: Open</div>
                        </div>
                    </div>
                </div>

                <div className="zSection">
                    <h1 className="zName">Zone C</h1>
                    <div className="zContainer">
                        <div className="zCard">
                            <div><img className="view" src={AeroJet} alt="AeroJet"></img></div>
                            <div><h3>AeroJet</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone C</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={CosmicCruiser} alt="Cosmic Cruiser"></img></div>
                            <div><h3>Cosmic Cruiser</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone C</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={Inferno} alt="Inferno"></img></div>
                            <div><h3>Inferno</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone C</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={DragonsLair} alt="Dragons Lair"></img></div>
                            <div><h3>Dragons Lair</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone C</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={DinoAdventure} alt="Dino Adventure"></img></div>
                            <div><h3>Dino Adventure</h3></div>
                            <div>Type: Rollercoaster</div>
                            <div>Location: Zone C</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={EpicureanAdventures} alt="concession"></img></div>
                            <div><h3>Epicurean Adventures</h3></div>
                            <div>Type: Concession</div>
                            <div>Location: Zone C</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                            <div><img className="view" src={MarvelousMeals} alt="concession"></img></div>
                            <div><h3>Marvelous Meals</h3></div>
                            <div>Type: Concession</div>
                            <div>Location: Zone C</div>
                            <div>Status: Open</div>
                        </div>
                        <div className="zCard">
                                <div><img className="view" src={GiftShop3} alt="gift shop"></img></div>
                                <div><h3>Gift Shop C</h3></div>
                                <div>Type: GiftShop</div>
                                <div>Location: Zone C</div>
                                <div>Status: Open</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}