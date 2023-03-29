import React from "react";
import Logo from '../../icons/Umazing.svg';
import "./zone.css"
import Popcorn from '../../images/concessions/popcorn.jpg'
import CottonCandy from '../../images/concessions/cottoncandy.jpg'
import Lemonade from '../../images/concessions/lemonade.jpg'
import GiftShop1 from '../../images/giftshop/giftshop1.jpg'
import FunnerlCake from '../../images/concessions/funnelcake.jpg'
import IceCream from '../../images/concessions/icecream.jpg'
import GiftShop2 from '../../images/giftshop/giftshop2.jpg'
import Burger from '../../images/concessions/burger.jpg'
import Turkey from '../../images/concessions/turkey.jpg'
import Hotdog from '../../images/concessions/hotdogs.jpg'
import GiftShop3 from '../../images/giftshop/giftshop3.jpg'

import SkyBlade from '../../images/SkyBlade.jpg'
import VortexX from '../../images/VortexX.jpg'
import Thunderbolt from '../../images/Thunderbolt.jpg'
import RainbowSwirl from '../../images/RainbowSwirl.jpg'
import JungleSafari from '../../images/JungleSafari.jpg'
import GForce from '../../images/G-Force.jpg'
import WarpZone from '../../images/WarpZone.webp'
import Wildfire from '../../images/Wildfire.jpg'
import PiratePlunge from '../../images/PiratePlunge.jpg'
import SpaceExplorer from '../../images/SpaceExplorer.webp'
import AeroJet from '../../images/AeroJet.jpg'
import CosmicCruiser from '../../images/CosmicCruiser.jpg'
import Inferno from '../../images/Inferno.jpg'
import DragonsLair from '../../images/DragonsLair.jpg'
import DinoAdventure from '../../images/DinoAdventure.jpg'

import WonderTreats from '../../images/Wonder Treats.webp'
import SpectacularSnacks from '../../images/Spectacular Snacks.jpg'
import IncredibleEats from '../../images/Incredible Eats.jpg'
import EnchantedDelights from '../../images/Enchanted Delights.jpg'
import EpicureanAdventures from '../../images/Epicurean Adventures.jpg'
import MarvelousMeals from '../../images/Marvelous Meals.jpg'

export default function Zone(){
    console.log("poop");
    return (
        <>
            <div class="zwp">
                <img src={Logo} alt="park logo" class="wLogo"></img>
            </div>

            <div class="zoneA">
                <h1 class="zName">Zone A</h1>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={SkyBlade} alt="SkyBlade"></img></li>
                            <li><h3>SkyBlade</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone A</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div> 
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={VortexX} alt="VortexX"></img></li>
                            <li><h3>VortexX</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone A</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={Thunderbolt} alt="Thunderbolt"></img></li>
                            <li><h3>Thunderbolt</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone A</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={RainbowSwirl} alt="Rainbow Swirl"></img></li>
                            <li><h3>Rainbow Swirl</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone A</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={JungleSafari} alt="Jungle Safari"></img></li>
                            <li><h3>Jungle Safari</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone A</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={WonderTreats} alt="concession"></img></li>
                            <li><h3>Wonder Treats</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone A</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={SpectacularSnacks} alt="concession"></img></li>
                            <li><h3>Spectacular Snacks</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone A</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={GiftShop1} alt="gift shop"></img></li>                    
                            <li><h3>Gift Shop A</h3></li>
                            <li>Type: GiftShop</li>
                            <li>Location: Zone A</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="zoneB">
                <h1 class="zName">Zone B</h1>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={GForce} alt="G Force"></img></li>
                            <li><h3>G-Force</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone B</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={WarpZone} alt="Warp Zone"></img></li>
                            <li><h3>WarpZone</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone B</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={Wildfire} alt="Wildfire"></img></li>
                            <li><h3>Wildfire</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone B</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={PiratePlunge} alt="Pirate Plunde"></img></li>
                            <li><h3>Pirate Plunge</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone B</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={SpaceExplorer} alt="Space Explorer"></img></li>
                            <li><h3>Space Explorer</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone B</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={IncredibleEats} alt="concession"></img></li>
                            <li><h3>Incredible Eats</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone B</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={EnchantedDelights} alt="concession"></img></li>
                            <li><h3>Enchanted Delights</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone B</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={GiftShop2} alt="gift shop"></img></li>
                            <li><h3>Gift Shop B</h3></li>
                            <li>Type: GiftShop</li>
                            <li>Location: Zone B</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="zoneC">
                <h1 class="zName">Zone C</h1>
                <div class="column">
                    <div class="card">
                        <ul><li><img class="view" src={AeroJet} alt="AeroJet"></img></li>
                            <li><h3>AeroJet</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone C</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={CosmicCruiser} alt="Cosmic Cruiser"></img></li>
                            <li><h3>Cosmic Cruiser</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone C</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={Inferno} alt="Inferno"></img></li>
                            <li><h3>Inferno</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone C</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>        
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={DragonsLair} alt="Dragons Lair"></img></li>
                            <li><h3>Dragons Lair</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone C</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={DinoAdventure} alt="Dino Adventure"></img></li>
                            <li><h3>Dino Adventure</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone C</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={EpicureanAdventures} alt="concession"></img></li>
                            <li><h3>Epicurean Adventures</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone C</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={MarvelousMeals} alt="concession"></img></li>
                            <li><h3>Marvelous Meals</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone C</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={GiftShop3} alt="gift shop"></img></li>
                            <li><h3>Gift Shop C</h3></li>
                            <li>Type: GiftShop</li>
                            <li>Location: Zone C</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}