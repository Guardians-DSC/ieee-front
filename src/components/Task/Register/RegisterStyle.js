const style = {
  container: {
    width: '100vw',
    display: 'flex',
    height: '100vh',
    
    // Centraliza o componente
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },

  input: {
    display: 'block',
    margin: 'auto',
    width : '90%',
    paddingTop: '12rem',
    height: '100vh',      
  },

  item: {
    marginBottom: '2rem',
  },

  inputHeader: {
    textAlign: 'center',
    padding: '2rem',
    marginTop: '-10rem',
    fontSize: '3rem',
    textTransform: 'uppercase',
    fontWeight: '500',
  }
}

export default style;