const UserForm = (props) => { 
  const onClickButton = (e) => {    
    e.preventDefault();
    const nameInput = document.getElementById('user_name');
    const ageInput = document.getElementById('user_age');
    props.onAddUser(nameInput.value, ageInput.value);
  }

  return(
    <form>
      <div>
        <label>Username</label>
        <input id='user_name' type='text'/>
      </div>
      <div>
        <label>Age (Years)</label>
        <input id='user_age' type='number'/>
      </div>
      <button onClick={ onClickButton }>Add User</button>
    </form>
  )
}

export { UserForm };