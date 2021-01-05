import './Button.css';

const Button = ({ children, color, dark, disabled, ...otherProps }) =>
  <button className={'Button ' + color + (dark ? ' dark' : '') + (disabled ? ' disabled' : '')} {...otherProps}>
    {children}
  </button>
;

export default Button;
