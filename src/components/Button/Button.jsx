import { Link } from 'react-router-dom'
import classes from './Button.module.css'

const Button = ({ children, onClick, to }) => {
    return <Link to={to} className={classes.link}><button onClick={onClick} className={classes.boton}>{children}</button></Link>
}

export default Button