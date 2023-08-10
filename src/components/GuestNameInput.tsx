import { Button, Input, Stack, Typography } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { currentStepAtom, guestListAtom, guestNameAtom } from './store';
import { ChevronRight } from "@mui/icons-material";
import { Steps } from "../helpers/models.ts";

function GuestNameInput() {
  const [guestName, setGuestName] = useAtom(guestNameAtom);
  const guestList = useAtomValue(guestListAtom);
  const [, setStep] = useAtom(currentStepAtom);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuestName(event.target.value);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Typography marginBottom={5} variant="h5">
        {guestList.length > 0 ? 'E quem mais vai com você?' : 'Vamos começar... qual o seu nome?'}
      </Typography>
      <Stack spacing={3}>
        <Input
          placeholder="Ex.: Ricardo Mello"
          value={guestName}
          onChange={handleNameChange}
        />
        <Button
          size="large"
          endIcon={<ChevronRight/>}
          variant="contained"
          disabled={guestName.length <= 1}
          onClick={() => setStep(Steps.GUEST_TYPE)}>
          Continuar
        </Button>
      </Stack>
    </div>
  );
}

export default GuestNameInput;
