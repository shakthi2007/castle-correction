function setup() {
  createCanvas(800,500);
}

function draw() {
 background("black"); 

 

 rect(200,100, 18,800); //first thin tallest rectangle
rect (220,200,60,400); //first rectangle
 triangle (250,140,220,200,280,200);  //first triangle on top of rectangle

 rect(622, 100, 18, 800); //last thin tallest rectangle
 rect (560,200,60,400); //last rectangle 
 triangle (560,200,620,200,590,140); //last triangle on top of rectangle

 rect (280,240,68,850);//small rect
 rect (492,240,68,850);//last small rect

 rect (348,300,145,200);// middle rect
 triangle (348,300,490,300,420,200);//middle triangle first corner,second corner,tip
}