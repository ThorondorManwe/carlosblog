import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../css/about.module.css';

const About = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.main__sec}>
          <h2>Sobre mí</h2>
          <h3>
            Seré breve en esta sección 🤖 
          </h3>

          <p>
            Comencé a estudiar desarrollo web en <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">The Odin Project</a> y desde entonces he realizado algunos proyectos pequeños. Aunque esta plataforma es genial 
            pronto me vi pasando de un curso a otro para entender lo que pedían en los proyectos, así es como llegué 
            a <a href="https://wesbos.com/courses" target="_blank" rel="noopener noreferrer"> los cursos de Wes Bos</a> (es de lo mejor, gracias a él pude entender
            temas como arrow functions y callback functions), y algunos cursos en Udemy.
          </p>

          <p>
            Wes Bos sugiere al final de su serie 
            <a href="https://youtube.com/playlist?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH" target="_blank" rel="noopener noreferrer">JavaScript30</a> que hablemos de lo aprendido. Después supe que ésta era una técnica para reforzar el conocimiento: 
            estudiar algo y después enseñar a otros nos ayuda a aprender mejor así que esta es la razón de mi blog. Aquí hablaré de los temas que voy aprendiendo
             (al tiempo que escribo esto estoy en camino de aprender ReactJS) y pronto haré una sección que me servirá como portafolio.
          </p>

          <p>
            Aunque actualmente estoy desempleado he encontrado que mi estudio autodidacta del desarrollo web puede potencialmente cambiar mi futuro y el de mis seres queridos. Aunque ésa es una
            pequeña esperanza que guardo para mi vida profesional, me parece que se programador es algo que te empodera y creo que es lo más parecido a tener superpoderes en nuestra sociedad.
          </p>

          <p>
            Éste es mi segundo blog. El primero lo hice como práctica para aprender WordPress (actualmente me gano la vida como implementador freelance de este CMS), 
            así que si te interesan las historias de ciencia ficción, cine de terror, historias paranormales y demás parafernalia te recomiendo que me visites 
            en <a href="https://www.ranghul.com/" target="_blank" rel="noopener noreferrer">ranghul.com</a>.
          </p>

        </div>
      </div>
    </Layout>
  )
}
export default About