import {
  AccountNotFoundError,
  type GetAccountParameter,
  type SmartAccountClient,
  type SmartContractAccount,
  type UserOperationOverrides,
} from "@alchemy/aa-core";
import {
  encodeFunctionData,
  type Address,
  type Chain,
  type Hash,
  type Transport,
} from "viem";
import { IPluginManagerAbi } from "../abis/IPluginManager.js";

export type UninstallPluginParams<
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined
> = {
  pluginAddress: Address;
  config?: Hash;
  pluginUninstallData?: Hash;
} & { overrides?: UserOperationOverrides } & GetAccountParameter<TAccount>;

export async function uninstallPlugin<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
  TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined
>(
  client: SmartAccountClient<TTransport, TChain, TAccount>,
  {
    overrides,
    account = client.account,
    ...params
  }: UninstallPluginParams<TAccount>
) {
  if (!account) {
    throw new AccountNotFoundError();
  }

  const callData = await encodeUninstallPluginUserOperation(params);
  return client.sendUserOperation({ uo: callData, overrides, account });
}

export async function encodeUninstallPluginUserOperation(
  params: Omit<UninstallPluginParams, "account" | "overrides">
) {
  return encodeFunctionData({
    abi: IPluginManagerAbi,
    functionName: "uninstallPlugin",
    args: [
      params.pluginAddress,
      params.config ?? "0x",
      params.pluginUninstallData ?? "0x",
    ],
  });
}