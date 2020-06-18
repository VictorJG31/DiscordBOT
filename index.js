//Bruhmoment31
const https = require('https')
const Discord = require('discord.js')
const fetch = require("node-fetch");
const randomPuppy = require('random-puppy')
const rp = require('request-promise');
const client = new Discord.Client();
const imgur = require("imgur");
const cheerio = require('cheerio');

sizes = ["large", "small"]
facts = ["Orphans are overrated", "Bush did 9/11", "A blue whales penis is about eight metres in length", "Airplane fuel can't melt steel", "The oldest “your mom” joke was discovered on a 3,500 year old Babylonian tablet.", "7% of American adults believe that chocolate milk comes from brown cows.", "Billy goats urinate on their own heads to smell more attractive to females.", "The inventor of the Frisbee was cremated and made into a Frisbee after he died.", "In physics, string theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings. It describes how these strings propagate through space and interact with each other. On distance scales larger than the string scale, a string looks just like an ordinary particle, with its mass, charge, and other properties determined by the vibrational state of the string. In string theory, one of the many vibrational states of the string corresponds to the graviton, a quantum mechanical particle that carries gravitational force. Thus string theory is a theory of quantum gravity.", "In physics, string theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings. It describes how these strings propagate through space and interact with each other. On distance scales larger than the string scale, a string looks just like an ordinary particle, with its mass, charge, and other properties determined by the vibrational state of the string. In string theory, one of the many vibrational states of the string corresponds to the graviton, a quantum mechanical particle that carries gravitational force. Thus string theory is a theory of quantum gravity.", "https://cdn.discordapp.com/attachments/671720677476401177/688122805216477289/image0.jpg"];
//var bruhmoment31ID = "406870015690932234"




var casesglo, deathsglo, casesswe, deathsswe, $, recoveredswe, recoveredglo, newdeathsswe, newcasesswe, newdeathsglo, newcasesglo;









client.on('ready', () => {

    console.log("Connected as " + client.user.tag)

    game = "Fortnite";
    watch = "Top 10 n-words";
    music = "Penis Music";

    //client.user.setActivity('Penis Music', { type: 'LISTENING'} ); console.log("Listening set to: Penis Music");
    client.user.setActivity(game, { type: 'PLAYING' }); console.log("Game set to: ", game);
    //client.user.setActivity(watch, { type: 'WATCHING'} ); console.log("Watching set to: " + watch);

});

