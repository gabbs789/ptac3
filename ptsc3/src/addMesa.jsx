import '../css/cadastro.css'

function Reservar() {

  return (
    <>
      <div className='table'>

        <h1>Reserva</h1>

        <div className='dados'>

        <input type="text" placeholder='Nome do cliente'/>

        <input type="number" placeholder='Número da Mesa'/>

        <input type="number" placeholder='Quantidade de pessoas'/>
      
      </div>

      <br/>
      <button>Reservar</button>

      </div>
    </>
  )
}

export default Reservar