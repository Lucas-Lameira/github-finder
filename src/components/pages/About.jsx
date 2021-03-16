import {Fragment} from 'react';
import {FiInstagram, FiGithub, FiTwitter, FiFacebook, FiLinkedin} from 'react-icons/fi';
import {FaBug} from 'react-icons/fa'
import styles from '../../styles/components/About.module.css';

export default function About (){
  return(
    <Fragment>
      <main className={styles.aboutContainer}>      
        <h1>About</h1>
        <p>
          Github finder é uma plataforma para pesquisa de usuários no 
          <a href="https://github.com/" target="_blank">github</a>.       
          Basta digitar o nome de um usuario e o github finder retorna uma lista de usuários relativos a busca.        
        </p>

        <h2 className={styles.references}>References</h2>
        <a href="https://www.udemy.com/course/modern-react-front-to-back/" className={styles.courseLink}>
         <strong> Udemy course - Traversy media</strong>
        </a>      

        <h2>
          Tecnologias usadas no desenvolvimento:
        </h2>
        <ul className={styles.tecnologies}>
          <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">html</a></li>
          <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">css</a></li>
          <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">javascript</a></li>
          <li><a href="https://pt-br.reactjs.org/">React</a></li>
          <li><a href="https://github.com/axios/axios">axios</a></li>
        </ul>        
      </main>
      <footer>                         
        <p>Version 1.0.1</p>
        <ul>
          <li><a href="https://github.com/Lucas-Lameira"><FiGithub size={28} color='white'/></a></li>
          <li><a href="www.linkedin.com/in/lucas-lameira-dev"><FiLinkedin size={28} color='white'/></a></li>
          <li><a href="https://www.facebook.com/lucasslameira"><FiFacebook size={28} color='white'/></a></li>
          <li><a href="https://twitter.com/lucasoldxX"><FiTwitter size={28} color='white'/></a></li>
          <li><a href="https://www.instagram.com/lucas__lameira/"><FiInstagram size={28} color='white'/></a></li>
        </ul>       

        <p>&#64;Lucas-Lameira</p>   

        <a 
          href="https://github.com/Lucas-Lameira/github-finder/issues" 
          title="report a bug" 
          target="_blank"
          className={styles.bugIconReport}
        >
          <FaBug color="white" size={20}/>
        </a>          
      </footer>
    </Fragment>
  )
}