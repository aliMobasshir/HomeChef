import React from 'react'
import style from './KnowMoreDiets.module.css'

const KnowMoreDiets = () => {
    return (
        <div className={style.dietsInfo}>
            <div className={style.dietItem}><h1>Gluten Free</h1>
                <p>Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).</p></div>

            <div className={style.dietItem}><h1>Ketogenic</h1>
                <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p></div>

            <div className={style.dietItem}><h1>Vegetarian</h1>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p></div>

            <div className={style.dietItem}><h1>Lacto-Vegetarian</h1>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p></div>

            <div className={style.dietItem}><h1>Ovo-Vegetarian</h1>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</p></div>

            <div className={style.dietItem}><h1>Vegan</h1>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
            </div>
            <div className={style.dietItem}><h1>Pescetarian</h1>
                <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p></div>

            <div className={style.dietItem}><h1>Paleo</h1>
                <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p></div>

            <div className={style.dietItem}><h1>Primal</h1>
                <p>Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.</p></div>

            <div className={style.dietItem}><h1>Low FODMAP</h1>
                <p>FODMAP stands for "fermentable oligo-, di-, mono-saccharides and polyols". Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products).</p>
            </div>
            <div className={style.dietItem}><h1>Whole30</h1>
                <p>Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.</p></div>

        </div>
    )
}

export default KnowMoreDiets;