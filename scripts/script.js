

function copy(id) {
    if(id == "discord"){
        navigator.clipboard.writeText("MatseCrafter_304#0034");
    } else {
        navigator.clipboard.writeText("m.schablinger@protonmail.com");
    }

    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "Copied!";
}
  
function outFunc(id) {
    let tooltip = document.getElementById("tooltip");
    if(id == "discord"){
        tooltip.innerHTML = "Copy Discordname";
    } else {
        tooltip.innerHTML = "Copy Email";
    }
    
}