
var request = require("request"),
cheerio = require("cheerio"),
url = "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/";

request(url, function (error, response, body) {
    // load the page into Cheerio
    var $page = cheerio.load(body),
      text = $page("body").text()

      text = text.replace(/\s+/g, " ").toLowerCase();

      var text_split = text.split(" ");
      for(var k = 1; k < text_split.length; k++) {
          
         
        if(text_split[k] == "totalt"){
          //console.log(k)
          var ord_totalt = k;
          break;
        }
      }

      var sverigetotal = ord_totalt + 2;
      console.log(text_split[sverigetotal]);
      //console.log(text_split);
     
});