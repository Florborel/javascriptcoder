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
let opcion = document.querySelector("#idTren");
let nivel = document.querySelector("#idNivel");
let inputNombre = document.querySelector("#iNombre");
let contenedor = document.querySelector("#ejercicio");
let contenedorRutina = document.querySelector("#rutina");
let btnMostrar = document.querySelector("#btnMostrar");

miFormulario.addEventListener("submit", mostrarRutina);
btnMostrar.addEventListener("click", verRutina);

inputNombre.focus();

function agregarAlDom(ejercicio){
    contenedor.innerHTML = "<h3> Ejercicio: </h3>" +
                            "<p>" + ejercicio + "</p>";
}



function verRutina(){

 let rutinaResultado = localStorage.getItem("rutinaDeChu");
 
 contenedorRutina.innerHTML = "<h3> " + inputNombre.value + " la rutina completa es la siguiente: </h3>"

 let rutinaArray = rutinaResultado.split(",");
 for (const ejercicio of rutinaArray){
    
    contenedorRutina.innerHTML = contenedorRutina.innerHTML + " <p>" + ejercicio + "</p>";
 }
  
 
 }



 function mostrarRutina(e){
    e.preventDefault();

    let ejercicio;
    opcion = document.querySelector("#idTren").value;
    nivel = document.querySelector("#idNivel").value;

    if (opcion=== "Inferior" ) {

         switch(nivel) {
                case "Principiante":
                    ejercicio=new Ejercicio (4,10,"sentadillas","piernas");
                    alert(ejercicio.mostrarEjercicio());
                    agregarAlDom(ejercicio.mostrarEjercicio());
                    rutina.push(ejercicio.mostrarEjercicio());
                    console.log(rutina);
                    localStorage.setItem("rutinaDeChu", rutina);
                    
                    break;

                 case "Intermedio":
                    ejercicio=new Ejercicio (4,20,"sentadillas","piernas");
                    agregarAlDom(ejercicio.mostrarEjercicio());
                    rutina.push(ejercicio.mostrarEjercicio());
                    localStorage.setItem("rutinaDeChu", rutina);
                    break;

                case "Avanzado":
                    ejercicio=new Ejercicio (4,30,"sentadillas","piernas");
                    agregarAlDom(ejercicio.mostrarEjercicio());
                    rutina.push(ejercicio.mostrarEjercicio());
                    localStorage.setItem("rutinaDeChu", rutina);
                    break;

                    default:
                        alert("invalid0")
                        break


         }


    } else if (opcion==="Superior"){

        switch (nivel) {

            case "Principiante":
                ejercicio=new Ejercicio (4,10,"curl de biceps","brazos");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio.mostrarEjercicio());
                localStorage.setItem("rutinaDeChu", rutina);
                break;

             case "Intermedio":
                ejercicio=new Ejercicio (4,20,"curl de biceps","brazos");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio.mostrarEjercicio());
                localStorage.setItem("rutinaDeChu", rutina);
                break;

            case "Avanzado":
                ejercicio=new Ejercicio (4,30,"curl de biceps","brazos");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio.mostrarEjercicio());
                localStorage.setItem("rutinaDeChu", rutina);
                break;

                default:
                    alert("invalid1")
                    break;


     }


    }
    else if (opcion=== "Core"){

        switch (nivel) {

            case "Principiante":
                ejercicio=new Ejercicio (4,10,"abs cortos","abdominales");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio.mostrarEjercicio());
                localStorage.setItem("rutinaDeChu", rutina);
                break;

             case "Intermedio":
                ejercicio=new Ejercicio (4,20,"abs cortos","abdominales");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio);
                localStorage.setItem("rutinaDeChu", rutina);
                break;

            case "Avanzado":
                ejercicio=new Ejercicio (4,30,"abs cortos","abdominales");
                agregarAlDom(ejercicio.mostrarEjercicio());
                rutina.push(ejercicio.mostrarEjercicio());
                localStorage.setItem("rutinaDeChu", rutina);
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
