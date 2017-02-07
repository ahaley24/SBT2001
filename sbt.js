var Discord = require("discord.js"); //uses discord.js library
const path = require('path');
var bot = new Discord.Client();  //initiate new discord Client

bot.on("message", msg => 

    {
        let prefix = "@@"; // Set the prefix

        var triggerWords = ["aceirl" , "test", "blue moon", "apple martini", "budweiser", "corellian ale", "corona", "dos equis", "guinness", "heineken", "john collins", "long island iced tea", "miller", "pepeirl", "pepeirl2", "sam adams", "sex on the beach", "stella", "vinylirl", "yuengling", "bud light", "miller lite", "water"]; //Array to hold the words that correspond to images
        var triggerLength = triggerWords.length;
        
        if(!msg.content.startsWith(prefix)) return; // Exit and stop if it's not there
        
        if(msg.author.bot) return;   // Exit if any bot

        if(msg.content.startsWith(prefix)) //Look for prefix
        {
            for (var i = 0; i < triggerLength; i++) //Cycle through triggerwords array
            {
                if (msg.content.toLowerCase() === prefix + triggerWords[i]) //set case to lower and match msg to prefix+current triggerword. If no match, increment and retry
                {
                    //msg.channel.sendMessage("The value is " + triggerWords[i]);
                    msg.channel.sendFile('/VSCode/SBT2001/images/' + triggerWords[i] + '.jpg');
                    return;
                }
            }

        }
    }
);

bot.login("botTokenHereKTHX");

