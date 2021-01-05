import './Button.css';

const Button = ({ children, color, dark }) =>
  <button className={'Button ' + color + (dark ? ' dark' : '')}>
    {children}
  </button>
;

export default Button;
