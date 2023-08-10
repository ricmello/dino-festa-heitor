import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useSetAtom } from "jotai";
import { currentStepAtom } from "./store.ts";
import { Steps } from "../helpers/models.ts";

function Welcome() {
  const setStep = useSetAtom(currentStepAtom);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div>
      <Stack spacing={3}>
        <div>
          <img src="/logo.png" alt="Dino Festa" style={{ width: '100%', maxWidth: '500px' }}/>
        </div>
        <Typography variant={sm ? 'h3' : 'h4'}>
          Preparado pra dino festa do Heitor?
        </Typography>

        <Typography variant="h5">
          A gente te espera no dia 08 de outubro pra comemorar.
        </Typography>

        <Box paddingBottom={10}>
          <Button size="large" variant="contained" onClick={() => setStep(Steps.GUEST_NAME)}>
            Simbora!
          </Button>
        </Box>
      </Stack>
    </div>
  );
}

export default Welcome;
