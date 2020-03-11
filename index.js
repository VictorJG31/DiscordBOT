const Discord = require('discord.js')
const fetch = require("node-fetch");
const randomPuppy = require('random-puppy')
const client = new Discord.Client()
sizes = ["large", "small"]
var bruhmoment31 = "406870015690932234"

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Twitter from regionstockholm
var Twit = require('twit');
var config = require('./config.js');
var fs = require('fs')
var substring1 = 'ytterligare';
var substring2 = 'totalt';
textarray = [];
datearray = [];

var T = new Twit(config);

var options = {
    screen_name: 'regionstockholm',
    count: 20, exclude_replies: true, include_rts: false, tweet_mode: 'extended'
}

T.get('statuses/user_timeline', options, function (err, data) {

    for (var i = 0; i < data.length; i++) {

        tweettext = data[i].full_text;

        if (tweettext.includes(substring1)) {
            var currentnr = i;
            var recent_report_text = data[i].full_text
            textarray.push(recent_report_text)
            var recent_report_date = data[i].created_at
            datearray.push(recent_report_date)




        }



    }

    var split_text = textarray[0].split(" ");
    for (var j = 0; j < split_text.length; j++) {
        if (split_text[j] == substring1) {

            var coronainfected_new = split_text[j - 1]

            var coronainfected_new_check = parseInt(coronainfected_new);
            if (isNaN(coronainfected_new_check)) {
                console.log("This isn't an integer.")
            }
            else {
                console.log("Senaste rapport: " + coronainfected_new + " nya coronafall. ")
            }

        }

        else if (split_text[j] == substring2) {

            var coronainfected_total = split_text[j + 1]

            var coronainfected_total_check = parseInt(coronainfected_total);
            if (isNaN(coronainfected_total_check)) {
                console.log("This isn't an integer.")
            }
            else {
                console.log("Totalt: " + coronainfected_total + " coronafall i Stockholm. ")
            }


        }


    }

    var date_real = datearray[0].replace('+0000 ', '')
    console.log("Datum: " + date_real);

    ncov_new = "Senaste rapport: " + coronainfected_new + " nya coronafall";
    var ncov_total = "Totalt: " + coronainfected_total + " coronafall i Stockholm";
    var ncov_date = "Datum: " + date_real
    global.ncov_array = [ncov_new, ncov_total, ncov_date]
    
    
})



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//discord bot actions

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    
});

client.on("message", (message) => {

    if(message.content == "coronavirus.info") {
        message.channel.send(ncov_array)
    }
    
    if(message.content == "!dm" && message.author.id == bruhmoment31){



        console.log(message.author)

        message.author.send(message.author.id)
        
    }
        

    if(message.content == "facts"){ 
        message.channel.send("Adam got the gay"); 
    } 


    else if(message.content == "nword") { 
		message.channel.send("nibba"); 
    }    
    
  

    else if(message.content == "walter") {
        message.channel.send("Walter", {files: ["walter.jpeg"]})
    }
    
    else if(message.content == "maymay.dank") {
       
        sub = "dankmemes"
        randomPuppy()
        .then(url => {
            console.log(url);
            message.channel.send({
                files: [url]
              })
        })
    
   
    }

    else if(message.content == "maymay.deepfried") {
       
        sub = "deepfriedmemes"
        randomPuppy()
        .then(url => {
            console.log(url);
            message.channel.send({
                files: [url]
              })
        })   
    }

    else if(message.content.includes("reddit.")) {
        var reddittext = message.content.split(".") 
        sub = reddittext[1]    
        console.log("Subreddit: " + sub)
        
        randomPuppy()
        .then(url => {
            console.log(url);
            message.channel.send({
                files: [url]
              })

        })      
       
    }

    /*else if(message.content.includes("bruh")) {
        var sum = 0;
        if(message.author.id != "685539330671902755") {
            for (var i = 1; i <= 3; i++) {
            sum = sum + i;
            message.channel.send("bruhimus")
        }
        }
        
            
        
    }*/

    else if(message.content == "adam.bild") {
        adambild = "https://media.discordapp.net/attachments/406870922008723458/685869139923173380/IMG-20200107-WA0001.jpg?width=449&height=799"
        message.channel.send({files: [adambild]})
    }

    else if(message.content == "tom.bild") {
        tombild = "https://cdn.discordapp.com/attachments/406870922008723458/685869072331702478/image0.jpg"
        message.channel.send({files: [tombild]})
    }

    else if(message.content == "gay.bild") {
        alexbild = "https://cdn.discordapp.com/attachments/406870922008723458/686184035416014907/Screenshot_20200222-232528.png"
        message.channel.send({files: [alexbild]})
    }

    else if(message.content.includes(".size")) {
        var thing = message.content.split(".") 


        var item = sizes[Math.floor(Math.random() * sizes.length)]

        if(message.author.id == "406870015690932234") {
            item = sizes[0]
            message.channel.send(thing[0] + " size: " + item)
            
        }
        else {
            message.channel.send(thing[0] + " size: " + item)
        }
        
    }
    

    

   if(message.content.includes("!mute")) {
       if(message.author.id == "406870015690932234") {
            var usr = message.content.split(" ")
            console.log("Muted: " + usr[1])
       }

       else {
           message.channel.send(message.author.name + ", That's kinda cringe")
       }
   }
    console.log("Message: '" + message.content + "' " + "sent by: " + message.author.tag)
    
});


bot_secret_token = "Njg1NTM5MzMwNjcxOTAyNzU1.XmKTIg.0ga_LJSdzxFHqRdSNonE4_N5l6Q"

client.login(bot_secret_token)