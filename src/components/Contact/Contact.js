import React from "react";
import * as styles from "../../css/contact.module.css";



const ContactComp = () => {
    return (
        <section className={styles.contact}>
            <h3>Contacto</h3>
            <p className={styles.center}>Deja unas líneas si quieres que charlemos sobre código, gestores de contraseñas, Linux 
            o cualquier otro tema relacionado con tecnología 🤖 </p><br />
            <div className={styles.center}>
                <form action="https://formspree.io/f/mvoldqab" method="POST" className={styles.form}>
                    <div>
                        <label htmlFor="name">nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="tu nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="email@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Tu mensaje</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            className={styles.formControl}
                            placeholder="Hola, joven programador..."
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="enviar"
                            className={styles.submit}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactComp;