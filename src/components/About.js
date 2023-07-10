import React from "react";
import EaganBakingUtensils from '../images/Bakery-Utensils.png'
import CinnamonBread from '../images/cinnamon bread.jpg'
import BananaBread from '../images/bread.jpg'
import Cake from '../images/cake.jpg'
import Cookies from '../images/cookie.jpg'
import Cookies2 from '../images/cookies2.jpg'
import TresLeches from '../images/tresleches.jpg'

export default function About() {
    return(
        <div className="about-container">
            <h1>Welcome to Umm Yahya's Bakery: Crafting Delicious Delights in Minnesota</h1>
                <img className="utensils" src={EaganBakingUtensils} alt="Baking Utensils"/>
                <h2>Our Story: A Taste of Minnesota's Finest Baked Creations</h2>

        <div className="about-section">
        <div className="about-text">
            <p>Our story begins with Umm Yahya, a talented baker with an unwavering love for the art of baking. From a young age, Umm Yahya spent countless hours in the kitchen, experimenting with flavors, perfecting recipes, and sharing her delectable creations with family and friends.</p>
            <p>As her passion grew, so did the demand for her baked goods. Encouraged by the overwhelming positive feedback and the sheer joy her treats brought to others, Umm Yahya decided to turn her passion into a bakery business. With relentless determination and a burning desire to share her creations with a wider audience, she embarked on an incredible journey.</p>
            </div>
            <img src={Cake} alt="Cake"/>
        </div>

            <div className="gallery">
                <div className="part-1">
                <img src={TresLeches} alt="Tres Leches Cake"/>
                <img className="rotate" src={Cookies2} alt="Cookies in Eagan"/>
                </div>
                <div className="part-2">
                <img src={Cookies} alt="Homemade Cookies"/>
                <img src={CinnamonBread} alt="Homemade Cinnamon bread"/>
                <img src={BananaBread} alt="Homemade Banana Bread"/>
                </div>
            </div>

            
        </div>
    )
}