
const Paciente = ( {paciente, setPaciente, eliminarPaciente} ) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente; 
  const handleEliminar = () => {
    const confirmado = confirm("¿Deseas eliminar este paciente?");
    if(confirmado){
        eliminarPaciente(id);
    }
  }
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5 my-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between">
            <button type="button" className="py-2 px-10 bg-indigo-600 text-center text-white font-bold
                uppercase hover:bg-indigo-700 rounded-lg" 
                onClick={ () => setPaciente(paciente) } >Editar
            </button>
            <button type="button" className="py-2 px-10 bg-red-600 text-center text-white font-bold
                uppercase hover:bg-red-700 rounded-lg"
                onClick={ handleEliminar}
            >
                Eliminar
            </button>
        </div>
    </div>  
  )
}

export default Paciente