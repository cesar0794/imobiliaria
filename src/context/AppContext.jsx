import { createContext, useEffect, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "./utils";

export const AppContext = createContext({});

export const AppContexProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = getLocalStorage();
    if (user) {
      setUser(user);
      console.log("usuario logado!", user);
    }
  }, []);

  async function authenticate(email, password) {
    Api.post("session", { email, password })
      .then((response) => {
        const { user, token, message } = response.data;

        // Se não tiver token, considera erro de autenticação
        if (!token || !user) {
          toast.error(message || "Usuário ou senha incorretos");
          return;
        }

        const payload = { token, email: user.email };
        setUser(payload);
        setLocalStorage(payload);
        toast.success("Login realizado com sucesso!");
        window.location.href = "/perfil";
      })
      .catch(() => {
        console.log("Erro:App Error");
      });
  }

  function logout() {
    setUser(null);
    setLocalStorage(null);
  }
  return (
    <AppContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AppContext.Provider>
  );
};
