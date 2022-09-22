import { useState } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaDePacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);
  return (
    <div className="container mx-auto mt-20">
        <Header/>
        <div className='mt-12 md:flex'>
          <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes} />
          <ListaDePacientes/>
        </div>
    </div>
  )
}

export default App
