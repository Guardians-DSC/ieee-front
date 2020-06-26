const formatData = {
  fDate: date => {
    let result = "Indefinida";
    if (date !== undefined) {
      const d = new Date(date);
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    
      result = `${da}/${mo}/${ye}`;
    }
    return result;
  },

  fTime: date => {
    let result = "Indefinida";
    if (date !== undefined) {
      const d = new Date(date);
      const da = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: false }).format(d);
      const mo = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(d);
    
      result = `${da}:${mo}`;
    }
    return result;
  }
}

export default formatData;