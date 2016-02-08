var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 8000;

var url = "http://www.indeed.com/jobs?q=.net&l=Seattle%2C+WA";
request(url, function (err, resp, body) {
    var $ = cheerio.load(body);
    var companyName = $('.company');
    var companyNameText = companyName.text();

    //$('.company').filter(function () {
    //    var companyName = $(this);
    //    companyNameText = companyName.text();
    //})
    //console.log(companyNameText);

    var jobTitle = $('.jobtitle');
    var jobTitleText = jobTitle.text();
    //console.log(jobTitleText);
    var location = $('.location');
    var locationText = location.text();

    var summary = $('.summary');
    var summaryText = summary.text();
    //console.log(summaryText);
    var job = {
        jobTitle : jobTitleText,
        location : locationText,
        companyName : companyNameText,
        summary : summaryText
    };

    console.log(job);
});

app.listen(port);
console.log('Server is listening on ' + port);
