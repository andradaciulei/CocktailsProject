import { React, Component } from 'react';
import CocktailCategoryComponent from './cocktailCategoryComponent';
import COCKTAIL_CATEGORIES from './constants/cocktail-categories-list'
import MenuComponent from './menuComponent';
import './mainPageComponent.css';

class MainPageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cocktailCategoriesList: COCKTAIL_CATEGORIES
        }
    }

    render() {
        let tabs = [];
        let cocktails = [];
        this.state.cocktailCategoriesList.forEach(cocktailCategory => {
            tabs.push(cocktailCategory.name);
            cocktails.push(
                <CocktailCategoryComponent {...cocktailCategory} />
            );
        });

        return (
            <div className="main-container">
                <h1 className="page-title">Cocktails </h1>

                <MenuComponent tabs={tabs} />

                <input placeholder="Search by name" />
                {cocktails[0]}
            </div>
        );
    }
}

export default MainPageComponent;