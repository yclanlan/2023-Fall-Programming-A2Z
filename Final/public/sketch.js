let prompt, text_output , botRepsonse, reader;

function setup() {
  noCanvas();
  noLoop();
 
 
  prompt = createInput('HIHI');
  prompt.style('display', 'none');
  prompt.changed(generateText);

  // let button = select('#submit');
  prompt = select('#user_input');
  prompt.elt.addEventListener('keydown', preventNewLine);
  // text_output = select('#output');
  // createButton('generateText').mousePressed(generateText);

  // generateText();
  

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
  
    console.log('sending text to api');
    
    const response = await fetch('/api/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt.value() }),
    });

    // console.log(response);


    // Initialize a stream reader from the server response
    let reader = response.body.getReader();
    botRepsonse = createDiv('');
    botRepsonse.style('background-color', 'white');
    botRepsonse.style('border-radius', '1rem');
    botRepsonse.style('padding-left', '1rem');
    botRepsonse.style('padding-right', '1rem');
    // Continuously read data from the stream
    while (true) {
      // console.log('true');

      const { done, value } = await reader.read();
      
      // Stop when it's done!
      if (done) break;
      // The 'value' is a Uint8Array containing the streamed binary data
      // TextDecoder converts this binary data into a human-readable string
      
      botRepsonse.html(botRepsonse.html() + new TextDecoder().decode(value));
      botRepsonse.parent('output');

      
    }

    // const data = await response.json();
    // let wordsByBot  = createElement('p', data.output.join(''));
    // wordsByBot.parent('output');
    // console.log(data);

    prompt.value('');
  }

 



function preventNewLine(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    generateText();
  }
}