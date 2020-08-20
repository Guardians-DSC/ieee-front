const formatData = {
  fDate: date => {
    let result = "Indefinida";
    if (date !== undefined) {
      const d = new Date(date);
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      const mo = new Intl.DateTimeFormat('en-US', { month: '2-digit' }).format(d);
      const ye = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(d);
    
      result = `${da}/${mo}/${ye}`;
    }
    return result;
  },

  fTime: date => {
    let result = "Indefinida";
    if (date !== undefined) {
      const d = new Date(date);
      const time = new Intl.DateTimeFormat('en', {hour: 'numeric', minute: 'numeric', hour12: false}).format(d);

      result = time;
    }
    return result;
  }
}

export default formatData;