import { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [form, setForm] = useState({ title: "", location: "", price: "", description: "", images: [] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("/api/owner/add-property", form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Property Added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Location" onChange={e => setForm({ ...form, location: e.target.value })} />
      <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
      <input placeholder="Image URLs (comma)" onChange={e => setForm({ ...form, images: e.target.value.split(",") })} />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;
