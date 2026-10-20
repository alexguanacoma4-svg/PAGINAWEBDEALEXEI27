const horaElemento = document.getElementById("hora");
const fechaElemento = document.getElementById("fecha");
const toggleFormatoBtn = document.getElementById("toggle-formato");

let formato12h = false;

function actualizarReloj() {
  const ahora = new Date();

  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();

  let sufijo = "";

  if (formato12h) {
    sufijo = horas >= 12 ? "PM" : "AM";
    horas = horas % 12 || 12; // convierte 0 a 12
  }

  const horaFormateada = [
    horas.toString().padStart(2, "0"),
    minutos.toString().padStart(2, "0"),
    segundos.toString().padStart(2, "0"),
  ].join(":") + (formato12h ? ` ${sufijo}` : "");

  horaElemento.textContent = horaFormateada;

  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const diaSemana = dias[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const año = ahora.getFullYear();

  fechaElemento.textContent = `${diaSemana}, ${dia} ${mes} ${año}`;
}

toggleFormatoBtn.addEventListener("click", () => {
  formato12h = !formato12h;
  toggleFormatoBtn.textContent = formato12h ? "Cambiar a 24h" : "Cambiar a 12h";
  actualizarReloj();
});

setInterval(actualizarReloj, 1000);
actualizarReloj();