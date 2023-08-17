// dark mode
let darkModu = ()=> {
    window.document.classList.toggle("dark_Mode")
};

// input search 
$(document).ready(function(){
    const searchApi = ["adana","balıkesir","malatya","çorum","denizli"];
$("#tags").autocomplete({
    source:searchApi
})
})

//footer
let newDate =()=> {
    const date = new Date().getFullYear();
    //document.getElementById("date_id").innerHTML= new Date().getFullYear()
    $("#date_id").html(date)
}
newDate()