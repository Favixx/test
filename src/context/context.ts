"use client";
import { createContext } from "react";

type STATE_PROPS = {
  name: string;
  setName: ((value: string) => void) | null;
  email: string;
  setEmail: ((value: string) => void) | null;
  phone: string;
  setPhone: ((value: string) => void) | null;
  handleSubmit: (() => void) | null;
};

const INITIAL_STATE = {
  name: "",
  setName: null,
  email: "",
  setEmail: null,
  phone: "",
  setPhone: null,
  handleSubmit: null,
};

export const Context = createContext<STATE_PROPS>(INITIAL_STATE);
