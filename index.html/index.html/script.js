function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function showMessage(e){
e.preventDefault();
document.getElementById("successMsg").innerText="Message Sent Successfully!";
}
