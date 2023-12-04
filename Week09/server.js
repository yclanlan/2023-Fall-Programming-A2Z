import Replicate from 'replicate';
import express from 'express';
import bodyParser from 'body-parser';
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
    '6b4da803a2382c08868c5af10a523892f38e2de1aafb2ee55b020d9efef2fdb8';
  const model = 'meta/llama-2-7b-chat';
  const input = {
    prompt: request.body.prompt,
    system_prompt: 'You are a smart mountain who usually repeat what user said because that is the echo in the mountains,you also love to tell them dad jokes',
  };
  console.log(input);

  const output = await replicate.run(`${model}:${version}`, { input });
  response.json({ output });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
