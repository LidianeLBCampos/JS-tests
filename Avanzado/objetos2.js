var objExterno = {
    nombre : 'externo',
    funcExterna : function() {
      var este = this; // Retenemos la referencia al objeto externo para usarla luego desde el interno
      var objInterno = { nombre : 'interno', funcInterna : function() {
          console.log(este.nombre, this.nombre);
        }
      };
      objInterno.funcInterna();  // registra 'externo interno'
      console.log(this.nombre); // registra 'externo'
    }
  };
  objExterno.funcExterna();
  