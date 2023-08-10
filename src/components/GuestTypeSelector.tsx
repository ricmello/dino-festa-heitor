import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { useAtom, useSetAtom } from 'jotai';
import { currentStepAtom, guestListAtom, guestNameAtom } from './store';
import { getGuestTypeLabel, GuestType, Steps } from "../helpers/models.ts";

function GuestTypeSelector() {
  const setStep = useSetAtom(currentStepAtom);
  const [guestName, setGuestName] = useAtom(guestNameAtom);
  const [guestList, setGuestList] = useAtom(guestListAtom);
  const types = [
    { id: GuestType.ADULT, label: getGuestTypeLabel(GuestType.ADULT) },
    { id: GuestType.CHILD, label: getGuestTypeLabel(GuestType.CHILD) },
    { id: GuestType.BABY, label: getGuestTypeLabel(GuestType.BABY) },
  ];

  const handleTypeSelect = (type: GuestType) => {
    setStep(Steps.GUEST_LIST);
    setGuestList([...guestList, { name: guestName, type }])
    setGuestName('');
  };

  return (
    <div style={{maxWidth: '400px', margin: '0 auto'}}>
      <Typography marginBottom={5} variant="h5">
        {guestList.length > 0 ? `Qual a idade de ${guestName}?` : 'E qual é a sua idade?'}
      </Typography>
      <Stack spacing={3}>
        {types.map((type) => (
          <Card key={type.id}>
            <CardActionArea onClick={() => handleTypeSelect(type.id)}>
              <CardContent>
                <Box paddingY={2} paddingX={6}>
                  <Typography>{type.label}</Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default GuestTypeSelector;
