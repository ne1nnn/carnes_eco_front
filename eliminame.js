import "./register-form.css";
import logo from "../../../../../assets/img/logo.png";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Notify } from "../../../../shared/components/notify/notify";
import { GlobalContext } from "../../../../context/global.context";

export default function RegisterForm() {
  //global
  const { setIsLoading } = useContext(GlobalContext);
  const { isLoggedIn } = useContext(GlobalContext);
  const { updateDataSession } = useContext(GlobalContext);
  const navigate = useNavigate();
  const notify = new Notify();

  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, [isLoggedIn, navigate]);

  const goLogin = () => {
    navigate("/login");
  };

  //form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !email || !password) {
      notify.createToast("danger", "Debe rellenar todos los campos");
      setIsLoading(false);
      return;
    }
    if (!passwordsMatch) {
      notify.createToast("danger", "Contraseñas no coinciden");
      setIsLoading(false);
      return;
    }

    axios
      .post(`${process.env.REACT_APP_ENV === "DEV" ? process.env.REACT_APP_API_DEV : process.env.REACT_APP_API_PROD}user/register`, {
        name,
        email,
        password,
      })
      .then(
        (response) => {
          if (response.data.status === 1) {
            notify.createToast("success", "Register ok");
            const user = response.data.data;
            updateDataSession(user);
          } else {
            notify.createToast("danger", `${response.data.message}`);
          }
        },
        (error) => {
          console.log(error);
          notify.createToast("danger", "Login failed");
        }
      )
      .finally(() => {
        setIsLoading(false);
      }); // up
  };

  return (
    <div className="animated zoomIn fast login-form-container div-trans">
      <form onSubmit={handleSubmit}>
        <h2 className="mbot20">Registro</h2>
        <img src={logo} alt="logo" className="login-logo" />
        <div className="form-group">
          <label className="label">Nombre</label>
          <input type="text" className="form-control nm" placeholder="Ingrese su nombre" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">Email</label>
          <input type="email" className="form-control nm" placeholder="ejemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">Contraseña</label>
          <input
            type="password"
            className="form-control nm"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control nm"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordsMatch(e.target.value === password);
            }}
          />
          {!passwordsMatch && <span className="error-text">Las contraseñas no coinciden</span>}
        </div>
        <button className="btn btn-primary btn-rounded btn-xs mtop10 mbot10">Registrarme</button>
      </form>
      <p className="text-small texto-link" onClick={goLogin}>
        ¿Ya tienes una cuenta? Logeate aquí
      </p>
    </div>
  );
}
