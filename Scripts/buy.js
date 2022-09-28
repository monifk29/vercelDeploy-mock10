// Write All `My Movies`  Page Script Here

let buyLocal = JSON.parse(localStorage.getItem("buy-list"));

var tbody = document.getElementsByTagName("tbody");

function dataMapFun(data){


    data.map((e) => {
        var tr = document.createElement("tr");
    
        var movie_td = document.createElement("td");
        movie_td.innerText = e.movie;
    
        var actor = document.createElement("td");
        actor.innerText = e.actor;
    
        var des = document.createElement("td");
        des.innerText = e.des;
    
        var date = document.createElement("td");
        date.innerText = e.date;
    
        var cat = document.createElement("td");
        cat.innerText = e.cat;
    
        var price = document.createElement("td");
        price.innerText = e.price;

       


    
        tr.append(movie_td,actor,des,date,cat,price);
        tbody[0].append(tr);
    });
}

dataMapFun(buyLocal);