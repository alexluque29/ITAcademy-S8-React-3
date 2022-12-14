import { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/loginModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-50%, -50%)",
  },
};

export const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [logins, setLogins] = useState(() => {
    const defaultlLogin = [];
    let storeLogins = JSON.parse(localStorage.getItem("logins"));
    return storeLogins ? storeLogins : defaultlLogin;
  });

  useEffect(() => {
    localStorage.setItem("logins", JSON.stringify(logins));
  }, [logins]);

  const [logValues, setLogValues] = useState({
    email: "",
    pass: "",
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLogValues({
      ...logValues,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newLogin = [...logins];
    newLogin.push(logValues);
    setLogins(newLogin);
    setIsOpen(false);
    console.log("Array Logins", newLogin);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      ariaHideApp={false}
      style={customStyles}
      className="Modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <form onSubmit={onSubmit}>
        <div className="cont-login">
          <div className="mb-3">
            <h3>ENTER YOUR EMAIL ADRESS</h3>
            <input
              type="email"
              name="email"
              className="email form-control"
              placeholder="Email Adress"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Enter Your Password
            </label>
            <input
              type="password"
              name="pass"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-secondary p-0">
            Log in
          </button>
        </div>
      </form>
    </Modal>
  );
};
