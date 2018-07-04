var data, template, template2, templateBig, html, id, allFields;
var url = "http://jsonplaceholder.typicode.com/posts";


$(document).ready(function(){
    $.getJSON(url, function(randomObj) {
        
        templateBig = `<div class="row">
        <div class="col-3">
              <ul id="userId">UserId + title</ul>
        </div>
        <div class="col-9">
              <h1 id="templateArea">Test</h1>
        </div>
        </div>`;

        allFields = Mustache.to_html(templateBig,"something");
            $('#myTemplate').append(allFields);
        
    
        // Pobieranie wszystkich nagłówków
        template ="<h1>{{title}}</h1>";
        randomObj.forEach(title => {
            html = Mustache.to_html(template,title);
            $('#templateArea').append(html);
        });

        // Tworzenie listy userId
        template2="<li>{{userId}}</li>";
        randomObj.forEach(userId => {
            userId = Mustache.to_html(template2,userId);
            $('#userId').append(userId);
        });
       

    });
});




