const style = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    
    // Centraliza o componente
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'     
  },

  scrollContainer: {
    background: '#ECECEC',
    padding: '1rem',
    width:'100%',
    height:'100%'
  },

  rowStyle: {
    flexBasis:'50%',
    height:'100%',
    overflowY:'auto'
  },

  cardStyle: {
    textAlign: 'center',
  },

  metaStyle: {
    paddingBottom: '10px',
    overflowY:'auto',
    textOverflow:'clip',
    textAlign: 'start'
  },

  iconStyle: {
    width: '100%'
  },

  logo: {
    height: '50px',
    background: 'rgb(214, 214, 214)',
    margin: '16px',
    display: 'flex',
    overflow: 'hidden'
  },
  
  i3eIcon: {
    maxWidth: '50px',
    maxHeight: '168px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  
  i3eTitle: {
    color: 'rgb(17, 49, 226)',
    textAlign: 'center',
    textShadow: '1px 1px 1px rgb(10, 10, 10)'
  },
  
  antLayoutSiderZeroWidthTrigger: {
    width: '25px',
    right: '-25px',
  },
  
  barContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-start',
    overflowY:'auto',
  },
  
  item: {
    marginBottom: '2rem',
  },
  
  input: {
    display: 'block',
    margin: 'auto',
    width : '90%',
    paddingTop: '12rem',
    height: '100vh',      
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