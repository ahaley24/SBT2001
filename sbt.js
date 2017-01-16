var Discord = require("discord.js"); //uses discord.js library
const path = require('path');
var bot = new Discord.Client();  //initiate new discord Client

bot.on("message", msg => 

    {
        let prefix = "@@"; // Set the prefix
        
        if(!msg.content.startsWith(prefix)) return; // Exit and stop if it's not there
        
        if(msg.author.bot) return;   // Exit if any bot

        if (msg.content.startsWith(prefix + "ping")) { 
            msg.channel.sendMessage("pong!");
        }
        if (msg.content.startsWith(prefix + "aceIRL")) { 
            msg.channel.sendFile('/VSCode/SuperBartender2001/images/robbie.jpeg'); 
        } 

        if (msg.content.startsWith(prefix + "shutdown")) { 
            msg.channel.sendMessage("Shutting down...").then(() => { process.exit(); })
        } 
        if(msg.content.includes("corellian ale")){
            msg.channel.sendMessage("In a clean glass...");
        }
    }
);

bot.login("botTokenHereKTHX");