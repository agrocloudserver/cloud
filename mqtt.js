






const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

const options = {
  keepalive: 60,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
}


const host = 'ws://192.168.43.42:9001' 


console.log('Connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('error', (err) => {
  console.log('Connection error: ', err)
  //client.end()
})

client.on('reconnect', () => {
  console.log('Reconnecting...')
})



client.on('connect', () => {
  console.log('Client connected:' + clientId)
  // Subscribe

  
})




 /*

  if(topic=="nodo1")
  {
   
  console.log(message.toString())
const db = client.db(dbName);
    const collection = db.collection('nodo1');
  // Insert some documents

  var fecha= new Date();
 var hora_actual = fecha.getHours();


  collection.insertOne({lectura:message.toString(),fecha: current_hour});
}

 if(topic=="nodo2")
  {
  console.log(message.toString())



const db = client.db(dbName);
    const collection = db.collection('nodo2');
  // Insert some documents

 

  collection.insertOne({lectura:message.toString(),fecha: current_hour });
 


}
 */


















client.on('message', (topic, message, packet) => {
  //console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)
  
var msn=message.toString();
console.log(msn);
console.log(topic);
console.log(respuesta2[0].id+"reporte");
console.log(msn.length)



console.log(respuesta2);
console.log(respuesta2.length)


for (let i = 0; i < respuesta2.length; i++) {
if(respuesta2[i].id+"reporte"==topic)

{
console.log("match");
console.log(i);


if(message.toString()=="BoffAoff")
{


  console.log(respuesta2[i].id+"/B");
  var delayInMilliseconds = 1000; //1 second


setTimeout(function() {
  //your code to be executed after 1 second
 //alert("**Mensaje desde la Central**: Actualizando Estados")
}, delayInMilliseconds);

// Check
document.getElementById(respuesta2[i].id+"/B").checked = false;
document.getElementById(":"+respuesta2[i].id+"/A").checked = false;





}
else if (message.toString()=="BonAoff")
{


  console.log(respuesta2[i].id+"/B");
  var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  //alert("**Mensaje desde la Central**: Actualizando Estados")
}, delayInMilliseconds);

// Check
document.getElementById(respuesta2[i].id+"/B").checked = true;
document.getElementById(":"+respuesta2[i].id+"/A").checked = false;
}

else if (message.toString()=="BoffAon")
{


  console.log(respuesta2[i].id+"/B");
  var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  //alert("**Mensaje desde la Central**: Actualizando Estados")
}, delayInMilliseconds);

// Check
document.getElementById(respuesta2[i].id+"/B").checked = false;
document.getElementById(":"+respuesta2[i].id+"/A").checked = true;
}
else if (message.toString()=="BonAon")
{


  console.log(respuesta2[i].id+"/B");
  var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  //alert("**Mensaje desde la Central**: Actualizando Estados")
}, delayInMilliseconds);

// Check
document.getElementById(respuesta2[i].id+"/B").checked = true;
document.getElementById(":"+respuesta2[i].id+"/A").checked = true;
}
}
  /*
}

*/
}



})

console.log(canales);
;

function comu(canales,numero)
{
  let canales2=[];
canales2=canales;

var gauges=[];

for ( var item = 0; item < numero ; item++) {

 client.subscribe(canales[item], { qos: 0 })
 client.subscribe(canales[item]+"reporte", { qos: 0 })
          
gauges[item] = new RadialGauge({ renderTo: item.toString() ,width: 420,
    height: 350, id:item}).draw()


        }


/*
nodo2 = new RadialGauge({ renderTo: "1" ,width: 400,
    height: 400, id:item}).draw()
*/


client.on('message', (topic, message, packet) => {
  //console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)
  
var msn=message.toString();
console.log(msn);
console.log(msn.length)

//console.log(canales[0])
if(message.length<6)
{
for ( var item = 0; item < numero ; item++) {

 if(topic.toString()==canales[item])

 	gauges[item].value = parseInt(msn)
 console.log(canales[item]);











        }
}



})


}



