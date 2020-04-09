//Bruhmoment31
const https = require('https')
const Discord = require('discord.js')
const fetch = require("node-fetch");
const randomPuppy = require('random-puppy')
const rp = require('request-promise');
const client = new Discord.Client()
sizes = ["large", "small"]
facts = ["Orphans are overrated", "Bush did 9/11", "A blue whales penis is about eight metres in length", "Airplane fuel can't melt steel", "The oldest “your mom” joke was discovered on a 3,500 year old Babylonian tablet.", "7% of American adults believe that chocolate milk comes from brown cows.", "Billy goats urinate on their own heads to smell more attractive to females.", "The inventor of the Frisbee was cremated and made into a Frisbee after he died.", "In physics, string theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings. It describes how these strings propagate through space and interact with each other. On distance scales larger than the string scale, a string looks just like an ordinary particle, with its mass, charge, and other properties determined by the vibrational state of the string. In string theory, one of the many vibrational states of the string corresponds to the graviton, a quantum mechanical particle that carries gravitational force. Thus string theory is a theory of quantum gravity.", "In physics, string theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings. It describes how these strings propagate through space and interact with each other. On distance scales larger than the string scale, a string looks just like an ordinary particle, with its mass, charge, and other properties determined by the vibrational state of the string. In string theory, one of the many vibrational states of the string corresponds to the graviton, a quantum mechanical particle that carries gravitational force. Thus string theory is a theory of quantum gravity.", "https://cdn.discordapp.com/attachments/671720677476401177/688122805216477289/image0.jpg"];
var bruhmoment31 = "406870015690932234"



//--//
//web scraper total corona
var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/";


//--//


//--//
//Twitter from regionstockholm
var Twit = require('twit');
var config = require('./config.js');
var fs = require('fs')
var substring1 = 'ytterligare';
var substring2 = 'totalt';
var randomnumber = 0;
var factnumber = 0;
var casesglo, deathsglo, casesswe, deathsswe, info, $, textwom, textwomg, recoveredswe, recoveredglo, newdeathsswe, newcasesswe, newdeathsglo, newcasesglo;







//--//

//--//
//web server


//--//


//discord bot actions

client.on('ready', () => {

    console.log("Connected as " + client.user.tag)

    game = "Fortnite";
    watch = "Top 10 n-words";
    music = "Penis Music";

    //client.user.setActivity('Penis Music', { type: 'LISTENING'} ); console.log("Listening set to: Penis Music");
    client.user.setActivity(game, { type: 'PLAYING' }); console.log("Game set to: ", game);
    //client.user.setActivity(watch, { type: 'WATCHING'} ); console.log("Watching set to: " + watch);

});



