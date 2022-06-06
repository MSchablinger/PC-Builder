function copy(id: string) {
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

function outFunc(id: string) {
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

export async function getPrice(asin: string) {
    return Number(await fetchRestEndpoint(`http://localhost/price/${asin}`, "GET"));
}
async function fetchRestEndpoint(route: string, method: "GET" |"POST" |"PUT" |"DELETE", data?: object): Promise<any> {
    let options: any = { method };
    if (data) {
        options.headers = { "Content-Type": "application/json" };
        options.body = JSON.stringify(data);
    }
    const res = await fetch(route, options);
    if (!res.ok) {
        const error = new Error(`${method} ${res.url} ${res.status} (${res.statusText})`);
        throw error;
    }
    if (res.status !== 204) {
        return await res.json();
    } 
}