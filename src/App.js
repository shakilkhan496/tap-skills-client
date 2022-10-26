import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/route';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
