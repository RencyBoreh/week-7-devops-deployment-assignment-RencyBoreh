// App.jsx
import Navbar from './components/Navbar';
import ToastHandler from './components/ToastHandler';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className="bg-background min-h-screen text-gray-800">
      <ToastHandler />
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
