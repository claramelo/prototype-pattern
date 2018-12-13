function Vehicle(wheels, plate, color) {
  this.wheels = wheels;
  this.plate = plate;
  this.color = color;
}

//Os métodos go e stop são atribuido as instancias

Vehicle.prototype.go = function() {
  console.log("Vruvrum!!!");
};

Vehicle.prototype.stop = function() {
  console.log("Stopping the vehicle");
};

// Quando declaramos metos dessa forma ele está sendo a
// atribuido a Classe veiculo e não a instancia da classe veiculo
// Vehicle.showColor = function() {
//   console.log("This vehicle is " + this.color + " !");
// };

var claraCar = new Vehicle(4, "ABC-1212", "pink");

console.log(claraCar);

// Agora vamos criar um Objeto (forklift) que herda todas as caracteristicas de Vehicle

function Forklift(capacity, wheels, plate, color) {
  this.capacity = capacity;

  Vehicle.call(this, wheels, plate, color);
}

Forklift.prototype = Object.create(Vehicle.prototype);

Forklift.prototype.up = function() {
  console.log("Up all boxes!!Pipipi");
};

Forklift.prototype.down = function() {
  console.log("Down all boxes!! Pipipi");
};

var forklift = new Forklift("150kg", 4, "CDE-1234", "blue");

forklift.up();
