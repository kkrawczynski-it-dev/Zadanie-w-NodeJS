var data, template, html;
var url = "http://jsonplaceholder.typicode.com/posts";

//temp
var randomObj = {
    name: "John"
};

$(document).ready(function(){
    $.getJSON(url, function(randomObj) {
        // Mustache + template

        template ="<h1>{{randomString}}</h1>";
        html = Mustache.to_html(template,randomObj);
        $('#templateArea').append(html);
        //document.write(html);
    });
});

    // replaced with data from external source in json format
    /*
    data = {
        name: "some name",
        sites: ["a","b","c"]
    };
    */

    // Mustache + template
/*
        template ="<h1>{{name}}</h1>";
        html = Mustache.to_html(template,data);
        document.write(html);

*/



