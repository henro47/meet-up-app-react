import classes from './Card.module.css';
//props.children wraps content inside this component
function Card(props){
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default Card;