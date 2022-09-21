import transactionsData from './data/transactions';
import { knapsack } from './knapsack';
import { prioritize } from './prioritize';

const sum = (a: number[]) => a.reduce(function (a, b) { return a + b; }, 0);

const txList1000ms = prioritize(transactionsData, 1000)
const txList90ms = prioritize(transactionsData, 90)
const txList60ms = prioritize(transactionsData, 60)
const txList50ms = prioritize(transactionsData, 50)

console.log({
    result1000ms: sum(txList1000ms.map(tx => tx.amount)),
    result90ms: sum(txList90ms.map(tx => tx.amount)),
    result60ms: sum(txList60ms.map(tx => tx.amount)),
    result50ms: sum(txList50ms.map(tx => tx.amount)),
})