function doalert(checkboxElem,canales,numero) {


let canales2=[];
canales2=canales;




for ( var item = 0; item < numero ; item++) {

 client.subscribe(canales[item], { qos: 0 })
client.subscribe(canales[item]+"reporte", { qos: 0 })

        }








client.on('message', (topic, message, packet) => {
  //console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)



})


  if (checkboxElem.checked) {



  var strong = checkboxElem.id.substring(
    checkboxElem.id.lastIndexOf(":") + 1, 
    checkboxElem.id.lastIndexOf("/")
);

mySubString=strong+"control";
 // alert(mySubString)

    client.publish(mySubString,checkboxElem.id+"#ON;")
    console.log(mySubString,checkboxElem.id+"#ON;")
   
  } else {
    //alert (checkboxElem.id+"/OFF");

  var strong = checkboxElem.id.substring(
    checkboxElem.id.lastIndexOf(":") + 1, 
    checkboxElem.id.lastIndexOf("/")
);
  mySubString=strong+"control";
  //alert(mySubString)
 client.publish(mySubString,checkboxElem.id+"#OFF;")
 console.log(mySubString,checkboxElem.id+"#OFF;")
    
    
  }
}


var kabur=0;

function abrir2(id)
{
  kabur=1;
console.log("KABUR")
console.log(respuesta2[id].id)

var lecturas=[];
var fechas=[];

$.ajax({
    url:'/dataget',
    method:'POST',
    data: {'central':respuesta2[id].id},

    beforeSend: function(data){
      console.log('Enviando...',data)
    },
  }).done(function(respuesta){

    console.log('Respuesta recibida:',respuesta)
    console.log(respuesta)
   console.log(respuesta.length)
   const numero = respuesta.length;
   let nombres = respuesta;
   console.log(numero);



console.log(respuesta);

for ( var item = 0; item < numero ; item++) {


lecturas.push(respuesta[item].lectura)
fechas.push(item)


        }

console.log(lecturas);



}).fail(function(err){
    console.log(err)
    

  }

    )



var select = document.getElementById('ventana');

while (select.firstChild) {
  select.removeChild(select.firstChild);
}



var chart = document.createElement("canvas")

chart.setAttribute("id","myChart")

select.appendChild(chart)

var slider= document.createElement("input");
slider.setAttribute("type","range");
slider.setAttribute("min","1");
slider.setAttribute("max","100");
slider.setAttribute("value","50");
slider.setAttribute("class","slider");
slider.setAttribute("id","myRange");

var text = document.createTextNode("N° muestras");
select.appendChild(text);



var pe = document.createElement("p");

var text2 = document.createTextNode("Configuración");
pe.appendChild(text2);
pe.setAttribute("id","demo");
select.appendChild(pe);
select.appendChild(slider)



   
var detalles = document.createElement("button");
detalles.setAttribute("class","button button1")
detalles.setAttribute("id","hola")
detalles.setAttribute("onclick","limpiar(myChart)")


var textoCelda3 = document.createTextNode("Limpiar");
detalles.appendChild(textoCelda3)

select.appendChild(detalles)




var slider = document.getElementById("myRange");
var output = document.getElementById("demo");





output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}




 alert("Base de datos descargada")

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: fechas,
        datasets: [{
            label: 'Real Time',
            data: lecturas,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



client.on('message', (topic, message, packet) => {
  //console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)


 if(topic==respuesta2[id].id && kabur==1)
  {
var msn=message.toString();
//console.log("modlemqtt"+msn)
 myChart.update();
lecturas.push(msn)
fechas.push("hola")
console.log(lecturas);
//console.log(fechas)

  myChart.update();

}




})








modal.style.display = "block";








this.limpiar =function()
{

console.log(respuesta2[id].id);


$.ajax({
    url:'/limpiar',
    method:'POST',
    data: {'central':respuesta2[id].id},

    beforeSend: function(data){
      console.log('Enviando...',data)
    },
  }).done(function(){


}).fail(function(err){
    console.log(err)
    

  }

    )

for (var i = lecturas.length; i > 0; i--) {
 lecturas.pop();
  fechas.pop();
}

}




 console.log(respuesta2[id].id);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    kabur=0;
  }
}

}





function obtener(id)
{
var ode=id;
var alarms=[];
//console.log("hola");
//gets table
var oTable = document.getElementById('table');


//gets rows of table
var rowLength = oTable.rows.length;
 

//var oCells = oTable.rows.item(2).cells;


//var cellLength = oCells.length;


//var hola=oCells.item(0).textContent


 //console.log(cellLength)
//console.log(rowLength)
 //console.log(hola);
var o=0;
for (var i = 2; i < rowLength; i++) {
var oCells = oTable.rows.item(i).cells;
alarms[o]=oCells.item(0).textContent
o=o+1;
}

console.log(alarms[0])
console.log(alarms[1])
console.log(alarms[2])
console.log(alarms[3])

 getConfirmation()







client.publish(ode+"control","reset")

  
}







