import discord from 'discord.js';
import dotenv from 'dotenv';

// .env variable loader
dotenv.config();

// discord client
const client = new discord.Client();

// startup event handler
client.once('ready', () => {
    console.log("Powered by...");
    console.log("▄▄                                                     ▄▄     ▄▄        ");
    console.log("▀███▀▀▀██▄   ██                                      ▀███     ██        ");
    console.log("  ██    ▀██▄                                           ██               ");
    console.log("  ██     ▀█████  ▄██▀███▄██▀██  ▄██▀██▄▀███▄███   ▄█▀▀███   ▀███ ▄██▀███");
    console.log("  ██      ██ ██  ██   ▀▀█▀  ██ ██▀   ▀██ ██▀ ▀▀ ▄██    ██     ██ ██   ▀▀");
    console.log("  ██     ▄██ ██  ▀█████▄█      ██     ██ ██     ███    ██     ██ ▀█████▄");
    console.log("  ██    ▄██▀ ██  █▄   ███▄    ▄██▄   ▄██ ██     ▀██    ██ ▄▄  ██ █▄   ██");
    console.log("▄████████▀ ▄████▄██████▀█████▀  ▀█████▀▄████▄    ▀████▀███▄█  ██ ██████▀");
    console.log("                                                           ██ ██        ");
    console.log("                                                           ▀███         ");
});

// this must be the last line...
client.login(process.env.TOKEN);