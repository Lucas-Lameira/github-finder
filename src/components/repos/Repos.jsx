import RepoItem from "./RepoItem"

export default function Repos ({repos}) {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
}