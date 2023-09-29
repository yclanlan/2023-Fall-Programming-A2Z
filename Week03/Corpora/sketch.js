let data;

function preload() { 
  data = loadJSON('isms.json');
  console.log(data);
}

function setup() {

 noCanvas();

  // let words = RiTa.tokenize("The elephant took a bite!")
  // createElement('p',words);
  
  // let data = RiTa.analyze("The elephant took a bite!");;
  // console.log(data);
  // createElement('p',data.stresses);
   
  

   for(let i = 0; i < data.isms.length; i++){
    console.log(data.isms[i]);
    createElement('h1',data.isms[i]);

    let result = RiTa.analyze(data.isms[i]);
    console.log(result);
    
    createElement('h4',"RiTa.analyze.syllables: "); 
    createElement('p',result.syllables);  
    createElement('h4',"RiTa.analyze.pos: "); 
    createElement('p',result.pos);  
    
    
    // try to generate something but didn't work
    // I test the markov and want to generate by the result

    let markovText = new RiTa.markov(2);
    markovText.addText(data.isms[i]);
    console.log(markovText);
    createElement('h4',"markovText: ");  
    createElement('p',markovText);  
    createElement('hr');  

    // let markov_result = markovText.generate();
    // console.log(markov_result);
   

   }
    
    

    


  



  
}


