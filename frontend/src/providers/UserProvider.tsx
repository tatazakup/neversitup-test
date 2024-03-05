"use client";
import { createContext } from "@/utils/CreateContext";
import { LocalStorageUtil } from "@/utils/LocalStorage";
import { ReactNode, useState } from "react";

interface UserContext {
  token: string;
  onLogin: (token: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}
const [Provider, useContext] = createContext<UserContext>();

const UserProvider = (props: UserProviderProps) => {
  const { children } = props;

  const [token, setToken] = useState<UserContext["token"]>("");

  const onLogin: UserContext["onLogin"] = (token) => {
    setToken(token);
    LocalStorageUtil.setItem("TOKEN", token);
  };

  const userValue = {
    token,
    onLogin,
  };

  return <Provider value={userValue}>{children}</Provider>;
};

export { UserProvider, useContext as useUserContext };
