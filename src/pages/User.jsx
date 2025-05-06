import { useNavigate } from 'react-router-dom';
import { register } from '../api/clienteApi';
import UserForm from '../components/UserForm';

export default function User() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await register(data);
    navigate('/login');
  };

  return <UserForm onSubmit={handleSubmit} defaultValues={{ email: '', password: '' }} />;
}