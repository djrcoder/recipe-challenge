import React, { useState } from 'react';
import '../App.css';

const customData = require('../data/ingredients.json');
const ingredientArray = [];

// Define limits for randomNum function
const minimum = 0;
const maximum = 1000;

// set limit for number of results
const recipeSize = 8;

function randomNum(minimum, maximum) {
    const rand = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
    return rand;
}

export default function FoodList(props) {



    const listSize = props.sizeOfList

    for (let i = 0; i < listSize; i++) {
        ingredientArray.push(customData[randomNum(minimum, maximum)].ingredient)
    }




    console.log(props.sizeOfList)


    return (


        ingredientArray.map(food => (
            <div className="Ingredients" key={food}>{food}</div>
        ))


    );
}