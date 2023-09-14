import { useState } from "react";

const loginState = {
  email: "",
  password: "",
};

const Formulario = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        name="email"
        type="email"
        onChange={handleChange}
        value={form.email}
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={form.password}
      />

      <button onChange={form}>enviar</button>
    </div>
  );
};

export default Formulario;
