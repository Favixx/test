"use client";
import React, { useState } from "react";
import { Context } from "./context";

type Props = {
  children: JSX.Element;
};

const Provider = ({ children }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const handleSubmit = () => {
    console.log(`name: ${name} email: ${email} phone:${phone}'}`);
    setName("");
    setEmail("");
    setPhone("");
  };

  const payload = {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    handleSubmit,
  };
  return <Context.Provider value={payload}>{children}</Context.Provider>;
};

export default Provider;
