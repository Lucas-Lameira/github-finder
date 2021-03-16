import styles from '../../styles/components/RepoItem.module.css';

export default function RepoItem ({repo}) {
  return (
    <div className={styles.repoItemContainer}>
      <h3>
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a>
      </h3>
    </div>
  )
}