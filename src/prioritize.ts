import latencyData from './data/latency';
import { knapsack } from './knapsack';
import { Transaction } from './types';

export function prioritize(transactions: Transaction[], totalTime = 1000) {
    const amount = transactions.map(tx => tx.amount)
    const latency = transactions.map(tx => latencyData[tx.bank_country_code])

    const dpIndexSet = knapsack({ timeout: 1000, amount, latency })
    const selectedTxs = dpIndexSet[totalTime].map(id => transactions[id])

    return selectedTxs
}



