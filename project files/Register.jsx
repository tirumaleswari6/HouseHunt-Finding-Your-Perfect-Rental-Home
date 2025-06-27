import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "renter" });

  const registerHandler = async (e) => {
    e.preventDefault();
    await axios.post('/api/users/register', form);
    alert("Registered");
  };

  return (
    <form onSubmit={registerHandler}>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="renter">Renter</option>
        <option value="owner">Owner</option>
        <option value="admin">Admin</option>
      </select>
      <button>Register</button>
    </form>
  );
};

export default Register;
