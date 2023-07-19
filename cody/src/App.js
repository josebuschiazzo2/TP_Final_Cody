import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useState } from 'react';

import { Formulario } from './componentes/Formulario/Formulario';
import Home from './Home/Home';

function App() {

  const [user, setUser] = useState([])

  return (
    <div>
      {
      !user.length >0
      ?<Formulario setUser={setUser} /> 
      :<Home user={user} setUser={setUser} />
      }  
    
    </div>
  );
}

export default App;
