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


export default function Zone(){
    console.log("poop");
    return (
        <>
            <div class="zwp">
                <img src={Logo} alt="park logo" class="wLogo"></img>
            </div>

            <div class="zone1">
                <h1 class="zName">Zone1</h1>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={SkyBlade} alt="SkyBlade"></img></li>
                            <li><h3>SkyBlade</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone1</li>
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
                            <li>Location: Zone1</li>
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
                            <li>Location: Zone1</li>
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
                            <li>Location: Zone1</li>
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
                            <li>Location: Zone1</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={Popcorn} alt="popcorn"></img></li>
                            <li><h3>Popcorn</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone1</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={CottonCandy} alt="cotton candy"></img></li>
                            <li><h3>Cotton Candy</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone1</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={Lemonade} alt="lemonade"></img></li>
                            <li><h3>Lemonade</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone1</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={GiftShop1} alt="gift shop"></img></li>                    
                            <li><h3>Gift Shop</h3></li>
                            <li>Type: GiftShop</li>
                            <li>Location: Zone1</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="zone2">
                <h1 class="zName">Zone2</h1>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={GForce} alt="G Force"></img></li>
                            <li><h3>G-Force</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone2</li>
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
                            <li>Location: Zone2</li>
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
                            <li>Location: Zone2</li>
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
                            <li>Location: Zone2</li>
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
                            <li>Location: Zone2</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={FunnerlCake} alt="funnel cake"></img></li>
                            <li><h3>Funnel Cake</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone2</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={IceCream} alt="ice cream"></img></li>
                            <li><h3>Ice Cream</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone2</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">                    
                        <ul>
                            <li><img class="view" src={GiftShop2} alt="gift shop"></img></li>
                            <li><h3>Gift Shop2</h3></li>
                            <li>Type: GiftShop</li>
                            <li>Location: Zone2</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="zone3">
                <h1 class="zName">Zone3</h1>
                <div class="column">
                    <div class="card">
                        <ul><li><img class="view" src={AeroJet} alt="AeroJet"></img></li>
                            <li><h3>AeroJet</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone3</li>
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
                            <li>Location: Zone3</li>
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
                            <li>Location: Zone3</li>
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
                            <li>Location: Zone3</li>
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
                            <li>Location: Zone3</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={Burger} alt="burger"></img></li>
                            <li><h3>Big Burgers</h3></li>
                            <li>Type: Concession</li>
                            <li>Location: Zone3</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={Turkey} alt="turkey"></img></li>
                            <li><h3>Turkey Legs</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone3</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={Hotdog} alt="hotdog"></img></li>
                            <li><h3>Hot Dogs</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone3</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
                            <li><img class="view" src={GiftShop3} alt="gift shop"></img></li>
                            <li><h3>Gift Shop</h3></li>
                            <li>Type: GiftShop</li>
                            <li>Location: Zone3</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}