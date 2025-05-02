require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '100mb' }));

app.post('/chat', async (req, res) => {
  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      req.body,
      { params: { key: process.env.GEMINI_API_KEY } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gemini API request failed', details: err.message });
  }
});

app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.GEMINI_API_KEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
