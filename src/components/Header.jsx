import './Header.css';
import M2iLogo from '../images/logo-m2I-V3.png';

const items = [
  { text: 'Accueil', href: '/' },
  { text: 'Contact', href: '/contact' },
];

const NavItem = ({ text, href }) =>
  <li className="Header-navitem">
    <a href={href}>
      {text}
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
            (item, index) => <NavItem key={index} text={item.text} href={item.href} />
          )
        }
      </ul>
    </nav>
  </header>
;

export default Header;
