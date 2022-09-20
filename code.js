
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);


function obtenerDatosDelUsuario() {

 
 datosPersona.nombre = prompt("Ingresa tu nombre");
 console.log(datosPersona.nombre); 

 var born = parseFloat(prompt("Ingresa el año en el que naciste"));
 console.log(born);
 var currentTime = new Date();
 var year = parseFloat(currentTime.getFullYear());
 var edad = year - born;
 datosPersona.edad = edad;

 datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
 console.log(datosPersona.ciudad);

 datosPersona.interesPorJs = confirm("te interesa JavaScript?");
 console.log(datosPersona.interesPorJs);

}

function renderizarDatosUsuario() {

  obtenerDatosDelUsuario();

  
  if(datosPersona.interesPorJs == true) {
    datosPersona.interesPorJs = "Si";
   } else {
    datosPersona.interesPorJs = "No";
   }
   
   document.getElementById("nombre").innerText = datosPersona.nombre;
   document.getElementById("edad").innerText = datosPersona.edad;
   document.getElementById("ciudad").innerText = datosPersona.ciudad;
   document.getElementById("javascript").innerText = datosPersona.interesPorJs;
  
}


function recorrerListadoYRenderizarTarjetas() {

  for (const list of listado) {
    
    const containers = () => {

      const containerItem = document.createElement('div');
      containerItem.classList.add("caja");

  
      const image = document.createElement('img');
      image.src = list.imgUrl;
      image.alt = list.lenguajes;
      
      const firstTitle = document.createElement('p');
      firstTitle.innerText ="Lenguajes: " + list.lenguajes;
      firstTitle.style.marginBottom = '10px';
  
      const secondTitle = document.createElement('p');
      secondTitle.innerText = "Bimestre: " + list.bimestre;
   
      containerItem.appendChild(image);
      containerItem.appendChild(firstTitle);
      containerItem.appendChild(secondTitle);
  
      return containerItem;

    }
  
    const newContainer = containers();
    const container = document.getElementById("fila");
    container.appendChild(newContainer);

  }

}

function alternarColorTema() {

  
  const bodycolor = document.getElementById("sitio");
  bodycolor.classList.toggle("dark");

}



window.addEventListener ("keypress", function(e) {
     
     if(e.key == "f") {
     let eliminacion = document.getElementById("sobre-mi");
     eliminacion.classList.remove('oculto');
     }
     
} )
