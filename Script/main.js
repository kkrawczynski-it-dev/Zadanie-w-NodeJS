var data, template, html, id;
var url = "http://jsonplaceholder.typicode.com/posts";


$(document).ready(function(){
    $.getJSON(url, function(randomObj) {
        
        // Pierwsze zadanie
        template ="<h1>{{title}}</h1>";
        randomObj.forEach(title => {
            html = Mustache.to_html(template,title);
            $('#templateArea').append(html);
        });

        // Tworzenie listy id
        template2="<li>{{id}}</li>";
        randomObj.forEach(id => {
            id = Mustache.to_html(template2,id);
            $('#userId').append(id);
        });


    });
});




