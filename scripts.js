class Ejercicio {

    constructor(series, repeticiones, nombre, tipo) {


        this.series = series;
        this.repeticiones = repeticiones;
        this.nombre = nombre;
        this.tipo = tipo;


    
    }

    mostrarEjercicio() {

       alert( this.series + "x" + this.repeticiones + " " +this.nombre + " (" + this.tipo + ")");
    }



}

let rutina = [];





function seleccionTipo(){

 
   let tipo= prompt("ingrese la opcion que desea entrenar, o esc para terminar: 1. Piernas, 2. Brazos, 3. Abdominales");
return tipo;

}

 function seleccionNivel(){

 
    let nivel= prompt("seleccione su nivel: 1. principiante, 2. intermedio, 3. avanzado");
 return nivel;
 
 }

 function mostrarRutina(opcion,nivel){
    
    let ejercicio;

    if (opcion==1 ) {

         switch(nivel) {
                case "1":
                    ejercicio=new Ejercicio (4,10,"sentadillas","piernas");
                    ejercicio.mostrarEjercicio();
                    rutina.push(ejercicio);
                    console.log(rutina);
                    
                    break;

                 case "2":
                    ejercicio=new Ejercicio (4,20,"sentadillas","piernas");
                    ejercicio.mostrarEjercicio();
                    rutina.push(ejercicio);
                    console.log(rutina);
                    break;

                case "3":
                    ejercicio=new Ejercicio (4,30,"sentadillas","piernas");
                    ejercicio.mostrarEjercicio();
                    rutina.push(ejercicio);
                    console.log(rutina);
                    break;

                    default:
                        alert("invalid0")
                        break


         }


    } else if (opcion==2){

        switch (nivel) {

            case "1":
                ejercicio=new Ejercicio (4,10,"curl de biceps","brazos");
                ejercicio.mostrarEjercicio();
                rutina.push(ejercicio);
                console.log(rutina);
                break;

             case "2":
                ejercicio=new Ejercicio (4,20,"curl de biceps","brazos");
                ejercicio.mostrarEjercicio();
                rutina.push(ejercicio);
                console.log(rutina);
                break;

            case "3":
                ejercicio=new Ejercicio (4,30,"curl de biceps","brazos");
                ejercicio.mostrarEjercicio();
                rutina.push(ejercicio);
                console.log(rutina);
                break;

                default:
                    alert("invalid1")
                    break;


     }


    }
    else if (opcion==3){

        switch (nivel) {

            case "1":
                ejercicio=new Ejercicio (4,10,"abs cortos","abdominales");
                ejercicio.mostrarEjercicio();
                rutina.push(ejercicio);
                console.log(rutina);
                break;

             case "2":
                ejercicio=new Ejercicio (4,20,"abs cortos","abdominales");
                ejercicio.mostrarEjercicio();
                rutina.push(ejercicio);
                console.log(rutina);
                break;

            case "3":
                ejercicio=new Ejercicio (4,30,"abs cortos","abdominales");
                ejercicio.mostrarEjercicio();
                rutina.push(ejercicio);
                console.log(rutina);
                break;

                default:
                    alert("invalid2")
                    break;


     };


    } else{   
        alert("invalidooo");
        
    }

 
 }

let opcion="inicio";
while(opcion!=="esc") {
 
 opcion = seleccionTipo();

 let nivel = seleccionNivel();

 mostrarRutina(opcion, nivel);

    
}

