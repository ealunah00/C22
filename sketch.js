const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;   //  AGREGAR VARIABLES PARA backgroundImg Y towerImage

//  DECLARAR VARIABLES PARA canvas, angle, tower, ground, cannon
//  DECLARAR VARIABLE PARA score E INICIALIZARLA

function preload() {
  //  CARGAR IMAGEN EN backgroundImg
  //  CARGAR IMAGEN EN towerImage
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  //  DECLARAR VARIABLE options COMO JSON Y AGREGARLE PROPIEDAD PARA SER ESTÁTICO



  
  //  INICIALIZAR ground Y tower COMO Bodies.rectangle, Y AGREGARLOS AL MUNDO



  //  INICIALIZAR cannon COMO new Cannon

}

function draw() {
  background(189);  //  CAMBIAR POR IMAGEN
 
  Engine.update(engine);
  //  CREAR EL SUELO COMO UN RECTÁNGULO

  //  DIBUJAR RECTÁNGULO DESDE EL CENTRO, PARA LA TORRE ENTRE push y pop
  

  //  DESPLEGAR cannon
  
}
