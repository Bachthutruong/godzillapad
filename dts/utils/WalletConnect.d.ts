import 'setimmediate';
import { WalletConnect, WalletConnectConstructorArgs } from '@web3-react/walletconnect-v2';
export declare class WalletConnectQR extends WalletConnect {
    static SVG_AVAILABLE: string;
    svg?: string;
    constructor({ actions, options, defaultChainId, timeout, onError }: WalletConnectConstructorArgs);
    deactivate(): Promise<void>;
}
