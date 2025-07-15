// components/ToastHandler.jsx
import { Toaster } from 'react-hot-toast';

const ToastHandler = () => {
  return <Toaster position="top-right" toastOptions={{ duration: 3000 }} />;
};

export default ToastHandler;
