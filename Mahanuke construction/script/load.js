var mother = document.querySelector(".mother");
/*mother for all divs */
db.collection("data").get().then((snapshot) => {
    snapshot.forEach(doc => {
        /*holder div */
        var div1 = document.createElement("div")
        div1.setAttribute("class", "holder")
        mother.appendChild(div1)
            /*holder div */
            /*children of holder div*/
        var tittle = document.createElement("h2");
        tittle.setAttribute("class", "h2");
        tittle.textContent = doc.data().name;
        div1.appendChild(tittle);

        var discription = document.createElement("p");
        discription.setAttribute("class", "info");
        discription.textContent = doc.data().details;
        div1.appendChild(discription);
        if (doc.data().pic) {
            var img = document.createElement("img");
            img.setAttribute("class", "img");
            img.src = doc.data().pic;
            div1.appendChild(img);
        }

    });
})