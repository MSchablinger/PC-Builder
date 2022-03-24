function copy(id) {
    let tooltip;
    if (id == "discord") {
        navigator.clipboard.writeText("MatseCrafter_304#0034");
        tooltip = document.getElementById("tooltipd");
    } else {
        navigator.clipboard.writeText("m.schablinger@protonmail.com");
        tooltip = document.getElementById("tooltipg");
    }
    tooltip.style.backgroundColor = "#54b877"
    
    tooltip.innerHTML = "Copied!";
}

function outFunc(id) {
    if (id == "discord") {
        let tooltip = document.getElementById("tooltipd");
        tooltip.style.backgroundColor = "#555"
        tooltip.innerHTML = "Copy Discordname";
    } else {
        let tooltip = document.getElementById("tooltipg");
        tooltip.style.backgroundColor = "#555"
        tooltip.innerHTML = "Copy Email";
    }
}
