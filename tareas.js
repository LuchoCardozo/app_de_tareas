const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
    return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    //tarea 2 
    // Crear nuestro metodo escribirJSON, el 
    //cual va a escribir nuestro archivo tareas.json
     
    escribirJSON: data => {
       // console.log ('Esto es lo que recibo para escribir: ',data);
        //recibe un array de tareas
        let dato = JSON.stringify(data,null," "); //convierte el array en formato JSON. 
        fs.writeFileSync("./tareas.json",dato) // guarda la lista de nuevas tareas.
      // fs.writeFileSync(this.archivo,dato)
      },
     // tarea 3 
     //Crear nuestro metodo guardarTarea, el cual va a leer nuestro JSON, 
     //agregar una nueva tarea, y guardarlo
     
     guardarTarea: objeto => {
       // console.log('Esto es lo que recibo para agregar: ',objeto);
        let listaDeTareas = archivoTareas.leerJSON();//obtenemos la info del archivo .json
        //console.log('Lista de tareas antes de escribir JSON',listaDeTareas);//muestra 1 vez
        listaDeTareas.push(objeto);//agregar nueva tarea al array
        archivoTareas.escribirJSON(listaDeTareas);//guardar el nuevo array de tareas en el archivo .json
       // console.log('Deberia ser la nueva lista de tareas ',listaDeTareas);
    } ,
//tarea 
// crear nuestro metodo filtrarporestado, el cual a leer nuestro 
//archivo.JSON y filtar por el estado
//
leerPorEstado : situacion => {
         let filtrado = archivoTareas.leerJSON()
         let pendientes = filtrado.filter(tarea => tarea.estado === situacion );
        // console.log(filtrado)
        pendientes.forEach((elemento, indice)=>{//Arrow function
        console.log(indice + '. ' + elemento.titulo + ' - ' + pendientes[indice].estado);
            })
         },
        
        }




module.exports = archivoTareas;


