let prompt, text_output;

function setup() {
  noCanvas();
  noLoop();
 
 
  prompt = createInput();
  prompt.style('display', 'none');
  prompt.changed(generateText);

  // let button = select('#submit');
  prompt = select('#user_input');
  prompt.elt.addEventListener('keydown', preventNewLine);
  // text_output = select('#output');
  // createButton('generateText').mousePressed(generateText);
}

  async function generateText() {

    let txt = prompt.value();

    let wordsByUser = createElement('p', txt + '  ');
    wordsByUser.style('background-color', '#00a1d3');
    wordsByUser.style('color', '#FFF');
    wordsByUser.style('border-radius', '2rem');
    wordsByUser.style('text-align', 'right');
    wordsByUser.style('align-items', 'flex');
    wordsByUser.parent('output');
  
    
    const response = await fetch('/api/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt.value() }),
    });
    
    const data = await response.json();
    let wordsByBot  = createElement('p', data.output.join(''));
    wordsByBot.parent('output');
    // console.log(data);

    prompt.value('');
  }

 



function preventNewLine(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    generateText();
  }
}