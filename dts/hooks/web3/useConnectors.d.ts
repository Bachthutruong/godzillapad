import { EIP1193 } from '@web3-react/eip1193';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect-v2';
import { PropsWithChildren } from 'react';
import JsonRpcConnector from 'utils/JsonRpcConnector';
import { WalletConnectQR } from 'utils/WalletConnect';
export interface Connectors {
    user: EIP1193 | JsonRpcConnector | undefined;
    metaMask: MetaMask;
    walletConnect: WalletConnect;
    walletConnectQR: WalletConnectQR;
    network: Network;
}
export declare function Provider({ connectors, children }: PropsWithChildren<{
    connectors: Connectors;
}>): JSX.Element;
export default function useConnectors(): Connectors;
