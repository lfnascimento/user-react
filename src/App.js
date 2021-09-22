import { useState } from 'react';
import { UserForm } from './components/Users/UserForm';
import { UserList } from './components/Users/UserList';
import { nanoid } from 'nanoid';
import { ErrorModal } from './components/Users/ErrorModal';

function App() {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const closeModalHandler = () => {
    setOpenModal(false);
    setErrorMsg([]);
  }

  const addUserHandler = (name, age) => {
    let errors = []
    setErrorMsg([]);
    if (Number.isInteger(parseInt(age)) && parseInt(age) >= 0) {
      const newUser = { name, age, id: nanoid() }
      setUsers((prevUsers) => [...prevUsers, newUser])
    } else {
      errors.push('Invalid age');
      setOpenModal(true);
    }
    setErrorMsg(errors);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <UserForm onAddUser={addUserHandler}/>
      <UserList users={users}/>
      <ErrorModal openModal={openModal} onCloseModal={closeModalHandler} errorMsg={errorMsg}/>
    </div>
  );
}

export default App;
