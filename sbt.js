var Discord = require("discord.js"); //uses discord.js library
const path = require('path');
var bot = new Discord.Client();  //initiate new discord Client
const settings = require('./settings.json')

//define the embed for the Menu
const menuEmbed = new Discord.RichEmbed()
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField('@@beermenu', 'Our selection of beers, bottled or on tap. ')
  .addField('@@cocktailmenu', 'Our selection of liquors and mixed drinks! ');

//define the embed for the beermenu
const beerMenu = new Discord.RichEmbed()
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField('@@beermenu', 'Our selection of beers, bottled or on tap. ')
  .addField('@@cocktailmenu', 'Our selection of liquors and mixed drinks! ');


//start main bot
bot.on("message", msg => 

    {
        let prefix = "@@"; // Set the prefix

        if (msg.content.startsWith(prefix + "shutdown")) {
            msg.channel.sendMessage("Shutting down...").then(() => { process.exit(); })
        } //Shutdown and exit

        var triggerWords = ["aceirl" , "test", "blue moon", "apple martini", "budweiser", "corellian ale", "corona", "dos equis", "guinness", "heineken", "john collins", "long island iced tea", "miller", "pepeirl", "pepeirl2", "sam adams", "sex on the beach", "stella", "vinylirl", "yuengling", "bud light", "miller lite", "water"]; //Array to hold the words that correspond to images
        var triggerLength = triggerWords.length;
        
        if(!msg.content.startsWith(prefix)) return; // Exit and stop if it's not there
        
        if(msg.author.bot) return;   // Exit if any bot

        if(msg.content.startsWith(prefix)) //Look for prefix
        {
            if (msg.content.toLowerCase() === prefix + "menu")//present the menu options; this is for presentation and also to keep menu lists manageable
            {
                msg.channel.sendEmbed(menuEmbed, 'There are two menus to choose from.',{ disableEveryone: true });

            }



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



/*        if (msg.content.startsWith(prefix)) //This code sends a DM message to a specific user ID (Ace in this case)
        {
            if(msg.content.includes("aceIRL"))
            {
                bot.users.get("xxxx").sendFile('/VSCode/SBT2001/images/robbie.jpeg'); 
                msg.channel.sendMessage("Spamming Ace Completed.");
                return;
            }
        }*/ //This code sends a DM message to a specific user ID (Ace in this case)

    }
);

bot.login(settings.token);

