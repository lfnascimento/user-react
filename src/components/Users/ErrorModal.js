import styled from "styled-components";

const Modal = styled.div`
  display: ${(props) =>
    props.opened ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

/* Modal Content/Box */
const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;
const ConfirmButton = styled.button`
  background-color: cadetblue;
  border-radius: 3%;
  width: 10%;
`;

const ErrorModal = (props) => {
  const closeModalClickingOutside = (e) => {
    if (e.target.id === 'error-modal') {
      props.onCloseModal();
    }
  }

  return (
    <Modal id='error-modal' onClick={ closeModalClickingOutside } opened={ props.openModal }>
      <ModalContent>
        <p>{ props.errorMsg }</p>
        <ConfirmButton onClick={ props.onCloseModal }>Ok</ConfirmButton>
      </ModalContent>
    </Modal>
  );
};

export { ErrorModal };
