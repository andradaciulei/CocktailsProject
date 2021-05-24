import { React, Component } from 'react';
import './cocktailDetailsComponent.css';
class CocktailDetailsComponent extends Component {

    showCocktailDetails() {
        this.props.onClick(this.props, 'name');
    }

    render() {
        return (
            <div>
                <div className="separator-line">
                    <span>
                        Details
                    </span>
                </div>
                <button onClick={this.props.hideClicked}>
                    Hide details
                </button>
                <div className="details-container">
                    <img className="medium-image" src={this.props.image} alt="Cocktail" width="500" height="500"></img>
                    <div className="right-container">
                        <p> {this.props.name} </p>
                        <p> {this.props.id} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CocktailDetailsComponent;