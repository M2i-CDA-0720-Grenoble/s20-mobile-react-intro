import './Header.css';
import M2iLogo from '../images/logo-m2I-V3.png';

const items = [
  { text: 'Accueil', href: '/' },
  { text: 'Contact', href: '/contact' },
];

const NavItem = ({ href, children }) =>
  <li className="Header-navitem">
    <a href={href}>
      {children}
    </a>
  </li>
;

const Header = () =>
  <header className="Header">
    <img className="Header-logo" src={M2iLogo} alt="Logo du site" />
    <nav>
      <ul className="Header-navitem-list">
        {
          items.map(
            (item, index) =>
              <NavItem key={index} href={item.href}>
                {item.text}
              </NavItem>
          )
        }
      </ul>
    </nav>
  </header>
;

export default Header;
