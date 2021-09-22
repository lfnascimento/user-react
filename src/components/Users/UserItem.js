const UserItem = (props) => {
  const { name, age } = props.user;

  return(<li>
    <div>
      Username: {name}
    </div>
    <div>
      Age: {age}
    </div>
  </li>)
}

export { UserItem }