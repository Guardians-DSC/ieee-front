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
  }
}

export default style;

// .container {
//   display: flex;
//   width: 100%;
//   height: 100%;
  
//   /* Centraliza o componente */
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

// .scrollContainer {
//   flex-basis: 50%;
//   height:'98vh';
//   overflow-y: auto;
  
//   /* flexBasis: 50%;
//   overflowY:'auto' */
// }

// .cards {
//   background: #ECECEC;
//   padding: 1rem;
//   width: 100%; 
//   height: 100%;
// }