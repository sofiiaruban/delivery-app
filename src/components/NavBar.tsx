import {Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return ( 
    <ul>
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        <li>
            <Link to="/cart">Shopping Cart</Link>
        </li>
    </ul>)
 }
 export default NavBar