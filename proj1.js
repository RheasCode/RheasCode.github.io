var post_id="";

$("input#post_id").on("change", function(){

  post_id = $("input#post_id").val();
  $("a.link1").attr("href", "https://twitter.com/search/?q=%20" + post_id + "%20verified%20covid%20-need%20-required%20-not%20verified%20-needed%20-needs%20-requires%20-require%20-requirement%20-looking%20for&f=realtime");

});
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Region must be filled out");
    return false;
  }
}
function validateForm2() {
  var x = document.forms["form2"]["fname2"].value;
  if (x == "") {
    alert("Field is empty! Please fill out.");
    return false;
  }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
  if(!(post_id==="")){
  if(event.target.matches("#o2")) {
    window.open("https://twitter.com/search/?q=%20" + post_id + "%20verified%20oxygen%20OR%20cylinder%20OR%20concentrator%20-need%20-required%20-not%20verified%20-needed%20-needs%20-requires%20-require%20-requirement%20-looking%20for&f=realtime","_blank");
  }

  else if(event.target.matches("#bed")) {
    window.open("https://twitter.com/search/?q=%20" + post_id + "%20verified%20hospital%20bed%20OR%20beds%20-need%20-required%20-not%20verified%20-needed%20-needs%20-requires%20-require%20-requirement%20-looking%20for&f=realtime","_blank");
  }
  else if(event.target.matches("#rem")) {
    window.open("https://twitter.com/search/?q=%20"+post_id+"%20remdesivir%20verified%20-need%20-required%20-not%20verified%20-needed%20-needs%20-requires%20-require%20-requirement%20-looking%20for&f=realtime","_blank");
  }
  else if(event.target.matches("#fav")) {
    window.open("https://twitter.com/search/?q=%20"+post_id+"%20verified%20favipiravir%20OR%20fabiflue%20-need%20-required%20-not%20verified%20-needed%20-needs%20-requires%20-require%20-requirement%20-looking%20for&f=realtime","_blank");
  }
  else if(event.target.matches("#plasma")) {
    window.open("https://twitter.com/search/?q=%20"+post_id+"%20plasma%20verified%20-need%20-required%20-not%20verified%20-needed%20-needs%20-requires%20-require%20-requirement%20-looking%20for&f=realtime","_blank");
  }
  else if(event.target.matches("#icu")) {
    window.open("https://twitter.com/search/?q=%20"+post_id+"%20ICU%20verified%20-need%20-required%20-not%20verified%20-needed%20-needs%20-requires%20-require%20-requirement%20-looking%20for&f=realtime","_blank");
  } }
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }

}

}
$("input#text_id").on("change", function(){

  var text_id = $("input#text_id").val();
  $("a.link").attr("href", "https://twitter.com/search/?q=%20" + text_id + "%20verified%20-need%20-required%20-not%20verified%20-needed%20-needs%20-requires%20-require%20-requirement%20-looking%20for&f=realtime","_blank");

});
function searchKeyPress(e)
{

e = e || window.event;
if (e.keyCode == 13)
   {
     event.preventDefault();
     //document.getElementsByClassName("a.link").click();
     $('a.link1').trigger('click');
   }
}
function searchKeyPress1(e)
{

e = e || window.event;
if (e.keyCode == 13)
   {
     event.preventDefault();
     //document.getElementsByClassName("a.link").click();
     $('a.link').trigger('click');
   }
}
