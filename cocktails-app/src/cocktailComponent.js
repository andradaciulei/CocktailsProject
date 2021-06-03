import { React } from 'react';
import './cocktailComponent.css';
import { Link } from 'react-router-dom';


const CocktailComponent = (props) => {
    return (
        <div className="cocktail-container">
            <img className="small-image" src={props.strDrinkThumb} alt="Cocktail"></img>
            <p>{props.strDrink}</p>
            <Link to={`/cocktails/${props.category}/details/${props.idDrink}`} className="btn btn-primary btn-details">
                See more details
            </Link>
        </div>
    );

}

export default CocktailComponent;