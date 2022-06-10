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
async function show(type: string) {
    let cpus = await getComponent("CPU");
    let gpus = await getComponent("GPU");
    switch(type) {
        case "CPU":
            for(const cpu of cpus) {
                document.getElementsByTagName("ul")[0].innerHTML += `<li onclick="detail("${cpu.name}")">${cpu.name}</li>`   
            }
            break;
        case "GPU":
            for(const gpu of gpus) {
                document.getElementsByTagName("ul")[1].innerHTML += `<li onclick="detail("${gpu.name}")">${gpu.name}</li>`
            }
    }
}
async function detail(name: string) {
    let component = getComponentByName(name);
    
    document.getElementById("component-detail").innerHTML = "";
}
async function getComponentByName(componentName: string): Promise<any> {
    let cpus = await getComponent("CPU");
    let gpus = await getComponent("GPU"); 
    for(const cpu of cpus) {
        if(componentName == cpu.name) {
            return cpu;
        }
    }
	for(const gpu of gpus) {
		if(componentName == gpu.name) {
			return gpu;
		}
	}
    return undefined;
}
async function getComponent(componentType: string) {
    return await fetchRestEndpoint(`http://localhost:8080/api/${componentType}`, "GET");
}
async function fetchRestEndpoint(route: string, method: "GET" |"POST" |"PUT" |"DELETE", data?: object): Promise<Object[]> {
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