import { PropsWithChildren } from 'react';
interface SpeedbumpDialogProps {
    onAcknowledge: () => void;
}
export default function SpeedBumpDialog({ onAcknowledge, children }: PropsWithChildren<SpeedbumpDialogProps>): JSX.Element;
export {};
