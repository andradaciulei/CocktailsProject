import { React, Component } from 'react';
import './cocktailComponent.css';

class CocktailComponent extends Component {
    handleClick = (valueClicked) => {
        this.props.onCocktailClicked(this.props, valueClicked);
    }

    render() {
        return (
            <div className="cocktail-container">
                <img className="small-image" onClick={() => this.handleClick('image')} src={this.props.image} alt="Cocktail"></img>
                <p onClick={() => this.handleClick('name')}>{this.props.name}</p>
            </div>
        );
    }
}

export default CocktailComponent;