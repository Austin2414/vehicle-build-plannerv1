const parts = {
    intake: [
        {id: 'oem', name: 'OEM', size: 2.5}, 
        {id: '3inch', name: '3"', size: 3}, 
        {id: '4inch', name: '4"', size: 4},
    ],
    exhaust: [
        {id: 'oem', name: 'OEM', size: 2.25},
        {id: '2.5inch', name: '2.5"', size: 2.5}, 
        {id: '3inch', name: '3"', size: 3}, 
        {id: '3.5inch', name: '3.5"', size: 3.5},
    ],
    // flow rate is in lb/min
    turbo: [
        {id: 't25', name: 'T-25(OEM)', flow: 22}, 
        {id: 'evo3-16g', name: 'Evo3 16G', flow: 42}, 
        {id: '20g', name: 'TD05H 20G', flow: 43}, 
        {id: 'fp68hta', name: 'FP68HTA', flow: 51}, 
        {id: 'hx35', name: 'Holset HX35', flow: 58}
    ],
    // injectors are measured in cc/min for this project
    injectors: [
        {id: '450', name: '450cc', cc: 450},
        {id: '550', name: '550cc', cc: 550},
        {id: '650', name: '650cc', cc: 650}, 
        {id: '750', name: '750cc', cc: 750}, 
        {id: '850', name: '850cc', cc: 850}, 
        {id: '950', name: '950cc', cc: 950}, 
        {id: '1050', name: '1050cc', cc: 1050}, 
        {id: '1150', name: '1150cc', cc: 1150}, 
        {id: '1250', name: '1250cc', cc: 1250}, 
        {id: '1350', name: '1350cc', cc: 1350},
    ],
    // fuel pumps are measured in liters per hour for this project
    fuelPump: [
        {id: 'oem', name: "OEM", lph: 160}, 
        {id: 'evo8/9', name: "Evo 8/9", lph: 190}, 
        {id: 'walbro255', name: "Walbro 255", lph: 255}, 
        {id: 'walbro340', name: "Walbro 340", lph: 340}, 
        {id: 'walbro450', name: "Walbro 450", lph: 450},
    ],
}

export default parts