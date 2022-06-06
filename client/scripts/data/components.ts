import { getPrice } from "../script"

interface CPU {
    name: string,
    cores: number,
    threads?: number,
    minClock: number,
    maxClock: number, 
    socket: string,
    process: number,
    tdp: number,
    price: number | Promise<Number>
}
interface GPU {
    chip: string,
    bus: string,
    memory: number,
    memory_type: string,
    clock: number,
    memory_clock: number,
    price: number | Promise<Number>
}
interface Disk {
    name: string,
    type: string,
    capacity: number,
    formfactor: string,
    readspeed: number,
    writespeed: number,
    interface: string,
    price: number | Promise<Number>
}
interface Motherboard {
    price: number | Promise<Number>
}
interface Case {
    price: number | Promise<Number>
}
interface Networkcard {
    price: number | Promise<Number>
}
interface RAM {
    price: number | Promise<Number>
}
interface Cooler {
    price: number | Promise<Number>
}
interface NetworkAdapter {
    price: number | Promise<Number>
}
interface Config {
    name?: string,
    motherboard: Motherboard,
    networkcard: Networkcard,
    networkadapter: NetworkAdapter,
    cpu: CPU,
    gpu: GPU,
    ram: RAM[],
    disk?: Disk[],
    cooler?: Cooler[],
    case?: Case,
    price: number
}
let availableCpus: CPU[] = [
    {name: "Ryzen 3 4100", cores: 4, threads: 8, minClock: 3.8, maxClock: 4, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Ryzen 5 5600X", cores: 6, threads: 12, minClock: 3.7, maxClock: 4.6, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Ryzen 5 3600", cores:6, threads: 12, minClock: 3.6, maxClock: 4.2, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Ryzen 5 5600G", cores: 6, threads: 12, minClock: 3.9, maxClock: 4.4, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Ryzen 7 5800X", cores: 8, threads: 16, minClock: 3.8, maxClock: 4.7, socket: "AM4", process: 7, tdp: 105, price: getPrice("")},
    {name: "Ryzen 5 5500U", cores: 6, threads: 12, minClock: 2.1, maxClock: 4, socket: "FP6", process: 7, tdp: 15, price: getPrice("")},
    {name: "Ryzen 9 5900X", cores: 12, threads: 24, minClock: 3.7, maxClock: 4.8, socket: "AM4", process: 7, tdp: 105, price: getPrice("")},
    {name: "Ryzen 5 5500", cores: 6, threads: 12, minClock: 3.7, maxClock: 4.2, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Ryzen 5 PRO 4650G", cores: 6, threads: 12, minClock: 3.7, maxClock: 4.2, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "FX-8350", cores: 8, minClock: 4, maxClock: 4.2, socket: "AM3+", process: 32, tdp: 125, price: getPrice("")},
    {name: "Ryzen 9 5950X", cores: 16, threads: 32, minClock: 3.4, maxClock: 4.9, socket: "AM4", process: 7, tdp: 105, price: getPrice("")},
    {name: "A8-7680", cores: 4, minClock: 3.5, maxClock: 3.8, socket: "FM2+", process: 28, tdp: 45, price: getPrice("")},
    {name: "Ryzen 7 3700X", cores: 8, threads: 16, minClock: 3.6, maxClock: 4.4, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "FX-6300", cores: 6, minClock: 3.5, maxClock: 4.1, socket: "AM3+", process: 32, tdp: 95, price: getPrice("")},
    {name: "Ryzen 3 3100", cores: 4, threads: 8, minClock: 3.6, maxClock: 3.9, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Core i7-11800H", cores: 8, threads: 16, minClock: 2.3, maxClock: 4.6, socket: "BGA 1499", process: 10, tdp: 35, price: getPrice("")},
    {name: "Core i7-1260P", cores: 12, threads: 16, minClock: 2.1, maxClock: 4.7, socket: "BGA 1744", process: 10, tdp: 28, price: getPrice("")},
    {name: "Core i7-12700F", cores: 12, threads: 20, minClock: 3.3, maxClock: 4.9, socket: "Socket 1700", process: 10, tdp: 65, price: getPrice("")},
    {name: "A8-7600", cores: 4, minClock: 3.1, maxClock: 3.8, socket: "FM2+", process: 28, tdp: 65, price: getPrice("")},
    {name: "Core i5-10400", cores: 6, threads: 12, minClock: 2.9, maxClock: 4.3, socket: "Socket 1200", process: 14, tdp: 65, price: getPrice("")},
    {name: "Ryzen 3 2200G", cores: 4, minClock: 3.5, maxClock: 3.7, socket: "AM4", process: 14, tdp: 65, price: getPrice("")},
    {name: "Ryzen 5 2600", cores: 6, threads: 12, minClock: 3.4, maxClock: 3.9, socket: "AM4", process: 12, tdp: 65, price: getPrice("")},
    {name: "Core i5-10400F", cores: 6, threads: 12, minClock: 2.9, maxClock: 4.3, socket: "Socket 1200", process: 14, tdp: 65, price: getPrice("")},
    {name: "Ryzen 3 3200G", cores: 4, minClock: 3.6, maxClock: 4, socket: "AM4", process: 12, tdp: 65, price: getPrice("")},
    {name: "Ryzen 5 4500", cores: 6, threads: 12, minClock: 3.6, maxClock: 4.1, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Core i5-3470", cores: 4, minClock: 3.2, maxClock: 3.6, socket: "Socket 1155", process: 22, tdp: 77, price: getPrice("")},
    {name: "Ryzen 7 5800X3D", cores: 8, threads: 16, minClock: 3.4, maxClock: 4.5, socket: "AM4", process: 7, tdp: 105, price: getPrice("")},
    {name: "Core 2 Duo E8400", cores: 2, minClock: 3, maxClock: 3, socket: "Socket 775", process: 45, tdp: 65, price: getPrice("")},
    {name: "Ryzen 7 5700X", cores: 8, threads: 16, minClock: 3.4, maxClock: 4.6, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Core i7-3770", cores: 4, threads: 8, minClock: 3.4, maxClock: 3.9, socket: "Socket 1155", process: 22, tdp: 77, price: getPrice("")},
    {name: "Core i9-12900K", cores: 16, threads: 24, minClock: 3.2, maxClock: 5.2, socket: "Socket 1700", process: 10, tdp: 125, price: getPrice("")},
    {name: "Ryzen 7 5700G", cores: 8, threads: 16, minClock: 3.8, maxClock: 4.6, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Ryzen 7 5800H", cores: 8, threads: 16, minClock: 3.2, maxClock: 4.4, socket: "FP6", process: 7, tdp: 45, price: getPrice("")},
    {name: "Core i5-12400F", cores: 6, threads: 12, minClock: 2.5, maxClock: 4.4, socket: "Socket 1700", process: 10, tdp: 65, price: getPrice("")},
    {name: "Athlon 3000G", cores: 2, threads: 4, minClock: 3.5, maxClock: 3.5, socket: "AM4", process: 14, tdp: 35, price: getPrice("")},
    {name: "Ryzen 7 5800G", cores: 8, threads: 16, minClock: 3.8, maxClock: 4.8, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Core i7-2600", cores: 4, threads: 8, minClock: 3.4, maxClock: 3.8, socket: "Socket 1155", process: 32, tdp: 95, price: getPrice("")},
    {name: "Ryzen 5 5600", cores: 6, threads: 12, minClock: 3.5, maxClock: 4.4, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Ryzen 7 6800U", cores: 8, threads: 16, minClock: 2.7, maxClock: 4.7, socket: "FP7", process: 6, tdp: 15, price: getPrice("")},
    {name: "Core i5-2400", cores: 4, minClock: 3.1, maxClock: 3.4, socket: "Socket 1155", process: 32, tdp: 95, price: getPrice("")},
    {name: "Ryzen 5 3500X", cores: 6, minClock: 3.6, maxClock: 4.1, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Ryzen 7 2700X", cores: 8, threads: 16, minClock: 3.7, maxClock: 4.35, socket: "AM4", process: 12, tdp: 105, price: getPrice("")},
    {name: "Ryzen 5 4600G", cores: 6, threads: 12, minClock: 3.7, maxClock: 4.2, socket: "AM4", process: 7, tdp: 65, price: getPrice("")},
    {name: "Core i5-650", cores: 2, threads: 4, minClock: 3.2, maxClock: 3.466, socket: "Socket 1156", process: 32, tdp: 73, price: getPrice("")},
    {name: "Core i7-12700K", cores: 12, threads: 20, minClock: 3.6, maxClock: 5, socket: "Socket 1700", process: 10, tdp: 125, price: getPrice("")},
    {name: "Ryzen 5 1600", cores: 6, threads: 12, minClock: 3.2, maxClock: 3.6, socket: "AM4", process: 14, tdp: 65, price: getPrice("")},
    {name: "Core i3-10100", cores: 4, threads: 8, minClock: 3.6, maxClock: 4.3, socket: "Socket 1200", process: 14, tdp: 65, price: getPrice("")},
    {name: "Ryzen 3 3250U", cores: 2, threads: 4, minClock: 2.6, maxClock: 3.5, socket: "FP5", process: 14, tdp: 15, price: getPrice("")},
    {name: "Ryzen Threadripper PRO 5995WX", cores: 64, threads: 128, minClock: 2.7, maxClock: 4.5, socket: "WRX8", process: 7, tdp: 280, price: getPrice("")},
    {name: "Core i3-12100F ", cores: 4, threads: 8, minClock: 3.3, maxClock: 4.3, socket: "Socket 1700", process: 10, tdp: 58, price: getPrice("")}
]