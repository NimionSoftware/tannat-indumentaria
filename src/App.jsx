import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainWall from './components/MainWall';
// import AdminInterface from './components/admin-interface/AdminInterface';
import Context from './components/Context';
import NotAllowed from './components/NotAllowed';
import { useContext } from 'react';
import { providerContext } from './components/ProviderContextComponent';
import AdminNavRoutes from './components/routes/AdminNavRoutes';

function App() {

  const { rol } = useContext(providerContext);

  const AdminRoute = () => {
      return rol === 'SUPER_ADMIN' ? <AdminNavRoutes /> : <Navigate to='/admin/not-allowed' replace={true} />
  }

  return (
    <Router>
      <Context>
        <Routes>
          <Route path='/' element={<MainWall />} />
          <Route path='/admin/not-allowed' element={<NotAllowed />} />
          <Route path="/admin/*" element={<AdminRoute />} />
        </Routes>
      </Context>
    </Router>
  );
}

export default App;
