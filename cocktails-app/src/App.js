import './menuComponent';
import CocktailsComponent from './cocktailsComponent';
import CocktailDetailsComponent from './cocktailDetailsComponent';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <h1 className="page-title">Cocktails </h1>
      <BrowserRouter>
        <div className="menu">
          <div className="tab">
            <Link to={`/cocktails/alcoholic`}> Alcoholic </Link>
          </div>
          <div className="tab">
            <Link to={`/cocktails/non-alcoholic`}> Non-alcoholic </Link>
          </div>
          <div className="tab">
            <Link to={`/cocktails/ordinary-drink`}> Ordinary Drink </Link>
          </div>
          <div className="tab">
            <Link to={`/cocktails/cocktail-glass`}> Cocktail glass </Link>
          </div>
          <div className="tab">
            <Link to={`/cocktails/champagne-flute`}> Champagne flute </Link>
          </div>
        </div >
        <Switch>
          <Route path={`/cocktails/:category/details/:id`} component={CocktailDetailsComponent}></Route>
          <Route path="/cocktails/:category" component={CocktailsComponent} />
          <Route />
        </Switch>
      </BrowserRouter>
      <input placeholder="Search by name" />
    </div>

  );
}

export default App;
