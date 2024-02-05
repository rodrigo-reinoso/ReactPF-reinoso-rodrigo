import { useEffect, useState } from 'react'
import classes from './OrderForm.module.css'
import { useNotification } from '../../Notification/NotificationService'

const OrderForm = ({ onCreate }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { showNotification } = useNotification()
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        document.title = 'ONE PIECE | Generar Orden'
    }, [])

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormSubmitted(true)

        if (!name || !phone || !email) {
            showNotification('error', 'Debe completar todos los campos')
            return
        }

        const userData = {
            name,
            phone,
            email,
        };

        onCreate(userData)
    }

    return (
        <>
            <section className='container'>
                <form className={classes.form} onSubmit={handleSubmit}>

                    <legend>Completa todos los campos para generar la orden</legend>

                    <div className={classes.container}>
                        <div className={classes.datos}>
                            <label>Nombre:</label>

                            <input type="text" placeholder=" Tu Nombre" value={name} onChange={handleNameChange} />
                        </div>

                        <div className={classes.datos}>
                            <label>Teléfono:</label>
                            <input type="tel" pattern="[0-9]*" placeholder=" Tu Teléfono" value={phone} onChange={handlePhoneChange} />
                        </div>

                        <div className={classes.datos}>
                            <label>E-mail:</label>
                            <input type="email" placeholder=" Tu E-mail" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>
                    <div className={classes.datos}>
                    <input type="submit" value='Generar Orden' className={classes.enviar} />
                    </div>

                </form>
            </section>
        </>
    )
}

export default OrderForm