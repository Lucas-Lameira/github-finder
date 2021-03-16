import {Fragment ,useContext,useEffect} from 'react';
import {FiCheck, FiX, FiUser, FiMapPin} from 'react-icons/fi';
import {FaBuilding, FaBlog} from 'react-icons/fa';
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos';

import styles from '../../styles/components/User.module.css';


function User ({match }) {
  const githubContext = useContext(GithubContext)
  const {getUser, user, loading, getUserRepos, repos} = githubContext
  
  useEffect(() => {
    let parametro = String(match.params.login)
    
    parametro = parametro.replace(':', '');
    getUser(parametro); //got that from path on Route in app.js path=/user/:login
    getUserRepos(parametro);
  }, [])//leave it empty to run only 1 time per reload

  const {
    name,
    avatar_url,
    location, 
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = user;

  loading && <Spinner />

  return(    
    <main className={styles.userContainer}>
      <section className={styles.userProfileInfo}>
        <div className={styles.userBasicInfo}>
          <img 
            src={avatar_url} 
            alt="Avatar image from girhub"             
          />          
          <h1>{name}</h1>
          <span>
            <a href={html_url}>
              <div>
                <FiUser />
              </div>
              <p> {login}</p>
            </a>
          </span>
        </div>

        <div className={styles.userGeneralInfo}>     

        {
          hireable ? (
            <span className={styles.hirable}style={{background: '#93FF61'}}>
              Hirable: <FiCheck color="green" />            
            </span>     
          ):(
            <span className={styles.hirable} style={{background: 'rgb(182, 35, 35)'}}>
              Hirable: <FiX  color="white" size={28}/>
            </span>     
          )
        }
                          
          {bio && (
            <div className={styles.bio}>
              <h3>Bio</h3>
              <p>{bio}</p>
            </div>
          )}
     
          <ul>            
            <li>
              {company && (                
                <strong className={styles.iconBlock}>
                  <FaBuilding />
                  <p>
                    {company}
                  </p>
                </strong>                
              )}
              <strong className={styles.iconBlock}>
                <FiMapPin />
                <p>
                  {location}            
                </p>
              </strong>            
            </li>

            <li >
              {blog && (              
                <strong className={styles.blogItem}>
                  <FaBlog />        
                  <a href={blog}>{blog}</a>                
                </strong>
              )}
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.userNumberInfo}>
        <div className={styles.userFollowers}>
          Followers: {followers}
        </div>

        <div className={styles.userFollowing}>
          Following: {following}
        </div>

        <div className={styles.userPublicRepos}>
          Public Repos: {public_repos}
        </div>

        <div className={styles.userPublicGists}>
          Public Gists: {public_gists}
        </div>
      </section>

      <h4>Latest repositories</h4>          
      <section className={styles.reposContainer}>
        <Repos repos={repos} />
      </section>
    </main>
  );
}

User.prototype = {  
  match: PropTypes.string.isRequired
}

export default User


/* 


*/