document.write('');

alert("Bienvenido al gerenador de excusas para llegar tarde.                         Github: nicolas703");

window.onload = () => {
    document.querySelector('#boton').addEventListener('click', () => {
      document.querySelector('#excusa').innerHTML = generateExcusa ();  
    });

console.log('Hello Geeks ');
};

let generateExcusa = () => {

        let quien = ['Netflix ','El coronavirus ','El comunismo ','La micro '];
        let que = ['destrozó ','se robó ','se adueñó de ','frenó '];
        let eso = ["mi sueño ", "mi horario "]
        let cuando = ['toda la noche','como siempre','desde el lunes','sin darme cuenta','desde sus inicios'];

        let quienRa = Math.floor(Math.random() * quien.length);
        let queRa = Math.floor(Math.random() * que.length);
        let esoRa = Math.floor(Math.random() * eso.length);
        let cuandoRa = Math.floor(Math.random() * cuando.length);

   return quien[quienRa] + '' + que[queRa] + '' + eso[esoRa] + '' + cuando[cuandoRa];
};




