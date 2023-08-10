import { Box, Card, CardActionArea, CardContent, IconButton, ListItem, Stack, Typography, } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { useAtom, useSetAtom } from 'jotai';
import { currentStepAtom, guestListAtom, guestNameAtom } from './store';
import { getGuestTypeLabel, Steps } from "../helpers/models.ts";
import { Add, Delete } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Companion, Guest } from '../models';
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports.ts";

function GuestList() {
  const setStep = useSetAtom(currentStepAtom);
  const [guestList, setGuestList] = useAtom(guestListAtom);
  const setGuestName = useSetAtom(guestNameAtom);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  Amplify.configure(awsExports)
  const handleAddCompanion = () => {
    setStep(Steps.GUEST_NAME);
  };

  const handleDeleteCompanion = (index: number) => {
    setGuestList(guestList.filter((_, i) => i !== index));
  }

  const handleSave = async () => {
    setLoading(true);
    const [mainGuest, ...companions] = guestList;
    const guest = await DataStore.save(new Guest({
      "name": mainGuest.name,
      "type": mainGuest.type,
    }));

    for (const companion of companions) {
      await DataStore.save(new Companion({
        "name": companion.name,
        "type": companion.type,
        "guestID": guest.id
      }));
    }

    navigate(`/confirmation?guestName=${guest.name}`);
    setGuestList([]);
    setLoading(false);
    setStep(Steps.WELCOME);
    setGuestName('');
  }

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Typography variant="h5" marginBottom={3}>
        Só pra confirmar, está todo mundo aí?
      </Typography>
      <Stack spacing={3}>
        {guestList.map((guest, index) => (
          <Card key={index}>
            <CardContent>
              <ListItem
                secondaryAction={
                  <Stack spacing={1} direction="row">
                    {
                      index > 0 && (
                        <IconButton edge="end" color="error" onClick={() => handleDeleteCompanion(index)}>
                          <Delete/>
                        </IconButton>
                      )
                    }
                  </Stack>
                }
              >
                <Box>
                  <Typography variant="body1" fontWeight="bold">{guest.name || ''}</Typography>
                  <Typography variant="body2">{getGuestTypeLabel(guest.type) || ''}</Typography>
                </Box>
              </ListItem>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardActionArea onClick={handleAddCompanion}>
            <CardContent>
              <ListItem
                secondaryAction={<Add color="primary"/>}
              >
                <Typography variant="body1">Adicionar acompanhante</Typography>
              </ListItem>

            </CardContent>
          </CardActionArea>
        </Card>

        <LoadingButton loading={loading} size="large" variant="contained" onClick={handleSave}>
          <Box padding={1}>
            Sim, tudo certo!
          </Box>
        </LoadingButton>
      </Stack>
    </div>
  );
}

export default GuestList;
