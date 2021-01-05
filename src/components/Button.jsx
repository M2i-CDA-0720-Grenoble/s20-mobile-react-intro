import './Button.css';

const Button = ({ children, color, dark, ...otherProps }) =>
  <button className={'Button ' + color + (dark ? ' dark' : '')} {...otherProps}>
    {children}
  </button>
;

export default Button;