client.on("messageUpdate", (oldMessage, newMessage) => {
    if (newMessage.author.id != '685539330671902755') {
        var d = new Date()

        var dformat = [d.getDate(),
        d.getMonth() + 1,
        d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');

        client.channels.cache.get('671720677476401177').send({
            "embed": {
                "title": "Message Edit Log",
                "color": 3066993,

                "fields": [
                    {
                        "name": "**Old Message: **",
                        "value": "```" + oldMessage.content.replace(/`/g, "") + "```"
                    },
                    {
                        "name": "**New Message: **",
                        "value": "```" + newMessage.content.replace(/`/g, "") + "```"
                    },
                    {
                        "name": "**Date:**",
                        "value": "`" + dformat + "`"
                    },
                    {
                        "name": "**Sent by:** ",
                        "value": "<@" + newMessage.author.id + ">",
                        "inline": true
                    },
                    {
                        "name": "**In channel:**",
                        "value": "<#" + newMessage.channel.id + ">",
                        "inline": true
                    }
                ]
            }
        })
    }
});

client.on("message", (message) => {


    if (message.attachments.size > 0 && message.author.id != '685539330671902755') {
        var attachment = (message.attachments).array();
        //var attachmentcomment =
        var d = new Date(),
            dformat = [d.getDate(),
            d.getMonth() + 1,
            d.getFullYear()].join('/') + ' ' +
                [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        imgur.uploadUrl(attachment[0].url)
            .then(function (json) {
                client.channels.cache.get('671720677476401177').send({
                    "embed": {
                        "title": "Message Log",
                        "color": 2348357,
                        "timestamp": new Date(),
                        "image": { "url": json.data.link },

                        "fields": [
                            {
                                "name": "**Attachment Link:**",
                                "value": json.data.link
                            },
                            {
                                "name": "**Date:**",
                                "value": "`" + dformat + "`"
                            },
                            {
                                "name": "**Sent by:**",
                                "value": "<@" + message.author.id + ">",
                                "inline": true
                            },
                            {
                                "name": "**In channel:**",
                                "value": "<#" + message.channel.id + ">",
                                "inline": true
                            }
                        ]


                    }




                });

                console.log("Message: '" + json.data.link + "' " + "sent by " + message.author.tag + " in #" + message.channel.name);

            });
    }

    if (message.author.id != '685539330671902755' && message.content != '') {
        var d = new Date(),
            dformat = [d.getDate(),
            d.getMonth() + 1,
            d.getFullYear()].join('/') + ' ' +
                [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');

        client.channels.cache.get('671720677476401177').send({

            "embed": {
                "title": "Message Log",
                "color": 2348357,


                "fields": [
                    {
                        "name": "**Message: **",
                        "value": "```" + message.content.replace(/`/g, "") + "```"
                    },
                    {
                        "name": "**Date:**",
                        "value": "`" + dformat + "`"
                    },
                    {
                        "name": "**Sent by:** ",
                        "value": "<@" + message.author.id + ">",
                        "inline": true
                    },
                    {
                        "name": "**In channel:**",
                        "value": "<#" + message.channel.id + ">",
                        "inline": true
                    }
                ]
            }
        });

        console.log("Message: '" + message.content + "' " + "sent by " + message.author.tag + " in #" + message.channel.name);
    }


    if (message.content.includes(">mute") && message.author.id == '406870015690932234') {

        var msgarray = message.content.split(" ");
        var mutedrole = message.guild.roles.cache.find(r => r.name == "Muted");
        var usr = message.mentions.members.first();

        usr.roles.add(mutedrole).catch(console.error);
        message.channel.send("__Muted__ <:dab:633323859411599371>");

    }


    else if (message.content.includes(">unmute") && message.author.id == "406870015690932234") {

        var msgarray = message.content.split(" ");
        var mutedrole = message.guild.roles.cache.find(r => r.name == "Muted");
        var usr = message.mentions.members.first();

        usr.roles.remove(mutedrole).catch(console.error);
        message.channel.send("**__Unmuted__**");

    }



    else if (message.content.startsWith("coronavirus.")) {

        message.channel.send("**[nCoV API]** *Acquiring data . . .*")


        var selected_country = message.content.replace("coronavirus.", "");



        rp('https://www.worldometers.info/coronavirus/')
            .then(function (htmlglo) {
                $ = cheerio.load(htmlglo);



                casesglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(3)").text()
                deathsglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(5)").text()
                recoveredglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(7)").text()
                newcasesglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(4)").text()
                newdeathsglo = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(6)").text()

                for (var tablenr = 1; tablenr < 215; tablenr++) {

                    if ($("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(" + tablenr + ") > td:nth-child(2)").text() == selected_country) {

                        newcasesswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(" + tablenr + ") > td:nth-child(4)").text()
                        newdeathsswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(" + tablenr + ") > td:nth-child(6)").text()
                        casesswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(" + tablenr + ") > td:nth-child(3)").text()
                        deathsswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(" + tablenr + ") > td:nth-child(5)").text()
                        recoveredswe = $("#main_table_countries_today > tbody:nth-child(2) > tr:nth-child(" + tablenr + ") > td:nth-child(7)").text()

                        if (newcasesswe == '') {
                            newcasesswe = '+0'
                        }
                        if (newdeathsswe == '') {
                            newdeathsswe = '+0'
                        }
                        break;
                    }
                }
                if (casesswe != undefined) {

                    message.channel.send({

                        "embed": {
                            "title": "**COVID19**",
                            "description": "Coronavirus/SARS-CoV-2",
                            "url": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
                            "color": 8402144,

                            "footer": {
                                "icon_url": "https://i.redd.it/turyrb5prf431.png",
                                "text": "bruhmoment31"
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
                                    "name": "__COVID19 in **" + selected_country + "**__",
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
                    casesswe = undefined;
                }

                else {
                    message.channel.send("Cannot find specified country: " + selected_country + ". (__Note__: 1) First letter of country shall be upprcase 2) Countries with acronymss: USA, S. Korea, UAE)");
                }


            });
    }



    else if (message.content.startsWith(">send") && message.author.id == "406870015690932234") {

        var channel_id = message.content.split(" ")[1];
        var input_array = message.content.split(" ");
        var send_message = input_array.slice(2).join(" ");

        try {
            client.channels.cache.get(channel_id).send(send_message);
            console.log("Sent: \"" + send_message + "\" to #" + message.channel.name);

        }
        catch (error) {
            console.log(error)
            message.channel.send("__Invalid Channel ID: __" + channel_id)
        }

    }



    else if (message.content == "fact.mesothelioma") {
        message.channel.send("If you or a loved one has been diagnosed with Mesothelioma, you may be entitled to financial compensation");
    }

    else if (message.content == "fact.random") {

        var randomfact = Math.floor((Math.random() * 11) + 0);

        message.channel.send(facts[randomfact]);

    }


    else if (message.content == "bild.walter") {
        message.channel.send({ files: ["walter.jpeg"] })
    }

    else if (message.content == "maymay.dank") {
        message.channel.send("**[Reddit API]** *Acquiring Dank Maymay . . .*")
        sub = "dankmemes"


        randomPuppy(sub)
            .then(url => {
                console.log(url);
                message.channel.send({
                    files: [url]
                })
            })
    }

    else if (message.content == "maymay.deepfried") {
        message.channel.send("**[Reddit API]** *Acquiring Deepfried Maymay . . .*")
        sub = "deepfriedmemes"


        randomPuppy(sub)
            .then(url => {
                console.log(url);
                message.channel.send({
                    files: [url]
                })
            })
    }

    else if (message.content.startsWith("reddit.")) {
        message.channel.send("**[Reddit API]** *Acquiring image . . .*")
        reddittext = message.content.split(".")
        sub = reddittext[1]


        if (reddittext[1] != '') {
            randomPuppy(sub)
                .then(url => {


                    if (url != undefined) {

                        message.channel.send({
                            files: [url]
                        })
                    }
                    else { console.log("[ERROR] Invalid subreddit"); message.channel.send("Invalid subreddit: " + sub); }
                })
        }

        else {
            message.channel.send("No subreddit defined");
        }
    }

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

    else if (message.content.includes(".rate")) {

        var thing_rate = message.content.replace(".rate", "");
        var rating = Math.floor(Math.random() * 11);
        message.channel.send(thing_rate + ": __" + rating + "/10__");
    }


    else if (message.content.includes("!mute")) {
        if (message.author.id == "406870015690932234") {
            var usr = message.content.split(" ");
            console.log("Muted: " + usr[1]);
        }
        else {
            message.channel.send(message.author.name + ", That's kinda cringe");
        }
    }
});


bot_secret_token = "Njg1NTM5MzMwNjcxOTAyNzU1.Xm6OPQ.iHjGv-_8alv57B9fxUNfGxRStCA";

client.login(bot_secret_token);
