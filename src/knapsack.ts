interface KnapsackProps {
    timeout: number
    latency: number[]
    amount: number[]
}

function knapsack({ timeout, latency, amount }: KnapsackProps) {
    let dp = Array(timeout + 1).fill(0);

    let dpIndexSet: { [key: number]: number[] } = {}
    for (let w = timeout; w >= 0; w--) {
        dpIndexSet[w] = []
    }

    for (let i = 0; i < amount.length; i++) {
        for (let w = timeout; w >= 0; w--) {
            if (latency[i] <= w) {
                const attempt = dp[w - latency[i]] + amount[i];

                if (attempt > dp[w]) {
                    dp[w] = attempt
                    dpIndexSet[w] = [...dpIndexSet[w - latency[i]], i]
                }
            }
        }
    }

    return dpIndexSet;
}


export {
    knapsack
}