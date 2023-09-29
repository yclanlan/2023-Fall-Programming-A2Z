// freebook:https://www.gutenberg.org/

let content,rawText;

function preload(){
  
  let rawText = loadStrings("./gutenberg.org_files_71650_71650-0.txt");

}

function setup() {

  
  // noCanvas();

  //create a <p>
  // let helloPara = createP("Hello");
  // helloPara.style("font-size:50px");


  createCanvas(400, 400);
  let content = rawText.join('<br>');
  createP(content);


}

function draw() {
  // background(220);

}



let title = document.getElementById("title");
console.log(title.style);
title.style.color="red";


<textarea rows="10" cols="100"></textarea>