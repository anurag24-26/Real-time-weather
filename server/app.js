const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Allow all origins (or specify only your frontend domain for security)
app.use(cors({
  origin: 'https://real-time-weather-tawny.vercel.app', // replace with your frontend's deployed domain
  methods: ['GET'],
  credentials: true
}));

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = '9becc00f1218a00208982c5a026084a8'; // make sure this is valid
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
