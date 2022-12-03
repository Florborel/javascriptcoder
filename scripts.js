class Ejercicio {

    constructor(series, repeticiones, nombre, tipo) {


        this.series = series;
        this.repeticiones = repeticiones;
        this.nombre = nombre;
        this.tipo = tipo;


    
    }

    mostrarEjercicio() {

       return this.series + "x" + this.repeticiones + " " +this.nombre + " (" + this.tipo + ")";
    }


}

let rutina = [];

let miFormulario = document.querySelector("#formulario");
let opcion = miFormulario.children[7].value;
let nivel = miFormulario.children[5].value;
let inputNombre = document.querySelector("#iNombre");
let contenedor = document.querySelector("#ejercicio");
let contenedorRutina = document.querySelector("#rutina");

miFormulario.addEventListener("submit", mostrarRutina);
btnMostrar.addEventListener("click", verRutina);

inputNombre.focus();

function agregarAlDom(ejercicio){
    contenedor.innerHTML = "<h3> Ejercicio: </h3>" +
                            "<p>" + ejercicio + "</p>";
}



function verRutina(){

 let rutinaResultado = localStorage.getItem("rutina");
 for (const ejercicio of rutinaResultado){
    contenedorRutina.innerHTML = contenedorRutina.innerHTML + " " + ejercicio.mostrarEjercicio();
 }
  
 
 }



 function mostrarRutina(){
    
    let ejercicio;
    opcion = miFormulario.children[7].value;
    nivel = miFormulario.children[5].value;

    if (opcion=== "Inferior" ) {

         switch(nivel) {
                case "Principiante":
                    ejercicio=new Ejercicio (4,10,"sentadillas","piernas");
                    alert(ejercicio.mostrarEjercicio());
                    agregarAlDom(ejercicio.mostrarEjercicio());
                    rutina.push(ejercicio);
                    console.log(rutina);
                    localstorage.setItem("rutina", rutina);
                    
                    break;

                 case "Intermedio":
                    ejercicio=new Ejercicio (4,20,"sentadillas","piernas");
                    agregarAlDom(ejercicio.mostrarEjercicio());
                    rutina.push(ejercicio);
                    localstorage.setItem("rutina", rutina);
                    break;

                case "Avanzado":
                    ejercicio=new Ejercicio (4,30,"sentadillas","piernas");
                    agregarAlDom(ejercicio.mostrarEjercicio());
                    rutina.push(ejercicio);
                    localstorage.setItem("rutina", rutina);
                    break;

                    default:
                        alert("invalid0")
                        break


         }


    } else if (opcion==="Core"){

        switch (nivel) {

            case "Principiante":
                ejercicio=new Ejercicio (4,10,"curl de biceps","brazos");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio);
                localstorage.setItem("rutina", rutina);
                break;

             case "Intermedio":
                ejercicio=new Ejercicio (4,20,"curl de biceps","brazos");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio);
                localstorage.setItem("rutina", rutina);
                break;

            case "Avanzado":
                ejercicio=new Ejercicio (4,30,"curl de biceps","brazos");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio);
                localstorage.setItem("rutina", rutina);
                break;

                default:
                    alert("invalid1")
                    break;


     }


    }
    else if (opcion=== "Superior"){

        switch (nivel) {

            case "Principiante":
                ejercicio=new Ejercicio (4,10,"abs cortos","abdominales");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio);
                localstorage.setItem("rutina", rutina);
                break;

             case "Intermedio":
                ejercicio=new Ejercicio (4,20,"abs cortos","abdominales");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio);
                localstorage.setItem("rutina", rutina);
                break;

            case "Avanzado":
                ejercicio=new Ejercicio (4,30,"abs cortos","abdominales");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio);
                localstorage.setItem("rutina", rutina);
                break;

                default:
                    alert("invalid2")
                    break;


     };


    } else{   
        alert("invalidooo");
        
    }

 
 }
/*
let opcion2="inicio";
while(opcion2!=="esc") {
 
 opcion = seleccionTipo();

 let nivel = seleccionNivel();

 mostrarRutina(opcion, nivel);

    
}
*/
