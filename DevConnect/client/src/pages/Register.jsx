// pages/Register.jsx
import { useState } from 'react';
import { registerUser } from '../services/authService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      toast.success('Account created! You can now login.');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
        <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="bg-green-500 text-white w-full py-2 rounded mt-4 hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
