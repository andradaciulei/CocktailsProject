import { React } from 'react';
import CocktailComponent from './cocktailComponent';
import './cocktailsComponent.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const urls = [
    {
        category: 'alcoholic',
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    },
    {
        category: 'non-alcoholic',
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    },
    {
        category: 'ordinary-drink',
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    },
    {
        category: 'cocktail-glass',
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
    },
    {
        category: 'champagne-flute',
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
    },

];

const CocktailsComponent = (props) => {
    const [cocktails, setCocktails] = useState([]);
    const category = props?.match?.params?.category;
    const url = urls.filter(item => item.category === props.match.params.category)[0].url;

    useEffect(() => {
        axios.get(url)
            .then(res => { setCocktails(res.data.drinks); });
    });

    const cocktailsList = cocktails.map(cocktail =>
        <CocktailComponent key={cocktail.idDrink} {...cocktail} category={category} />
    );

    return (<>{ cocktailsList }</>);

}

export default CocktailsComponent;