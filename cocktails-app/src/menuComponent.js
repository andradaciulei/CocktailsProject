import './menuComponent.css';
import { Link } from 'react-router-dom';

const MenuComponent = (props) => {
    return <div className="menu">
        <div className="tab">
            <Link to={`/cocktails/alcoholic`}> Alcoholic </Link>
        </div>
        <div className="tab">
            <Link to={`/cocktails/non-alcoholic`}> Non-lcoholic </Link>
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
    </div >;
}

export default MenuComponent;