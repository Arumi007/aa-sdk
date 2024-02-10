---
outline: deep
head:
  - - meta
    - property: og:title
      content: How to Submit Batch Transactions
  - - meta
    - name: description
      content: Follow this guide to submit transactions in batches with Account Kit, a vertically integrated stack for building apps that support ERC-4337 and ERC-6900.
  - - meta
    - property: og:description
      content: Follow this guide to submit transactions in batches with Account Kit, a vertically integrated stack for building apps that support ERC-4337 and ERC-6900.
  - - meta
    - name: twitter:title
      content: How to Submit Batch Transactions
  - - meta
    - name: twitter:description
      content: Follow this guide to submit transactions in batches with Account Kit, a vertically integrated stack for building apps that support ERC-4337 and ERC-6900.
---

# How to Submit Batch Transactions

One benefit of Smart Contract Accounts is that it's possible to batch transactions in one `UserOperation` (UO). Not all Smart Contract Accounts support batching. But, if the `ISmartContractAccount` implementation you're using has the [`encodeBatchExecute`](/packages/aa-core/accounts/) method, then implementations of `SmartAccountClient` will allow you to make those calls.

There are two ways you can batch transactions using `SmartAccountClient`:

1. via `sendUserOperation`
2. via `sendTransactions`

:::tip Note 1: `LightSmartContractAccount`, and `MultiOwnerModularAccount`
Both `LightSmartContractAccount` and `MultiOwnerModularAccount` implement `encodeBatchExecute`, thus supports batching `UserOperations` out of the box.
:::

:::tip Note 2: Transactions Batched as a Single User Operation
When you batch transactions, the transaction actions (`target`s and `calldata`s) are batched into a single UO, where the sender is the account itself.
:::

:::tip Note 3: Batched Transactions Ordering
The batched UO gets executed by the account calling the `executeBatch` method on [`LightAccount`](https://github.com/alchemyplatform/light-account/blob/v1.0.2/src/LightAccount.sol) smart contracts. `executeBatch` processes the input array of transactions data linearly, guaranteeing the execution order of those transactions to be **sequential**.
:::

## Batching using [`sendUserOperation`](/packages/aa-core/smart-account-client/actions/sendUserOperation.md)

The `SmartAccountClient` supports passing either a single UO or an array of UOs to `sendUserOperation`. If you pass an array, the provider will batch the transactions into a single User Operation and submit it to the bundler. Let's see an example:

::: code-group

```ts [example.ts]
import { smartAccountClient } from "./smartAccountClient";
// [!code focus:99]
// the hash returned here is the hash of the User Operation
const { hash } = await smartAccountClient.sendUserOperation({
  uo: [
    {
      target: "0x...",
      data: "0xcallDataTransacation1",
    },
    {
      target: "0x...",
      data: "0xcallDataTransacation2",
    },
  ],
});
```

<<< @/snippets/aa-alchemy/connected-client.ts [smartAccountClient.ts]

:::

## Batching using [`sendTransactions`](/packages/aa-core/smart-account-client/actions/sendTransactions.md)

The `SmartAccountClient` supports sending UOs and waiting for them to be mined in a transaction via the `sendTransaction` and `sendTransactions` methods. The latter allows for batching in the same way `sendUserOperation`:

::: code-group

```ts [example.ts]
import { smartAccountClient } from "./smartAccountClient";
// [!code focus:99]
// the hash returned here is the hash of the mined Tx that includes the UserOperation
const hash = await smartAccountClient.sendTransactions({
  requests: [
    {
      to: "0x...",
      data: "0xcallDataTransacation1",
    },
    {
      to: "0x...",
      data: "0xcallDataTransacation2",
    },
  ],
});
```

<<< @/snippets/aa-alchemy/connected-client.ts [smartAccountClient.ts]

:::