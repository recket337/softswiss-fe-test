import './BurgerMenu.scss';

function BurgerMenu({ children }) {
    return <div className=''>
        <input type="checkbox" id="burger-toggle" className='burger-toggle' />
        <label htmlFor="burger-toggle" className="burger-icon"/>
        <div className="menu">
            {children}
        </div>
    </div>;
}

export default BurgerMenu;
