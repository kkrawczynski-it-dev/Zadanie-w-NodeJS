var data, template, html;
var url = "http://jsonplaceholder.typicode.com/posts";

//temp
var randomObj = {
    name: "John"
};

$(document).ready(function(){
    $.getJSON(url, function(randomObj) {
        // Mustache + template
        template ="<h1>{{title}}</h1>";

        randomObj.forEach(title => {
            html = Mustache.to_html(template,{title});
            $('#templateArea').append(html);
        });

        
        //html = Mustache.to_html(template,{title: "cos"});
        
        //html = Mustache.to_html(template,{randomObj});
        //$('#templateArea').html(html);
        //document.write(html);
    });
});




