/* Author: shma3h 
   Signature: signed by shma3h
*/

const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

// 1. إنشاء سيرفر ويب بسيط (عشان Vercel يشغل الموقع وما يعطي 404)
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Shma3hBot is running perfectly!</h1>');
    res.write('<p>made by : شماعه</p>');
    res.end();
});

// Vercel بيعطينا بورت تلقائي، لازم نستخدمه
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Web server is listening on port ${PORT}`);
});

// 2. إعداد بوت الديسكورد
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('------------------------------------');
    console.log(`Logged in as: ${client.user.tag}`);
    console.log(`User ID: 1423181773906378814`);
    console.log('System Signed by: shma3h');
    console.log('------------------------------------');
});

// 3. تشغيل البوت باستخدام التوكن اللي حطيناه في Environment Variables
client.login(process.env.DISCORD_TOKEN).catch(err => {
    console.error("خطأ في تسجيل الدخول: تأكد من التوكن في إعدادات Vercel");
});

// made by : شماعه
