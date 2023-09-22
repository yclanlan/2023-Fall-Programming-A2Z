var engine;
var boxes =[]

var colors = "eae4e9-fff1e6-fde2e4-fad2e1-e2ece9-bee1e6-f0efeb-dfe7fd-cddafd".split(/-/).map(a=>"#"+a)

// https://coolors.co/eae4e9-fff1e6-fde2e4-fad2e1-e2ece9-bee1e6-f0efeb-dfe7fd-cddafd


function preload() {
  // noise for background
  noiseImg = loadImage('noise.png');
}




function setup() {	

	createCanvas(windowWidth, windowHeight);
    console.log(colors)
    
  
	let {Engine,Bodies,World}= Matter

	let ground= Bodies.rectangle(width/2,height+40,width,80,{isStatic:true})
	let wallLeft= Bodies.rectangle(0-10,height/2,20,height,{isStatic:true})
    let wallRight= Bodies.rectangle(width+10,height/2,10,height,{isStatic:true})

    engine = Engine.create();
	World.add(engine.world, [ground,wallLeft,wallRight,]);
	Matter.Runner.run(engine)
		
}


function draw() {
  
   background('#FF5F5F');

	push();
		blendMode(SOFT_LIGHT);
		image(noiseImg,0,0,width,height);
	pop();
   

	for(let box of boxes){
      
		var vertices = box.vertices;
		fill(box.color)
		
		noStroke()
		beginShape();
		for (let vert of vertices) {
			vertex(vert.x, vert.y);
		}
		endShape(CLOSE);

	}
   

//     document.ontouchmove = function(event) {
//     event.preventDefault();
//       }
  	

}

function generateNewBox(){
	
	let {Engine,Bodies,World}= Matter;
	var sz = random([30,70]);
    let box = Bodies.polygon(
      mouseX,mouseY, floor(random(4,12)), random([1.8*sz,2*sz,2.2*sz]),
      {chamfer: { radius: 30 } });

	box.color = random(colors);
	boxes.push(box);
	World.add(engine.world, box);
  
    console.log(boxes);
  
}



 function mouseClicked(){
 	generateNewBox()
   
 }

// function touchStarted() {
//   generateNewBox()

// }

