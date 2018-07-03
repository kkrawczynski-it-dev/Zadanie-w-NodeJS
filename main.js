$(document).ready(function(){
    var data, template, html;
    data = {
        name: "some name",
        sites: ["a","b","c"]
    };
        template ="<h1>{{name}}</h1>";
        html = Mustache.to_html(template,data);
        document.write(html);

})

