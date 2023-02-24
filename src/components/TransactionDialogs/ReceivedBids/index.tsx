import React from 'react';
import { useDialogContext } from 'src/context/DialogContext';
import ModalDialog from 'src/components/ModalDialog';
import ReceivedBids from './ReceivedBids';

export interface ComponentProps {}

const ReceivedBidsDlgContainer: React.FC<ComponentProps> = (): JSX.Element => {
    const [dialogState, setDialogState] = useDialogContext();
    return (
        <ModalDialog
            open={dialogState.receivedBidDlgOpened}
            onClose={() => {
                setDialogState({ ...dialogState, receivedBidDlgOpened: false });
            }}
        >
            <ReceivedBids
                onClose={() => {
                    setDialogState({ ...dialogState, receivedBidDlgOpened: false });
                }}
            />
        </ModalDialog>
    );
};

export default ReceivedBidsDlgContainer;
