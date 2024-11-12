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

                    <button className={Style.button} id='button'>GET STARTED </button>
                </div>

                <div className={Style.container2} id="container2">
                    <img src={resturant} className={Style.Restaurant_Img}   alt=" resturant" />
                </div>

            </div>
                <div className={Style.mainFooter}></div>
        </main>
    );
}

export default Main;
