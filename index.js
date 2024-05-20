const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false
});

const bot = new TelegramBot('6733212912:AAH7X-G5gn-6impJv4njWnpquyJKx-pGrZk', { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello World!');
});

bot.onText(/\/check (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const walletAddress = match[1];
    const apiUrl = `https://pro-api.solscan.io/v1.0/account/${walletAddress}`;

    console.log(walletAddress);

    async function getWalletBalance() {
        try {
            const response = await axios.get(apiUrl, {
                httpsAgent: agent,
                headers: {
                    'accept': 'application/json',
                    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3MTIwNDMzODk4MDgsImVtYWlsIjoic2F0b3I0aWlpa0BnbWFpbC5jb20iLCJhY3Rpb24iOiJ0b2tlbi1hcGkiLCJpYXQiOjE3MTIwNDMzODl9.6BBuXM62S5ZtMTCxp4Soy_5TG0_njTYBvMmTbnklB8w'
                }
            });
            const data = response.data;

            if (data && data.status === 'success') {
                const solBalance = data.result.data[0].balance;
                const usdBalance = data.result.data[0].usdValue;

                return { solBalance, usdBalance };
            } else {
                throw new Error('Failed to fetch wallet balance');
            }
        } catch (error) {
            console.error('Error fetching wallet balance:', error);
            return null;
        }
    }

    getWalletBalance()
        .then((balance) => {
            if (balance) {
                const message = `Wallet Balance for ${walletAddress}:\nSol Balance: ${balance.solBalance}\nUSD Balance: ${balance.usdBalance}`;
                bot.sendMessage(chatId, message);
            }
        })
        .catch((error) => {
            console.error('Error fetching wallet balance:', error);
            bot.sendMessage(chatId, 'Failed to fetch wallet balance. Please try again later.');
        });
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3MTIwNDMzODk4MDgsImVtYWlsIjoic2F0b3I0aWlpa0BnbWFpbC5jb20iLCJhY3Rpb24iOiJ0b2tlbi1hcGkiLCJpYXQiOjE3MTIwNDMzODl9.6BBuXM62S5ZtMTCxp4Soy_5TG0_njTYBvMmTbnklB8w
