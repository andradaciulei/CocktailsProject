import { React, Component } from 'react';
import './cocktailBlockComponent.css';
class CocktailBlockComponent extends Component {
    render() {
        return (
            <div className="block-container">
                <div className="info-cocktail">
                    <p> {this.props.name} </p>
                    <img src={this.props.image} alt="Cocktail"></img>
                </div>


                <button onClick={this.props.backClicked}>
                    Back
            </button>
            </div>
        );
    }
}

export default CocktailBlockComponent;