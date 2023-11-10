let lines,
  markov,
  content,
  data1,
  data2,
  x = 160,
  y = 240;

function preload() {
  data1 = loadStrings("data/wittgenstein.txt");
  data2 = loadStrings("data/kafka.txt");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  content=select('#content');
  noCanvas();
  // textFont("helvetica", 30);
  
  // textAlign(LEFT);

  lines = [" "];

  // create a markov model w' n=4
  markov = RiTa.markov(4);

  // load text into the model
  markov.addText(data1.join(" "));
  markov.addText(data2.join(" "));

  drawText();
}

function drawText() {


 
  console.log(lines);
  var span = createElement('p',lines.join(" "));
  span.parent(content);
  var space = createElement('br');
  space.parent(content);

}

function mouseClicked() {
  lines = markov.generate(5);
  x = y = 40;
  drawText();
}
