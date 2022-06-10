"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function copy(id) {
    let tooltip;
    if (id == "discord") {
        navigator.clipboard.writeText("MatseCrafter_304#0034");
        tooltip = document.getElementById("tooltipd");
    }
    else {
        navigator.clipboard.writeText("m.schablinger@protonmail.com");
        tooltip = document.getElementById("tooltipg");
    }
    tooltip.style.backgroundColor = "#54b877";
    tooltip.innerHTML = "Copied!";
}
function outFunc(id) {
    if (id == "discord") {
        let tooltip = document.getElementById("tooltipd");
        tooltip.style.backgroundColor = "#555";
        tooltip.innerHTML = "Copy Discordname";
    }
    else {
        let tooltip = document.getElementById("tooltipg");
        tooltip.style.backgroundColor = "#555";
        tooltip.innerHTML = "Copy Email";
    }
}
function show(type) {
    return __awaiter(this, void 0, void 0, function* () {
        let cpus = yield getComponent("CPU");
        let gpus = yield getComponent("GPU");
        switch (type) {
            case "CPU":
                for (const cpu of cpus) {
                    document.getElementsByTagName("ul")[0].innerHTML += `<li onclick="detail("${cpu.name}")">${cpu.name}</li>`;
                }
                break;
            case "GPU":
                for (const gpu of gpus) {
                    document.getElementsByTagName("ul")[1].innerHTML += `<li onclick="detail("${gpu.name}")">${gpu.name}</li>`;
                }
        }
    });
}
function detail(name) {
    return __awaiter(this, void 0, void 0, function* () {
        let component = getComponentByName(name);
        document.getElementById("component-detail").innerHTML = "";
    });
}
function getComponentByName(componentName) {
    return __awaiter(this, void 0, void 0, function* () {
        let cpus = yield getComponent("CPU");
        let gpus = yield getComponent("GPU");
        for (const cpu of cpus) {
            if (componentName == cpu.name) {
                return cpu;
            }
        }
        for (const gpu of gpus) {
            if (componentName == gpu.name) {
                return gpu;
            }
        }
        return undefined;
    });
}
function getComponent(componentType) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetchRestEndpoint(`http://localhost:8080/api/${componentType}`, "GET");
    });
}
function fetchRestEndpoint(route, method, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let options = { method };
        if (data) {
            options.headers = { "Content-Type": "application/json" };
            options.body = JSON.stringify(data);
        }
        const res = yield fetch(route, options);
        if (!res.ok) {
            const error = new Error(`${method} ${res.url} ${res.status} (${res.statusText})`);
            throw error;
        }
        if (res.status !== 204) {
            return yield res.json();
        }
    });
}
