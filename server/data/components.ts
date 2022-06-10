import { getPrice } from "../script"

export interface CPU {
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
export interface GPU {
    name: string,
    chip: string,
    bus: string,
    memory: number,
    memory_type: string,
    clock: number,
    memory_clock: number,
    price: number | Promise<Number>
}
export interface Disk {
    name: string,
    type: string,
    capacity: number,
    formfactor: string,
    readspeed: number,
    writespeed: number,
    interface: string,
    price: number | Promise<Number>
}
export interface Motherboard {
    price: number | Promise<Number>
}
export interface Case {
    price: number | Promise<Number>
}
export interface Networkcard {
    price: number | Promise<Number>
}
export interface RAM {
    price: number | Promise<Number>
}
export interface Cooler {
    price: number | Promise<Number>
}
export interface NetworkAdapter {
    price: number | Promise<Number>
}
export interface Config {
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
export let availableGpus: GPU[] = [
    {name: "GeForce RTX 3060", chip: "GA106", bus: "PCIe 4.0 x16", memory: 12, memory_type: "GDDR6", clock: 1320, memory_clock: 1875, price: getPrice("")},
    {name: "GeForce RTX 3060 Ti", chip: "GA104", bus: "PCIe 4.0 x16", memory: 8, memory_type: "GDDR6", clock: 1410, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce RTX 3070", chip: "GA104", bus: "PCIe 4.0 x16", memory: 8, memory_type: "GDDR6", clock: 1500, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce RTX 3080", chip: "GA102", bus: "PCIe 4.0 x16", memory: 10, memory_type: "GDDR6X", clock: 1440, memory_clock: 1188, price: getPrice("")},
    {name: "GeForce RTX 2060", chip: "TU106", bus: "PCIe 3.0 x16 ", memory: 6, memory_type: "GDDR6", clock: 1365, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce RTX 3050", chip: "GA106", bus: "PCIe 4.0 x8", memory: 8, memory_type: "GDDR6", clock: 1552, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce RTX 3090 Ti", chip: "GA102", bus: "PCIe 4.0 x16", memory: 24, memory_type: "GDDR6X", clock: 1560, memory_clock: 1313, price: getPrice("")},
    {name: "Radeon RX 6600", chip: "Navi 23", bus: "PCIe 4.0 x8", memory: 8, memory_type: "GDDR6", clock: 1626, memory_clock: 1750, price: getPrice("")},
    {name: "Radeon RX 6600 XT", chip: "Navi 23", bus: "PCIe 4.0 x8", memory: 8, memory_type: "GDDR6", clock: 1968, memory_clock: 2000, price: getPrice("")},
    {name: "GeForce GTX 1630", chip: "TU117", bus: "PCIe 3.0 x16", memory: 4, memory_type: "GDDR5", clock: 1485, memory_clock: 2001, price: getPrice("")},
    {name: "GeForce GTX 1050 Ti", chip: "GP107", bus: "PCIe 3.0 x16", memory: 4, memory_type: "GDDR5", clock: 1291, memory_clock: 1752, price: getPrice("")},
    {name: "GeForce GTX 1060", chip: "GP106", bus: "PCIe 3.0 x16", memory: 6, memory_type: "GDDR5", clock: 1506, memory_clock: 2002, price: getPrice("")},
    {name: "GeForce GTX 1650", chip: "TU117", bus: "PCIe 3.0 x16", memory: 4, memory_type: "GDDR5", clock: 1485, memory_clock: 2001, price: getPrice("")},
    {name: "GeForce RTX 3070 Ti", chip: "GA104", bus: "PCIe 4.0 x16", memory: 8, memory_type: "GDDR6X", clock: 1575, memory_clock: 1188, price: getPrice("")},
    {name: "GeForce GTX 970", chip: "GM204", bus: "PCIe 3.0 x16", memory: 4, memory_type: "GDDR5", clock: 1050, memory_clock: 1753, price: getPrice("")},
    {name: "GeForce RTX 3090", chip: "GA102", bus: "PCIe 4.0 x16", memory: 24, memory_type: "GDDR6X", clock: 1395, memory_clock: 1219, price: getPrice("")},
    {name: "Radeon RX 6700 XT", chip: "Navi 22", bus: "PCIe 4.0 x16", memory: 12, memory_type: "GDDR6", clock: 2321, memory_clock: 2000, price: getPrice("")},
    {name: "GeForce GTX 1080 Ti", chip: "GP102", bus: "PCIe 3.0 x16", memory: 11, memory_type: "GDDR5X", clock: 1481, memory_clock: 1376, price: getPrice("")},  
    {name: "GeForce GTX 1070", chip: "GP104", bus: "PCIe 3.0 x16", memory: 8, memory_type: "GDDR5", clock: 1506, memory_clock: 2002, price: getPrice("")},
    {name: "GeForce GTX 960", chip: "GM206", bus: "PCIe 3.0 x16", memory: 2, memory_type: "GDDR5", clock: 1127, memory_clock: 1753, price: getPrice("")},
    {name: "Radeon RX 580", chip: "Polaris 20", bus: "PCIe 3.0 x16", memory: 8, memory_type: "GDDR5", clock: 1257, memory_clock: 2000, price: getPrice("")},
    {name: "GeForce RTX 3080 Ti", chip: "GA102", bus: "PCIe 4.0 x16", memory: 12, memory_type: "GDDR6X", clock: 1365, memory_clock: 1188, price: getPrice("")},
    {name: "Radeon RX 6400", chip: "Navi 24", bus: "PCIe 4.0 x4", memory: 4, memory_type: "GDDR6", clock: 1923, memory_clock: 2000, price: getPrice("")},
    {name: "Radeon RX 570", chip: "Polaris 20", bus: "PCIe 3.0 x16", memory: 4, memory_type: "GDDR5", clock: 1168, memory_clock: 1750, price: getPrice("")},
    {name: "Radeon RX 6500 XT", chip: "Navi 24", bus: "PCIe 4.0 x4", memory: 4, memory_type: "GDDR6", clock: 2310, memory_clock: 2248, price: getPrice("")},
    {name: "GeForce GTX 750 Ti", chip: "GM107", bus: "PCIe 3.0 x16", memory: 2, memory_type: "GDDR5", clock: 1020, memory_clock: 1350, price: getPrice("")},
    {name: "GeForce GTX 1080", chip: "GP104", bus: "PCIe 3.0 x16", memory: 8, memory_type: "GDDR5X", clock: 1607, memory_clock: 1251, price: getPrice("")},
    {name: "GeForce GT 1030", chip: "GP108", bus: "PCIe 3.0 x4", memory: 2, memory_type: "GDDR5", clock: 1228, memory_clock: 1502, price: getPrice("")},
    {name: "GeForce GTX 1660 SUPER", chip: "TU116", bus: "PCIe 3.0 x16", memory: 6, memory_type: "GDDR6", clock: 1530, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce GTX 1660 Ti", chip: "TU116", bus: "PCIe 3.0 x16", memory: 6, memory_type: "GDDR6", clock: 1500, memory_clock: 1500, price: getPrice("")},
    {name: "Radeon RX 6950 XT", chip: "Navi 21", bus: "PCIe 4.0 x16", memory: 16, memory_type: "GDDR6", clock: 1925, memory_clock: 2250, price: getPrice("")},
    {name: "Radeon RX 6650 XT", chip: "Navi 23", bus: "PCIe 4.0 x8", memory: 8, memory_type: "GDDR6", clock: 2055, memory_clock: 2190, price: getPrice("")},
    {name: "GeForce GTX 1050", chip: "GP107", bus: "PCIe 3.0 x16", memory: 2, memory_type: "GDDR5", clock: 1354, memory_clock: 1752, price: getPrice("")},
    {name: "Radeon RX 6750 XT", chip: "Navi 22", bus: "PCIe 4.0 x16", memory: 12, memory_type: "GDDR6", clock: 2150, memory_clock: 2250, price: getPrice("")},
    {name: "GeForce RTX 2080 Ti", chip: "TU102", bus: "PCIe 3.0 x16", memory: 11, memory_type: "GDDR6", clock: 1350, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce GTX 1660", chip: "TU116", bus: "PCIe 3.0 x16", memory: 6, memory_type: "GDDR5", clock: 1530, memory_clock: 2001, price: getPrice("")},
    {name: "GeForce GT 730", chip: "GK208B", bus: "PCIe 2.0 x8", memory: 1, memory_type: "GDDR5", clock: 902, memory_clock: 1253, price: getPrice("")},
    {name: "GeForce GTX 950", chip: "GM206", bus: "PCIe 3.0 x16", memory: 2, memory_type: "GDDR5", clock: 1024, memory_clock: 1653, price: getPrice("")},
    {name: "GeForce 210", chip: "GT218", bus: "PCIe 2.0 x16", memory: 0.5, memory_type: "DDR3", clock: 520, memory_clock: 400, price: getPrice("")},
    {name: "Radeon RX 550", chip: "Lexa", bus: "PCIe 3.0 x8", memory: 2, memory_type: "GDDR5", clock: 1100, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce GTX 550 Ti", chip: "GF116", bus: "PCIe 2.0 x16", memory: 1, memory_type: "GDDR5", clock: 900, memory_clock: 1026, price: getPrice("")},
    {name: "Radeon RX 6900 XT", chip: "Navi 21", bus: "PCIe 4.0 x16", memory: 16, memory_type: "GDDR6", clock: 1825, memory_clock: 2000, price: getPrice("")},
    {name: "GeForce GTX 980 Ti", chip: "GM200", bus: "PCIe 3.0 x16", memory: 6, memory_type: "GDDR5", clock: 1000, memory_clock: 1753, price: getPrice("")},
    {name: "GeForce RTX 2060 SUPER", chip: "TU106", bus: "PCIe 3.0 x16", memory: 8, memory_type: "GDDR6", clock: 1470, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce GTX 1650 SUPER", chip: "TU116", bus: "PCIe 3.0 x16", memory: 4, memory_type: "GDDR6", clock: 1530, memory_clock: 1500, price: getPrice("")},
    {name: "GeForce RTX 2070", chip: "TU106", bus: "PCIe 3.0 x16", memory: 8, memory_type: "GDDR6", clock: 1410, memory_clock: 1750, price: getPrice("")},
    {name: "GeForce RTX 2070 SUPER", chip: "TU104", bus: "PCIe 3.0 x16", memory: 8, memory_type: "GDDR6", clock: 1605, memory_clock: 1750, price: getPrice("")},
]
export let availableCpus: CPU[] = [
    {name: "Ryzen 3 4100", cores: 4, threads: 8, minClock: 3.8, maxClock: 4, socket: "AM4", process: 7, tdp: 65, price: getPrice("B09VCRQVWM")},
    {name: "Ryzen 5 5600X", cores: 6, threads: 12, minClock: 3.7, maxClock: 4.6, socket: "AM4", process: 7, tdp: 65, price: getPrice("B08166SLDF")},
    {name: "Ryzen 5 3600", cores:6, threads: 12, minClock: 3.6, maxClock: 4.2, socket: "AM4", process: 7, tdp: 65, price: getPrice("B07STGGQ18")},
    {name: "Ryzen 5 5600G", cores: 6, threads: 12, minClock: 3.9, maxClock: 4.4, socket: "AM4", process: 7, tdp: 65, price: getPrice("B092L9GF5N")},
    {name: "Ryzen 7 5800X", cores: 8, threads: 16, minClock: 3.8, maxClock: 4.7, socket: "AM4", process: 7, tdp: 105, price: getPrice("B0815XFSGK")},
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