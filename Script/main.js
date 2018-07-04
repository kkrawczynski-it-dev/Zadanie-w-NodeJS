var data, template, template2, templateBig, html, id, allFields;
var url = "http://jsonplaceholder.typicode.com/posts";


$(document).ready(function(){
    $.getJSON(url, function(randomObj) {
        
        templateBig = `<div class="row">
        <div class="col-3">
              <ul id="field1">userId + title</ul>
        </div>
        <div class="col-9">
              <ul id="field2">body</ul>
        </div>
        </div>`;

        allFields = Mustache.to_html(templateBig,"something");
            $('#myTemplate').append(allFields);
        
        // field 2: json - body
        template ="<li>{{body}}</li>";
        randomObj.forEach(el => {
            html = Mustache.to_html(template,el);
            $('#field2').append(html);
        });

        // field1: json - userId + title
        template2="<li>{{userId}} {{title}}</li>";
        randomObj.forEach(el => {
            userId = Mustache.to_html(template2,el);
            $('#field1').append(userId);
        });
       

    });
});




