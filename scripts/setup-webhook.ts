// scripts/setup-webhook.ts
import { Telegraf } from 'telegraf'
import dotenv from 'dotenv'

dotenv.config()

async function setupWebhook() {
  // Initialize bot with your token
  const bot = new Telegraf(process.env.TELEGRAM_BOT!)
  
  // Your deployed URL (replace with your actual URL)
  const DEPLOY_URL = process.env.DEPLOY_URL // e.g., 'your-site.netlify.app' or 'your-api.onrender.com'
  
  try {
    // First, delete any existing webhook
    await bot.telegram.deleteWebhook()
    
    // Set the new webhook
    const webhookUrl = `https://${DEPLOY_URL}/api/telegram` // for Netlify
    // OR
    // const webhookUrl = `https://${DEPLOY_URL}/webhook` // for Render
    
    const result = await bot.telegram.setWebhook(webhookUrl)
    
    if (result) {
      console.log('✅ Webhook setup successful!')
      // Verify webhook info
      const webhookInfo = await bot.telegram.getWebhookInfo()
      console.log('Webhook Info:', webhookInfo)
    } else {
      console.error('❌ Failed to set webhook')
    }
  } catch (error) {
    console.error('Error setting webhook:', error)
  }
  
  process.exit()
}

setupWebhook()