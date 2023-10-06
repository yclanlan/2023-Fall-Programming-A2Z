var textfield;
var output;
var submit;
var colors = "eae4e9-fff1e6-fde2e4-fad2e1-e2ece9-bee1e6-f0efeb-dfe7fd-cddafd".split(/-/).map(a=>"#"+a)

function setup() {
  noCanvas();
  textfield=select("#input");
  output=select('#output');
  submit=select('#submit');

  submit.mousePressed(newText);

}

function newText(){

  var s = textfield.value();
  var words = s.split(  /(\W+)/  );

  for(var i=0; i< words.length; i++){
   
   var span = createSpan(words[i]);
   span.parent(output);

   if(!/\W+/.test(words[i]) ){
    span.style('background-color',colors[floor(random(0,8))]);
    span.mouseOver(highlight);

   }

  }

  console.log(words);
  console.log(colors);
  // createP(s);
}

function highlight(){
  // console.log(this.html());

  var s = this.html();
  s = s.replace(/[aeiou]/g,replacer);
  console.log(s);

  var cakeSpan = createSpan(s+" / ");
  // var cakeSpan = createSpan(s);
   cakeSpan.parent(cakeOutput);
}

function replacer(match){
  // console.log(match);
  var randomValue = random();
  if (randomValue>0.5) {return "🍰"} else {return"🥞"};
  
}

