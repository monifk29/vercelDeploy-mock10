// Write All `All Movies`  Page Script Here

var moviesData = JSON.parse(localStorage.getItem("movie-list"));

let buyLocal = JSON.parse(localStorage.getItem("buy-list")) || []



console.log(moviesData);

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

        var btn = document.createElement("button");
        btn.innerText = "Buy"
        btn.addEventListener("click",() => {
            //   console.log(e);

              buyLocal.push(e);
              localStorage.setItem("buy-list",JSON.stringify(buyLocal));

            
    let deleteItem = moviesData.filter(item => {
        return item != e
    });

    console.log(deleteItem,"123");

    localStorage.setItem("movie-list",JSON.stringify(deleteItem));
    location.reload() 

        });


    
        tr.append(movie_td,actor,des,date,cat,price,btn);
        tbody[0].append(tr);
    });
}

dataMapFun(moviesData);


let filterCat = document.getElementById("filter")

filterCat.addEventListener("change",handleFilter);

function handleFilter(){

   

    let filerData = moviesData.filter(item => {
        return item.cat == filterCat.value
    });

    tbody[0].innerHTML = "" ;

    dataMapFun(filerData)
}




document.getElementById("movie-count").innerText = moviesData.length;
