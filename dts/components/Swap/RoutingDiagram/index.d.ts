/// <reference types="react" />
import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export declare const AutoRouterHeader: import("react").ForwardRefExoticComponent<(Pick<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: import("styled-components").DefaultTheme | undefined;
} & {
    as?: string | import("react").ComponentType<any> | undefined;
    forwardedAs?: string | import("react").ComponentType<any> | undefined;
}, string | number | symbol> | Pick<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: import("styled-components").DefaultTheme | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    as?: string | import("react").ComponentType<any> | undefined;
    forwardedAs?: string | import("react").ComponentType<any> | undefined;
}, string | number | symbol>) & import("react").RefAttributes<HTMLDivElement>>;
export default function RoutingDiagram({ trade, gasUseEstimateUSD, hideHeader, }: {
    trade: InterfaceTrade;
    gasUseEstimateUSD?: CurrencyAmount<Token> | null;
    hideHeader?: boolean;
}): JSX.Element;
