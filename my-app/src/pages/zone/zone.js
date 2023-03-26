import React from "react";
import "./zone.css"
import whiteLogo from '../../images/whitelogo.png'
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

export default function HomePage(){
    return (
        <>
            <div class="zwp">
                <img src={whiteLogo} alt="park logo" class="wLogo"></img>
            </div>

            <div class="zone1">
                <h1 class="zName">Zone1</h1>
                <div class="column">
                    <div class="card">                    
                        <ul>
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
                            <li ><img class="view" src={Popcorn} alt="popcorn"></img></li>
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
                        <ul>
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
                            <li><h3>Dragon Lair</h3></li>
                            <li>Type: Rollercoaster</li>
                            <li>Location: Zone3</li>
                            <li>Status: Open</li>
                        </ul>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <ul>
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