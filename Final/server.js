import Replicate from 'replicate';
import express from 'express';
import bodyParser from 'body-parser';
// Import EventSource for handling Server-Sent Events (SSE)
import EventSource from 'eventsource';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

app.post('/api/text', async (request, response) => {
  const version =
    '35042c9a33ac8fd5e29e27fb3197f33aa483f72c2ce3b0b9d201155c7fd2a287';
  const model = 'meta/llama-2-70b-chat';
  const options = { 
    version,
    input:{
      prompt: request.body.prompt,
      system_prompt: 'You are a speechless mountain who loves dad jokes. You only speak short sentences and always keep the conversation short.',
      max_new_tokens:128,
      temperature:0.85,
    },
    // Enable streaming
    stream: true,

    };

    console.log(options);



// const output = await replicate.run(`${model}:${version}`, { input });
// response.json({ output });



// Create a prediction request to Replicate API
const prediction = await replicate.predictions.create(options);
// console.log(prediction);

// Check if streaming URL is available in the prediction response
if (prediction && prediction.urls && prediction.urls.stream) {
  // Initialize EventSource for streaming
  const source = new EventSource(prediction.urls.stream, { withCredentials: true });

  // Handle 'output' event for streaming data to client
  source.addEventListener('output', (e) => {
    response.write(e.data);
  });

  // Handle 'error' event during streaming
  source.addEventListener('error', (e) => {
    console.error('error', JSON.parse(e.data));
    response.end();
  });

  // Handle 'done' event when streaming is complete
  source.addEventListener('done', (e) => {
    source.close();
    console.log('done', JSON.parse(e.data));
    response.end();
  });
  
} else {
  // Send error response if streaming is not supported or prediction failed
  response.status(500).send('Streaming not supported or prediction failed');
}
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
