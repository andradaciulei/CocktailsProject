import { React, Component } from 'react';
import CocktailComponent from './cocktailComponent';
import CocktailDetailsComponent from './cocktailDetailsComponent';
import CocktailBlockComponent from './cocktailBlockComponent';
import './cocktailCategoryComponent.css';

class CocktailCategoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastChildClicked: null,
            clicked: 'none',
        }
        this.handleCocktailClicked = this.handleCocktailClicked.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }


    handleCocktailClicked(childClicked, clickedValue) {
        this.setState({
            lastChildClicked: childClicked,
            clicked: clickedValue
        });
    }

    handleReset() {
        this.setState({
            lastChildClicked: null,
            clicked: 'none'
        });
    }

    render() {
        const cocktailsList = this.props.cocktailsList.map(
            cocktail => <CocktailComponent
                onCocktailClicked={this.handleCocktailClicked}
                key={cocktail.id}
                {...cocktail} />
        );
        return (
            <div>
                {
                    this.state.clicked == 'name' &&
                    <CocktailDetailsComponent
                        hideClicked={this.handleReset} {...this.state.lastChildClicked} />

                }
                {
                    this.state.clicked == 'image' &&
                    <CocktailBlockComponent
                        backClicked={this.handleReset} {...this.state.lastChildClicked} />

                }
                {
                    (this.state.clicked == 'none' || this.state.clicked == 'name') &&
                    <div className="main-container">
                        <div className="separator-line">
                            <span>
                                {this.props.name}
                            </span>
                        </div>
                        <div className="cocktails-list-container">
                            {cocktailsList}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default CocktailCategoryComponent;