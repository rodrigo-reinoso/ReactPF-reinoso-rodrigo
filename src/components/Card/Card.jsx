import classes from "./Card.module.css"


const Card = (prop) => {
    return (
        <div className={classes.contenedor}>
            <div className="card">
                <img src={prop.img} className="card-img-top" />
                <div className="card-body">
                    <h5>{prop.title} </h5>
                    <a href="#" className="btn btn-danger">Agregar</a>
                </div>
            </div>
        </div>
    )
}

export default Card