let archivoTareas = require('./tareas');

let accion = process.argv[2];

console.clear()

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log("=======================================")
        console.log(" ")
        let tareas = archivoTareas.leerJSON();
        //microdesafio 1 , modificar funcion de tareas utilizando forEach
        //for (let i = 0;  i < tareas.length; i++) {
        //console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
       // }
       tareas.forEach((elemento, indice)=>{//Arrow function
        console.log(indice + '. ' + elemento.titulo + ' - ' + tareas[indice].estado);
        })
        console.log()
        break;
        //tarea 3 
        //Crear un nuevo case que verifique si el argumento pasado por 
        //consola es crear
        //cree la tarea tambien pasado por consola, y el estado pendiente.
        // crear nuestro case para contemplar nuestro argumento filtar, 
        //deberiamos obtener el estado como parametro
case 'crear': //FUNCIONA, NO TOCAR.
        console.log('Crear Nueva Tarea');
        console.log("=======================================")
        console.log(" ")
        let preguntas = ["titulo:"];
        let respuestas =[]
        
        function pregunta(i){
            process.stdout.write(preguntas[i]);
        }
        pregunta(0);
        let nuevaTarea = { //objeto literal donde se va almacenar los datos ingresador por terminal
            titulo: 'elTitulo',
            estado: 'pendiente'
        }
        process.stdin.on("data",function(data){
            let item = data.toString().trim() ;
                respuestas.push(item); // respuesta = item;
                //archivoTareas.filtrarTareas(respuesta);
                
            if(respuestas.length<preguntas.length){
                pregunta(respuestas.length); 
            }else{
                //console.log(respuestas);
                nuevaTarea.titulo = respuestas[0];//asignacion
                console.log('Esta es la nueva tarea: ',nuevaTarea);
                //console.log('como hago para listar aca?');
                archivoTareas.guardarTarea(nuevaTarea);
                process.exit()
            }
        })

        break;
         case "filtrar":
            console.log('Filtra por estado:');
            console.log("=======================================")
            console.log(" ")

            let situaciones = ["pendiente","en progreso","terminada"];
            console.log("Los estados son ")
            console.log(  situaciones)
            console.log(" ")
            let respuesta;
            process.stdout.write("Escribe una: ")
            process.stdin.on("data",function(data){
                let item = data.toString().trim() ;
                    respuesta = item;
                
                console.log(" ")
                console.log(archivoTareas.leerPorEstado(respuesta))
                console.log(" ")
                
                process.exit()
                })
            
        break;

    case undefined:     
     //console.log('Tenés que pasarme una acción');
console.log("=======================================")
console.log("Escriba la funcion que quiere realizar")
console.log("=======================================")
console.log("node app listar")
console.log("node app crear")
console.log("node app filtrar")
console.log("=======================================")
console.log(" ")
    break;

   // default:
//console.log('No entiendo qué me estás pidiendo');
//console.log('Las acciones disponibles son: listar');
        

     //   break;
}

