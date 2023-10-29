"use client"

import React, { useContext } from 'react'
import { Context } from '@/context/context'

type Props = {}

const Inputs = (props: Props) => {
  const { name, setName, email, setEmail, phone, setPhone, handleSubmit } = useContext(Context);
  
  return (
    <div className="flex flex-col gap-y-2 w-fit text-black">
      <input
        type="text"
        value={name}
        onChange={(e) => setName && setName(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone && setPhone(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail && setEmail(e.target.value)}
      />
      <button
        className="bg-white/50"
        onClick={() => handleSubmit && handleSubmit()}
      >
        Click
      </button>
    </div>
  );
}

export default Inputs;