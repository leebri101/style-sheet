import { Dialog, DialogPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, Heart, Globe } from 'lucide-react';
import './Header.css';

const Header= () => {
    const[mobileMenuOpen, setMobileMenuOpen] = useState(false)
    {/* 
    const cartItemsCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0))*/}
    const navigation = [
        { name: 'WOMEN', href: '/women' },
        { name: 'MENs', href: '/mens' },
        { name: 'KIDS', href: '/kids' },
    ]

    return(
        <header className="header">
            <nav className="header-nav" aria-label="Global">
                <div className="header-logo-container">
                    <Link to="/" className="header-logo">
                    <span className="sr-only">Style</span>
                    <div>-Sheet</div>
                    </Link>
                </div>
                <div className="mobile-menu-button-container">
                    <button type="button" className="mobile-menu-button" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open Main Menu</span>
                        <Menu className="menu-icon" aria-hidden="true" />
                    </button>
                </div>
                <div className="header-links">
                    {navigation.map((item) => (
                        <Link
                        key={item.name}
                        to={item.href}
                        className="header-link"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/login" className="header-link">
                    Login 
                    </Link>
                    <Link to="/register" className="header-link">
                    Register
                    </Link>
                </div>
                <div className="header-icons">
                    <button className="header-icon-button">
                        <Globe className="header-icon"/>
                    </button>
                    <button className="header-icon-button">
                        <Globe className="header-icon"/>
                    </button>
                    <Link to="/cart" className="header-icon-button-cart-icon-container">
                    {/* Shopping Cart indicator to display item count 
                    <ShoppingCart className="header-icon" />
                    {cartItemsCount > 0 && 
                        <span className="cart-count">
                            {cartItemsCount}
                        </span>}*/}
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="mobile-menu" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}/>
                <div className="fixed inset-0 z-10">
                    <DialogPanel className="mobile-menu-panel"/>
                    <div className="flex items-center justify-between">
                        <Link to="/" className="header-logo">
                            <span className="sr-only">Style - </span>
                            <div>SHEET</div>
                        </Link>
                        <button type="button" className="header-mobile-menu-close-button" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close Menu</span>
                            <Menu className="menu-icon" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mobile-menu-content">
                        <div className="mobile-menu-links">
                            {navigation.map((item) => (
                                <Link key={item.name} to={item.href} className="mobile-link-menu">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
        </header>
    )
}
