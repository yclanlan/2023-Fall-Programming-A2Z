async function askQuestion() {

    // This is where you can make the bot ask a question
    let thinking ="Hmmm... Can I asked a question ?"
    let botQuestion = "What's your favorite color ?";
    
    
    let thinkingwords = thinking.split(" ");
    let thinkingByBot = createP('');
    thinkingByBot.style('background-color', '#ffffff');
    thinkingByBot.style('color', '#000000');
    thinkingByBot.style('border-radius', '2rem');
    thinkingByBot.style('text-align', 'left');
    thinkingByBot.style('align-items', 'flex');
    thinkingByBot.style('padding-left', '1rem');
    thinkingByBot.parent('output');

    for (let i=0; i< thinkingwords.length; i++) {
      (function (i) {
         setTimeout( () => {
          thinkingByBot.html(thinkingwords[i]+" ",true);
           console.log(i);
           },100*i);
         })(i);
    }
  
    setTimeout(() => {

          // Bot's reply
    let words = botQuestion.split(" ");
    let wordsByBot = createP('');
    wordsByBot.style('background-color', '#ffffff');
    wordsByBot.style('color', '#000000');
    wordsByBot.style('border-radius', '2rem');
    wordsByBot.style('text-align', 'left');
    wordsByBot.style('align-items', 'flex');
    wordsByBot.style('padding-left', '1rem');
    

    for (let i=0; i< words.length; i++) {
     (function (i) {
        setTimeout( () => {
          wordsByBot.html(words[i]+" ",true);
          console.log(i);
          wordsByBot.parent('output');
          },100*i);
        })(i);
   }

    }, 1000);
    
  }
  
  
  async function askQuestion2() {
    // This is where you can make the bot ask a question
    let thinking ="Hey!"
    let botQuestion = "Do you want to know why I am mimicking you ? ";
    
    let thinkingwords = thinking.split(" ");
    let thinkingByBot=createP();

    thinkingByBot.style('background-color', '#ffffff');
    thinkingByBot.style('color', '#000000');
    thinkingByBot.style('border-radius', '2rem');
    thinkingByBot.style('text-align', 'left');
    thinkingByBot.style('align-items', 'flex');
    thinkingByBot.style('padding-left', '1rem');
    thinkingByBot.parent('output');

    for (let i=0; i< thinkingwords.length; i++) {
      (function (i) {
         setTimeout( () => {
          thinkingByBot.html(thinkingwords[i]+" ",true);
           console.log(i);
           },100*i);
         })(i);
    }
  
    
  
    setTimeout(() => {
      let words = botQuestion.split(" ");
      let wordsByBot = createP('');
      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');
      wordsByBot.style('padding-left', '1rem');
      
      for (let i=0; i< words.length; i++) {
     (function (i) {
        setTimeout( () => {
          wordsByBot.html(words[i]+" ",true);
          console.log(i);
          wordsByBot.parent('output');
          },100*i);
        })(i);
   }

    }, 1000);
    
  }
  
  async function askQuestion3() {
    // This is where you can make the bot ask a question
    let thinking ="Because..."
    let botQuestion = "That's a echo from the Mountain !! HaHaHa";
    
        let thinkingwords = thinking.split(" ");
    let thinkingByBot=createP();

    thinkingByBot.style('background-color', '#ffffff');
    thinkingByBot.style('color', '#000000');
    thinkingByBot.style('border-radius', '2rem');
    thinkingByBot.style('text-align', 'left');
    thinkingByBot.style('align-items', 'flex');
    thinkingByBot.style('padding-left', '1rem');
    thinkingByBot.parent('output');

    for (let i=0; i< thinkingwords.length; i++) {
      (function (i) {
         setTimeout( () => {
          thinkingByBot.html(thinkingwords[i]+" ",true);
           console.log(i);
           },100*i);
         })(i);
    }
  
    
  
    setTimeout(() => {
      let words = botQuestion.split(" ");
      let wordsByBot = createP('');
      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');
      wordsByBot.style('padding-left', '1rem');
      
      for (let i=0; i< words.length; i++) {
     (function (i) {
        setTimeout( () => {
          wordsByBot.html(words[i]+" ",true);
          console.log(i);
          wordsByBot.parent('output');
          },100*i);
        })(i);
   }
       
    }, 1000);
    
  }
  
  
  async function askQuestion4() {
    // This is where you can make the bot ask a question
    let thinking ="Let me share a joke with you !"
    let botQuestion = "What do you call a bee that was born in the United States?";
    let botQuestion2 = " USB !!";
    
        let thinkingwords = thinking.split(" ");
    let thinkingByBot=createP();

    thinkingByBot.style('background-color', '#ffffff');
    thinkingByBot.style('color', '#000000');
    thinkingByBot.style('border-radius', '2rem');
    thinkingByBot.style('text-align', 'left');
    thinkingByBot.style('align-items', 'flex');
    thinkingByBot.style('padding-left', '1rem');
    thinkingByBot.parent('output');

    for (let i=0; i< thinkingwords.length; i++) {
      (function (i) {
         setTimeout( () => {
          thinkingByBot.html(thinkingwords[i]+" ",true);
           console.log(i);
           },100*i);
         })(i);
    }
  
    
  
    setTimeout(() => {
      let words = botQuestion.split(" ");
      let wordsByBot = createP('');
      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');
      wordsByBot.style('padding-left', '1rem');
      
      for (let i=0; i< words.length; i++) {
     (function (i) {
        setTimeout( () => {
          wordsByBot.html(words[i]+" ",true);
          console.log(i);
          wordsByBot.parent('output');
          },100*i);
        })(i);
   }
       
    }, 1500);

      setTimeout(() => {
      let words = botQuestion2.split(" ");
      let wordsByBot = createP('');
      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');
      wordsByBot.style('padding-left', '1rem');
      
      for (let i=0; i< words.length; i++) {
     (function (i) {
        setTimeout( () => {
          wordsByBot.html(words[i]+" ",true);
          console.log(i);
          wordsByBot.parent('output');
          },100*i);
        })(i);
   }
       
    }, 5000);
  }
  
  
  async function askQuestion5() {
    // This is where you can make the bot ask a question
    let thinking ="Do you want more jokes? (I want to say more plz"
    let botQuestion = "Why cannot a bike stand up on its own?";
    let botQuestion2 = " Because it is";
    let botQuestion3 = " two tired.";
  
    let thinkingwords = thinking.split(" ");
    let thinkingByBot=createP('');
    
    thinkingByBot.style('background-color', '#ffffff');
    thinkingByBot.style('color', '#000000');
    thinkingByBot.style('border-radius', '2rem');
    thinkingByBot.style('text-align', 'left');
    thinkingByBot.style('align-items', 'flex');
    thinkingByBot.parent('output');

     for (let i=0; i< thinkingwords.length; i++) {
      (function (i) {
         setTimeout( () => {
          thinkingByBot.html(thinkingwords[i]+" ",true);
           console.log(i);
           },100*i);
         })(i);
    }
  
   
  
    setTimeout(() => {

      let words = botQuestion.split(" ");
      let wordsByBot = createP(' ');
      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');


      for (let i=0; i< words.length; i++) {
        (function (i) {
            setTimeout( () => {
              wordsByBot.html(words[i]+" ",true);
              console.log(i);
              wordsByBot.parent('output');
              },100*i);
            })(i);
      }
      
    }, 1500);
  
    setTimeout(() => {


      let words = botQuestion2.split(" ");
      let wordsByBot = createP(' ');
      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');


      for (let i=0; i< words.length; i++) {
        (function (i) {
            setTimeout( () => {
              wordsByBot.html(words[i]+" ",true);
              console.log(i);
              wordsByBot.parent('output');
              },100*i);
            })(i);
      }


    }, 3000);
  
    setTimeout(() => {
      
      let words = botQuestion3.split(" ");
      let wordsByBot = createP(' ');
      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');


      for (let i=0; i< words.length; i++) {
        (function (i) {
            setTimeout( () => {
              wordsByBot.html(words[i]+" ",true);
              console.log(i);
              wordsByBot.parent('output');
              },100*i);
            })(i);
      }

    }, 5500);
  
  
    
  }
  
  async function askQuestion6() {
    // This is where you can make the bot ask a question
    let thinking ="The last one..is comong"
    let botQuestion = " Why is “dark” is spelled with a “k” not a “c”?";
    let botQuestion2 = " Because you cannot c in the dark.";
    let botQuestion3 = " I'm sorry, hope you still like to talk to me";
    
    let thinkingwords = thinking.split(" ");
    let thinkingByBot=createP('');

    thinkingByBot.style('background-color', '#ffffff');
    thinkingByBot.style('color', '#000000');
    thinkingByBot.style('border-radius', '2rem');
    thinkingByBot.style('text-align', 'left');
    thinkingByBot.style('align-items', 'flex');
    thinkingByBot.parent('output');

    for (let i=0; i< thinkingwords.length; i++) {
      (function (i) {
         setTimeout( () => {
          thinkingByBot.html(thinkingwords[i]+" ",true);
           console.log(i);
           },100*i);
         })(i);
    }
  
   
  
    setTimeout(() => {

      let words = botQuestion.split(" ");
      let wordsByBot = createP(' ');

      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');
     

      for (let i=0; i< words.length; i++) {
        (function (i) {
            setTimeout( () => {
              wordsByBot.html(words[i]+" ",true);
              console.log(i);
              wordsByBot.parent('output');
              },100*i);
            })(i);
      }

    }, 1000);
  
    setTimeout(() => {

      let words = botQuestion2.split(" ");
      let wordsByBot = createP(' ');

      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');
     

      for (let i=0; i< words.length; i++) {
        (function (i) {
            setTimeout( () => {
              wordsByBot.html(words[i]+" ",true);
              console.log(i);
              wordsByBot.parent('output');
              },100*i);
            })(i);
      }
    }, 4000);

  
    setTimeout(() => {

      let words = botQuestion3.split(" ");
      let wordsByBot = createP(' ');

      
      wordsByBot.style('background-color', '#ffffff');
      wordsByBot.style('color', '#000000');
      wordsByBot.style('border-radius', '2rem');
      wordsByBot.style('text-align', 'left');
      wordsByBot.style('align-items', 'flex');

      for (let i=0; i< words.length; i++) {
        (function (i) {
            setTimeout( () => {
              wordsByBot.html(words[i]+" ",true);
              console.log(i);
              wordsByBot.parent('output');
              },100*i);
            })(i);
      }


    }, 5500);
    
  }