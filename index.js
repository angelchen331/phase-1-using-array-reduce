const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// function totalBatteries(batteries) {
//     let totalBatteries = 31;
//     for (const batteryBatches of batteries) {
//         totalBatteries += batteryBatches;
//     };
//     return totalBatteries
// }

const totalBatteries = 0;
const reducer = (accumulator, item) => {
    return (accumulator += item);
};
const total = batteryBatches.reduce(reducer , totalBatteries);




// const total = batteryBatches.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
