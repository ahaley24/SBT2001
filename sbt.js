var Discord = require("discord.js"); //uses discord.js library
const path = require('path');
var bot = new Discord.Client();  //initiate new discord Client

bot.on("message", msg => 

    {
        let prefix = "@@"; // Set the prefix

        var triggerWords = ["robbie" , "test"]; //Array to hold the words that correspond to images
        var triggerLength = triggerWords.length;
        
        if(!msg.content.startsWith(prefix)) return; // Exit and stop if it's not there
        
        if(msg.author.bot) return;   // Exit if any bot

        if(msg.content.startsWith(prefix))
        {
            for (var i = 0; i < triggerLength; i++)
            {
                if (msg.content === prefix + triggerWords[i])
                {
                    msg.channel.sendMessage("The value is " + triggerWords[i]);
                    msg.channel.sendFile('/VSCode/SBT2001/images/' + triggerWords[i] + '.jpg');
                    return;
                }
            }

/*            if (msg.content === prefix + triggerWords[0]) 
            { 
                msg.channel.sendMessage("pong!");
                var test = msg.content;
                msg.channel.sendMessage("The test var is " + test);
                return;
            }*/

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



        if (msg.content.includes(prefix + "aceIRL")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/robbie.jpg'); 
        } 


        if (msg.content.startsWith(prefix + "shutdown")) { 
            msg.channel.sendMessage("Shutting down...").then(() => { process.exit(); })
        } 
        
/*
        //Just for fun 


        if (msg.content.startsWith(prefix + "aceIRL")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/robbie.jpeg'); 
        } 

        if (msg.content.startsWith(prefix + "vinylIRL")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/vinyl-irl.png'); 
        } 

        if (msg.content.startsWith(prefix + "pepeIRL")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/high-pepe.png'); 
        } 

        if(msg.content.includes("corellian ale")){
            msg.channel.sendFile("/VSCode/SBT2001/images/corellian-ale.jpg");
        }


        //Mixed Drinks


        if (msg.content.includes(prefix + "john collins")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/john-collins.jpg'); 
        } 

        if (msg.content.includes(prefix + "apple martini")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/apple-martini.jpg'); 
        } 

        if (msg.content.includes(prefix + "long island iced tea")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/long-island-iced-tea.png'); 
        } 

        if (msg.content.includes(prefix + "sex on the beach")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/sex-on-the-beach.jpg'); 
        } 


        //Beers


        if (msg.content.includes(prefix + "blue moon")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/blue-moon.jpg'); 
        } 

        if (msg.content.includes(prefix + "budweiser")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/budweiser.jpg'); 
        } 

        if (msg.content.includes(prefix + "dos equis")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/Dos-Equis.jpg'); 
        } 

        if (msg.content.includes(prefix + "heineken")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/Heineken.jpg'); 
        } 

        if (msg.content.includes(prefix + "guinness")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/Guinness.jpg'); 
        } 

        if (msg.content.includes(prefix + "samuel adams")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/Samuel-Adams.jpg'); 
        } 

        if (msg.content.includes(prefix + "stella artois")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/Stella.jpg'); 
        } 

        if (msg.content.includes(prefix + "yuengling")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/yuengling.jpg'); 
        } 

        if (msg.content.includes(prefix + "corona")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/corona.jpg'); 
        } 

        if (msg.content.includes(prefix + "miller")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/miller.jpg'); 
        } 

        if (msg.content.includes(prefix + "miller light")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/water-glass.jpg'); 
        } 

        if (msg.content.includes(prefix + "bud light")) { 
            msg.channel.sendFile('/VSCode/SBT2001/images/water-glass.jpg'); 
        } */
    }
);

bot.login("botTokenHereKTHX");