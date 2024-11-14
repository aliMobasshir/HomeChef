import React from 'react';
import Style from './Main.module.css';
import resturant from './restaurant 1.svg'
const Main = () => {
    return (
        <main>
            <div className={Style.mainContainer} id="main-container">
                <div className={Style.textContainer} id='container1'>
                    <h1 className={Style.h1_text}>
                        FIND RECIPES
                        FOR THE FOOD
                        YOU LOVE
                    </h1>

                    <p className={Style.p_text} id='p_text'>Discover delicious recipes by browsing ingredients you have on hand,
                        or explore by category!</p>

                    <button className={Style.button} id='button'><span className={Style.buttonText}>GET STARTED</span> </button>
                </div>

                <div className={Style.container2} id="container2">
                    <img src={resturant} className={Style.Restaurant_Img} alt=" resturant" />
                </div>

            </div>

            <div className={Style.mainFooter}>
                <ul>
                    <li className={Style.featuresText}>Nutritional  Information</li>
                    <li className={Style.featuresPartition}></li>
                    <li className={Style.featuresText}>300+ Recipes</li>
                    <li className={Style.featuresPartition}></li>
                    <li className={Style.featuresText}>26+ Cuisines</li>
                    <li className={Style.featuresPartition}></li>
                    <li className={Style.featuresText}>Step-by-Step Guidance</li>
                </ul>
            </div>
        </main>
    );
}

export default Main;
