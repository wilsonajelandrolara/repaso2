//https://www.eclipse.org/paho/clients/js/
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "wlara123@outlook.es",
    password: "tomatitos1",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("wlara123@outlook.es/repato2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "wlara123@outlook.es/repato";
    client.send(message);
	
  }
  function LED1_On(){
    message = new Paho.MQTT.Message(document.getElementById("sensor").innerHTML=document.getElementById("lname").value);
    message.destinationName = "wlara123@outlook.es/repato";
    client.send(message);
  }
    function LED1_Off(){
      message = new Paho.MQTT.Message(document.getElementById("sensor").innerHTML=" ");
    message.destinationName = "wlara123@outlook.es/repato";
    client.send(message);
    }
  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  
