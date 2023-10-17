
let bot;
let text_input, text_output;
let conversationTurn = 0;

async function loadBot() {
  await bot.loadFile('brain.rive.txt');
  bot.sortReplies();
  let num = floor(random(10)) + 1;
  console.log(num);
  await bot.reply('local-user', 'set ' + num);
}

function setup() {
  noCanvas();
  text_input = createInput();
  text_input.style('display', 'none');
  text_input.changed(chat);

  bot = new RiveScript();

  // let button = select('#submit');
  text_input = select('#user_input');
  text_input.elt.addEventListener('keydown', preventNewLine);

  text_output = select('#output');
  loadBot();

  let wordsByBot = createElement('p','Hi! I am Mountain! How should I call you? ');
  wordsByBot.parent('output');

  // button.mousePressed(chat);
  
}

async function chat() {

  let txt = text_input.value();

  // User's reply
  let wordsByUser = createElement('p', txt + '  ');
  wordsByUser.style('background-color', '#00a1d3');
  wordsByUser.style('color', '#FFF');
  wordsByUser.style('border-radius', '2rem');
  wordsByUser.style('text-align', 'right');
  wordsByUser.style('align-items', 'flex');
  wordsByUser.parent('output');

  text_input.value('');

    // Increase conversation turn
    conversationTurn++;

  // Delay bot's reply
  setTimeout(async () => {

    let reply = await bot.reply('local-user', txt);

    // Bot's reply
    let wordsByBot = createElement('p', reply);
    wordsByBot.parent('output');

    // Check if it's time to ask a question
    if (conversationTurn === 3) {
      setTimeout(askQuestion, 1500); // Wait for 1.5 second before asking the question
    }

    if (conversationTurn === 5) {
      setTimeout(askQuestion2, 1500); // Wait for 1.5 second before asking the question
    }

    if (conversationTurn === 6) {
      setTimeout(askQuestion3, 1500); // Wait for 1.5 second before asking the question
    }

    if (conversationTurn === 7) {
      setTimeout(askQuestion4, 1500); // Wait for 1.5 second before asking the question
    }

    if (conversationTurn === 9) {
      setTimeout(askQuestion5, 1500); // Wait for 1.5 second before asking the question
    }

    if (conversationTurn === 10) {
      setTimeout(askQuestion6, 1500); // Wait for 1.5 second before asking the question
    }

    // // Check if it's time for the bot to mimic user's reply
    // if (conversationTurn === 1||4||5||6||7||8||9||10||11||12||13) {
    //   reply = txt; // The bot mimics the user's reply
    // } else {
    //   reply = await bot.reply('local-user', txt);
    // }
    

  }, 1000); // 1000 milliseconds (1 second) delay


}




async function askQuestion() {
  // This is where you can make the bot ask a question
  let thinking ="Hmmm...Can I asked a question?"
  let botQuestion = "What's your favorite color?";
  
  let thinkingByBot;
  thinkingByBot = createElement('p', thinking);
  thinkingByBot.parent('output');

  let wordsByBot;

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion);
    wordsByBot.parent('output');
  }, 1000);
  
}


async function askQuestion2() {
  // This is where you can make the bot ask a question
  let thinking ="Hey!"
  let botQuestion = "Do you want to know why I am mimicking you?";
  
  let thinkingByBot;
  thinkingByBot = createElement('p', thinking);
  thinkingByBot.parent('output');

  let wordsByBot;

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion);
    wordsByBot.parent('output');
  }, 1000);
  
}

async function askQuestion3() {
  // This is where you can make the bot ask a question
  let thinking ="Because..."
  let botQuestion = "That's a echo from the Mountain!! HaHaHa!";
  
  let thinkingByBot;
  thinkingByBot = createElement('p', thinking);
  thinkingByBot.parent('output');

  let wordsByBot;

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion);
    wordsByBot.parent('output');
  }, 1000);
  
}


async function askQuestion4() {
  // This is where you can make the bot ask a question
  let thinking ="Let me share a joke with you!"
  let botQuestion = "What do you call a bee that was born in the United States?";
  let botQuestion2 = " USB !!";
  
  let thinkingByBot;
  thinkingByBot = createElement('p', thinking);
  thinkingByBot.parent('output');

  let wordsByBot;

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion);
    wordsByBot.parent('output');
  }, 2500);

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion2);
    wordsByBot.parent('output');
  }, 5000);
  
}


async function askQuestion5() {
  // This is where you can make the bot ask a question
  let thinking ="Do you want more jokes? (I want to say more plz"
  let botQuestion = "Why cannot a bike stand up on its own?";
  let botQuestion2 = " Because it is";
  let botQuestion3 = " two tired.";

  let thinkingByBot;
  thinkingByBot = createElement('p', thinking);
  thinkingByBot.parent('output');

  let wordsByBot;

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion);
    wordsByBot.parent('output');
  }, 2500);

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion2);
    wordsByBot.parent('output');
  }, 5000);

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion3);
    wordsByBot.parent('output');
  }, 6500);


  
}

async function askQuestion6() {
  // This is where you can make the bot ask a question
  let thinking ="The last one..is comong"
  let botQuestion = " Why is “dark” is spelled with a “k” not a “c”?";
  let botQuestion2 = " Because you cannot c in the dark.";
  let botQuestion3 = " I'm sorry, hope you still like to talk to me";
  
  let thinkingByBot;
  thinkingByBot = createElement('p', thinking);
  thinkingByBot.parent('output');

  let wordsByBot;

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion);
    wordsByBot.parent('output');
  }, 1000);

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion2);
    wordsByBot.parent('output');
  }, 3000);

  setTimeout(() => {
    wordsByBot = createElement('p', botQuestion3);
    wordsByBot.parent('output');
  }, 4000);
  
}



function preventNewLine(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    chat();
  }
}