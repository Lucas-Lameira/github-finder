import {Fragment ,useContext,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {FiCheck, FiX} from 'react-icons/fi';
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos';

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
    <Fragment>
      <Link to="/" className="btn btn-light">Back to search</Link>
       <span>
        Hirable: {''}        
      </span>
      {hireable ? <FiCheck color="green"/> : <FiX  color="red"/>}
      
      <div className="card grid-2">
        <div className="all-center">
          <img 
            src={avatar_url} 
            alt="Avatar image from girhub" 
            className="round-img" 
            style={{width: '150px'}}
          />

          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>

        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}

          <a href={html_url} className="btn btn-dark my-1">
            Visit Github profile
          </a>

          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: {login}</strong>
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: {company}</strong>
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>
                    Blog: {' '}
                  </strong>
                  <a href={blog}>{blog}</a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-primary">
          Followers: {followers}
        </div>

        <div className="badge badge-success">
          Following: {following}
        </div>

        <div className="badge badge-light">
          Public Repos: {public_repos}
        </div>

        <div className="badge badge-dark">
          Public Gists: {public_gists}
        </div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
}

User.prototype = {  
  match: PropTypes.string.isRequired
}

export default User