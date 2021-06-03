// import { React, Component } from 'react';
import './cocktailDetailsComponent.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Link, useParams } from 'react-router-dom';

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailDetailsComponent = (props) => {
    console.log("props CocktailDetailsComponent", props);
    const id = props.match.params.id;
    const category = props.match.params.category;
    const [cocktailDetails, setCocktailDetails] = React.useState(null);
    useEffect(() => {
        axios.get(`${url}${id}`)
            .then(res => { console.log("result", res.data.drinks[0]); setCocktailDetails(res.data.drinks[0]); })
    });

    return (
        <div>
            <div className="separator-line">
                <span>
                    Details
                    </span>
            </div>
            <button>
                <Link to={`/cocktails/${category}`}>
                    Back
                </Link>
            </button>

            <div className="details-container">
                <img className="medium-image" src={cocktailDetails?.strDrinkThumb} alt="Cocktail" width="500" height="500"></img>
                <div className="right-container">
                    <p> {cocktailDetails?.strDrink} </p>
                    <p> {cocktailDetails?.idDrink} </p>
                </div>
            </div>
        </div>
    );
}

export default CocktailDetailsComponent;