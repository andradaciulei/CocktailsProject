import './menuComponent.css';

const MenuComponent = (props) => {
    const menuTabs = props.tabs.map(
        tabTitle => <div className="tab"> {tabTitle} </div>
    );

    return <div className="menu">
        {menuTabs}
    </div>;
}

export default MenuComponent;