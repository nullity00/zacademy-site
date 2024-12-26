import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

const TELEGRAM_BOT = process.env.VITE_TELEGRAM_BOT;
const TELEGRAM_CHAT = process.env.VITE_TELEGRAM_CHAT;

interface TelegramMessage {
  message: string;
}

app.post('/api/send-message', async (req: any, res: any) => {
  if (!TELEGRAM_BOT || !TELEGRAM_CHAT) {
    console.error('Missing environment variables');
    return res.status(500).json({ 
      success: false, 
      error: 'Server configuration error' 
    });
  }

  try {
    console.log('Received message:', req.body.message); // Add logging

    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT,
        text: req.body.message,
        parse_mode: 'HTML' // Add this to support formatting
      }
    );
    
    console.log('Telegram response:', response.data);
    res.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data
    });
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message',
      details: error.response?.data || error.message
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment check:', {
    hasTelegramBot: !!TELEGRAM_BOT,
    hasTelegramChat: !!TELEGRAM_CHAT
  });
});