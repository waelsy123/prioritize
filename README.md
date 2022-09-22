# Solution

```
{
  1000ms: 35471.81,
  90ms: 6972.29,
  60ms: 4675.71,
  50ms: 4139.43
}
```

which means that by `1000ms` we were able to process `35471.81 USD`
for `90ms` we processed `6972.29 USD` and so on..


# Explaination

This application written in Typescript to demonstrate a solution to the problem mentioned in the following link:

[Task link](https://gist.github.com/Valve/834d7122ca75dc58d28c3e4be5a15506)

We have a set of transactions, each has a cost as latency and value presented in USD amount for processing this transaction. We want to include subset of transactions which yield the maximum return.

The problem discuss a well-known dynamic programming problem in computer science called Knapsack. The algorithm complexity is `O(N * Timeout)`.

# Usage

Install node modules, then to run app in development envirument

```
npm run start:dev
```

otherwise to build and run on production use

```
npm run build
npm start
```
