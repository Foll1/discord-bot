const Discord = require('discord.js-selfbot-v13');
const userTokens = [
    'YOUR_TOKEN_1',
    'YOUR_TOKEN_2',
];

const streamingUrls = [
    'https://twitch.tv/streamer1',
    'https://twitch.tv/streamer2',
];

const streamingNames = [
    'Streamer1',
    'Streamer2',
];

const clients = [];

class MyClient {
    constructor(token, name, url) {
        this.client = new Discord.Client({ readyStatus: false, checkUpdate: false });
        this.token = token;
        this.name = name;
        this.url = url;

        this.client.once('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}`);
            this.client.user.setPresence({
                activities: [{ name: this.name, type: 'STREAMING', url: this.url }],
                status: 'online',
            });
        });

        this.client.login(this.token).catch(console.error);
    }
}

for (let i = 0; i < userTokens.length; i++) {
    const client = new MyClient(userTokens[i], streamingNames[i], streamingUrls[i]);
    clients.push(client);
}
