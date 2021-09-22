import { UserItem } from './UserItem';

const UserList = (props) => {
  return(<ul>
    { props.users.map(user => <UserItem key={user.id} user={user}/> ) }
  </ul>)
}

export { UserList }