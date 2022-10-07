import { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/registerModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const RegisterModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [newUser, setNewUser] = useState(() => {
    const defaultNewUser = [];
    let storeUsers = JSON.parse(localStorage.getItem("users"));
    return storeUsers ? storeUsers : defaultNewUser;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(newUser));
  }, [newUser]);

  const [regValues, setRegValues] = useState({
    first: "",
    last: "",
    email: "",
    pass: "",
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setRegValues({
      ...regValues,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newRegister = [...newUser];
    newRegister.push(regValues);
    setNewUser(newRegister);
    setIsOpen(false);
    console.log("Array Users", newRegister);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="Modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <form onSubmit={onSubmit}>
        <div className="cont-login">
          <div class="mb-3">
            <h3>CREATE YOUR ACCOUNT</h3>
            <input
              type="text"
              className="first"
              class="form-control"
              placeholder="First Name"
              name="first"
              onChange={onInputChange}
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              className="last"
              class="form-control"
              placeholder="Last Name"
              name="last"
              onChange={onInputChange}
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              className="email"
              class="form-control"
              placeholder="Email Adress"
              name="email"
              onChange={onInputChange}
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="pass"
              onChange={onInputChange}
            />
          </div>          
          <button type="submit" class="btn btn-secondary p-0">
            Create Account
          </button>
        </div>
      </form>
    </Modal>
  );
};