client.on("message", (message) => {



    if (message.author.id != '685539330671902755') {
        client.channels.cache.get('671720677476401177').send("> **Message: '" + message.content + "' " + "sent by " + message.author.tag + " in __#" + message.channel.name + "__**");
        console.log("Message: '" + message.content + "' " + "sent by " + message.author.tag + " in #" + message.channel.name);
    }







    if (message.content == "coronavirus.info") {

        message.channel.send("**[nCoV API]** *Acquiring data . . .*")






        rp('https://www.worldometers.info/coronavirus/')
            .then(function (htmlglo) {
                $ = cheerio.load(htmlglo);



                casesglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2)").text()
                deathsglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(4)").text()
                recoveredglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(6)").text()
                newcasesglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(3)").text()
                newdeathsglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(5)").text()
                newcasesswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(27) > td:nth-child(3)").text()
                newdeathsswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(27) > td:nth-child(5)").text()
                casesswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(27) > td:nth-child(2)").text()
                deathsswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(27) > td:nth-child(4)").text()
                recoveredswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(27) > td:nth-child(6)").text()

                if (newcasesswe == '') {
                    newcasesswe = '+0'
                }
                if (newdeathsswe == '') {
                    newdeathsswe = '+0'
                }




                message.channel.send({

                    "embed": {
                        "title": "**COVID19**",
                        "description": "Coronavirus/SARS-CoV-2",
                        "url": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
                        "color": 8402144,

                        "footer": {
                            "icon_url": "https://i.redd.it/turyrb5prf431.png",
                            "text": "Bruhmoment31"
                        },
                        "thumbnail": {
                            "url": "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg"
                        },
                        "image": {
                            "url": "https://cdn.discordapp.com/attachments/671720677476401177/696683023793389698/waltermask.png"
                        },



                        "fields": [
                            {
                                "name": "__COVID19 **Globally**__",
                                "value": "Total Confirmed: **" + casesglo + " **(" + newcasesglo + ")\n" + "Total Deaths: **" + deathsglo + " **(" + newdeathsglo + ")\n" + "Total Recovered: **" + recoveredglo + "** \n"
                            },
                            {
                                "name": "__COVID19 in **Sweden**__",
                                "value": "Total Confirmed: **" + casesswe + " **(" + newcasesswe + ")\n" + "Total Deaths: **" + deathsswe + " **(" + newdeathsswe + ")\n" + "Total Recovered: **" + recoveredswe + "** \n"
                            },
                            {
                                "name": "Coronavirus Map",
                                "value": "[Johns Hopkins University nCoV19 Map](<https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6>)",
                                "inline": true
                            },
                            {
                                "name": "SVT",
                                "value": "[SVT senaste nytt](<https://www.svt.se/nyheter/utrikes/senaste-nytt-om-coronaviruset>)",
                                "inline": true
                            }
                        ]
                    }

                });
            });














        //--// coronavirus stockholm













        //message.channel.send("__Sverige COVID19__ " + "\n" + "```" + "|Senaste rapport: " + coronainfected_new + " nya coronafall i Stockholm" + "\n" + "|Totalt: " + coronainfected_total + " coronafall i Stockholm" + "\n" + "|Rapporterades: " + date_real + "```");



    }



    if (message.content.includes("!send") && message.author.id == "406870015690932234") {

        var message_submit = message.content.replace('!send ', '');

        try {
            message.delete();
            message.channel.send(message_submit);

        }
        catch (error) {
            console.log(error)
        }

    }

    else if (message.content.includes("!send")) {
        message.channel.send(message.author.username + " cringe")
    }
    if (message.content.includes("!dm") && message.author.id == bruhmoment31) {



        console.log("bruh")

        bruhid.send("bruh")

    }


    if (message.content == "facts.adam") {
        message.channel.send("Adam got the gay");
    }

    if (message.content == "facts.mesothelioma") {
        message.channel.send("If you or a loved one has been diagnosed with Mesothelioma, you may be entitled to financial compensation");
    }

    if (message.content == "facts") {

        var randomfact = Math.floor((Math.random() * 11) + 0);

        message.channel.send(facts[randomfact]);

    }

    else if (message.content == "nword") {
        message.channel.send("nibba");
    }



    else if (message.content == "walter") {
        message.channel.send({ files: ["walter.jpeg"] })
    }

    else if (message.content == "maymay.dank") {

        sub = "dankmemes"
        console.log("Subreddit: " + sub)

        randomPuppy(sub)
            .then(url => {
                console.log(url);
                message.channel.send({
                    files: [url]
                })
            })




    }

    else if (message.content == "maymay.deepfried") {

        sub = "deepfriedmemes"
        console.log("Subreddit: " + sub)

        randomPuppy(sub)
            .then(url => {
                console.log(url);
                message.channel.send({
                    files: [url]
                })
            })
    }

    else if (message.content.includes("reddit.")) {
        reddittext = message.content.split(".")
        sub = reddittext[1]
        console.log("Subreddit: " + sub)
        if (reddittext[1] != '') {

            randomPuppy(sub)
                .then(url => {
                    console.log(url);
                    message.channel.send({
                        files: [url]
                    })
                })






        }

        else {
            message.channel.send("No subreddit defined");
        }
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

    else if (message.content == "adam.bild") {
        adambild = "https://media.discordapp.net/attachments/406870922008723458/685869139923173380/IMG-20200107-WA0001.jpg?width=449&height=799"
        message.channel.send({ files: [adambild] })
    }

    else if (message.content == "tom.bild") {
        tombild = "https://cdn.discordapp.com/attachments/406870922008723458/685869072331702478/image0.jpg"
        message.channel.send({ files: [tombild] })
    }

    else if (message.content == "gay.bild") {
        alexbild = "https://cdn.discordapp.com/attachments/406870922008723458/686184035416014907/Screenshot_20200222-232528.png"
        message.channel.send({ files: [alexbild] })
    }

    else if (message.content.includes(".size")) {
        var thing = message.content.split(".");


        var item = sizes[Math.floor(Math.random() * sizes.length)];

        if (message.author.id == "406870015690932234") {
            item = sizes[0]
            message.channel.send(thing[0] + " size: " + item);

        }
        else {
            message.channel.send(thing[0] + " size: " + item);
        }
    }


    if (message.content.includes("!mute")) {
        if (message.author.id == "406870015690932234") {
            var usr = message.content.split(" ");
            console.log("Muted: " + usr[1]);
        }
        else {
            message.channel.send(message.author.name + ", That's kinda cringe");
        }
    }

    if (message.content == "server.call") {
        message.channel.send("http://www.discordapp.com/channels/406870922008723456/406870922008723460");
    }


});


bot_secret_token = "Njg1NTM5MzMwNjcxOTAyNzU1.Xm6OPQ.iHjGv-_8alv57B9fxUNfGxRStCA";

client.login(bot_secret_token);
