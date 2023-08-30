import React from "react";
import { Link } from 'react-router-dom';
import EaganMilkshake from '../images/milkshake&cakepops.png'
import EaganCupcake from '../images/Cupcake.png';
import CookieVideo from '../images/Baked Cookies.mp4';
import Cake from '../images/cake.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg, faKitchenSet, faCookieBite, faUser, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home(){
    return(
    <div className="home-container">
        <main>
        <img className='cookie-hero' src={EaganMilkshake} alt="milkshake and cake pops"/>
        <div className="hero-text">
        <h1>Minnesota's Finest Freshly Baked Goodness</h1>
        <h4>Hurry, Limited Quantities Available!</h4>
        <h4>*Order by 4:30pm for same day pickup*</h4>
        <Link to="/Order"><button>ORDER NOW</button></Link>
        </div>
       </main>

       <h2>Our Baking Secrets</h2>

       <div className="features">
       <video width="50%" loop autoPlay muted >
                    <source src={CookieVideo} type="video/mp4"/>
                </video>
            <div className="benefits-container">
                    <section className='benefit'>
                <span><FontAwesomeIcon icon={faEgg} size="2xl" style={{color: "#CC886E",}} /></span>
                <div>
                    <h3>Fresh Ingredients</h3>
                </div>
            </section>
            <section className='benefit'>
                <span><FontAwesomeIcon icon={faKitchenSet} size="2xl" style={{color: "#000111",}} /></span>
                <div>
                    <h3>Unique Recipes</h3>
                </div>
            </section>
            <section className='benefit'>
                <span><FontAwesomeIcon icon={faCookieBite} size='2xl' style={{color: "#996666",}} /></span>
                <div>
                    <h3>A Love For Baking</h3>
                </div>
            </section>
            </div>
        </div>
        <img src={EaganCupcake} alt="delicious cupcake"/>

        <div className="review-section">
            <h2>What Our Customers Say</h2>

            <section className="user-review">
                <span className="avatar"><FontAwesomeIcon icon={faUser} size="xl" style={{color: "#111111", padding: '1.1rem'}} /></span>
                <p>-Fatuma A</p>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                </div>

                <p className="comment"><span className="paranth-1">“</span>I had the opportunity to try some of the baked goods from Umm Yahya bakery. I tried the chocolate chip cookies and tres leches, and I was pleased with how delicious they tasted. I would recommend everyone to try!<span className="paranth-2">”</span></p>
            </section>

            <section className="user-review">
                <span className="avatar"><FontAwesomeIcon icon={faUser} size="xl" style={{color: "#111111", padding: '1.1rem'}} /></span>
                <p>-Halima S</p>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                </div>

                <p className="comment"><span className="paranth-1">“</span>If there's a bakery spot you MUST try in the metro area, this place is IT. The tres leches cake absolutely delivers on the hype. The cookies are fresh, delicious, and come in a ton of flavors. Do yourself a favor and visit this magical bakery spot.<span className="paranth-2">”</span></p>
            </section>

            <section className="user-review">
                <span className="avatar"><FontAwesomeIcon icon={faUser} size="xl" style={{color: "#111111", padding: '1.1rem'}} /></span>
                <p>-Hind A</p>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                    <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#ffd700", margin: " 0 .3rem"}} />
                </div>

                <p className="comment"><span className="paranth-1">“</span>Umm Yahya's goods are made with special love for baking, feeding others, and with mastery over the recipes. After trying her cookies, I found myself reaching for more and more until they were all gone. You will not be dissapointed with her baked goods.<span className="paranth-2">”</span></p>
            </section>
        </div>

        <div style={{ 
            background: `url(${Cake}) center/cover no-repeat`,
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem'}}
            ><Link to="/Order"><button className='cta2'>ORDER NOW</button></Link>
        </div>
    </div>
    )
}