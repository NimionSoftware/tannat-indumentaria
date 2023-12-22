import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import MainWall from './components/MainWall';
import AdminInterface from './components/admin-interface/AdminInterface';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={MainWall}/>
        <Route path='/admin' exact Component={AdminInterface}/>
      </Routes>
    </Router>

    )
  }


export default App;
