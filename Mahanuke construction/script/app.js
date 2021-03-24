/*saving data*/


function savedata() {
    var title = document.querySelector("#text").value;
    var discription = document.querySelector("#text_area").value;
    var img = done;

    db.collection("data").add({
        name: title,
        details: discription,
        pic: img
    })
    console.log(" not null")

    document.querySelector("#text").value = " ";
    discription = document.querySelector("#text_area").value = " ";

}
/*saving data*/
db.collection("data").get().then((snapshot) => {
    snapshot.forEach(doc => {

    });
})

/*function data() {
    var mother = document.querySelector("mother")
    var div1 = document.createElement("div")
    div1.setAttribute("class", "holder")
    div1.textContent = "heyim in"
    mother.appendChild(div1)
}
data()
*/