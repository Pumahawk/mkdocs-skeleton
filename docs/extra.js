// Add class "table" to all table in document
window.addEventListener("load", function(){
    let tables = document.getElementsByTagName('table');
    for (let i = 0; i < tables.length; i++) {
        tables[i].classList.add("table");
    }
});