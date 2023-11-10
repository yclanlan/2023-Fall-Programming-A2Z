let grammar, json;
let lines = ["今晚，我想來點",];

function setup() {

  createCanvas(windowWidth, 5/10*windowHeight);
  textAlign(CENTER);
  grammar = RiTa.grammar(haiku);
}

function draw() {

  background(230, 240, 255);
  textSize(50);
  text(lines[0], width / 2, 5/10*windowHeight/2);

}

function mouseReleased() {

  let result = grammar.expand();
  
  // split on the % char output from the grammar
  let haiku = result.split("%");
  
  for (let i = 0; i < lines.length; i++) {
    lines[i] = haiku[i];

 
  }

  var span = createElement('p',lines);
  span.parent(content);
  var space = createElement('br');
  space.parent(content);


}