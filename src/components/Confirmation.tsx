import { Card, CardContent, Stack, Typography } from '@mui/material';

const mapContainerStyle = {
  width: '100%',
  border: 'none'
};

function Confirmation() {
  const guestName = new URLSearchParams(window.location.search).get('guestName');
  return (
    <div>
      <Card>
        <CardContent>
          <Stack spacing={2} textAlign="left">
            <Typography variant="h5">Anotado, {guestName}! Vai ser um prazer te
              receber.
            </Typography>

            <Typography variant="body1">
              Te espero lá na casa da árvore no dia 8 de outubro.
            </Typography>

            <Typography variant="body1">
              Rua Belo Horizonte, 690 - Palmeiras<br/>
              Cabo Frio - RJ<br/>
              CEP: 28911-160
            </Typography>

            <Typography variant="body1">
              Se quiser ver no google maps, é só <a href="https://goo.gl/maps/oY89D9T7Xy3JSAuH6" target="_blank">clicar
              aqui.</a>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      <br/>
      <Card>
        <CardContent style={{ paddingBottom: '1rem' }}>
          <iframe style={mapContainerStyle}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235262.7913823363!2d-42.043345!3d-22.877156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x971ad4abd9ec59%3A0x86a61220047a988!2sCasa%20Da%20%C3%81rvore%20-%20Cabo%20Frio%20-%20Palmeiras!5e0!3m2!1sen!2sbr!4v1691550486462!5m2!1sen!2sbr"
                  width="600" height="300" allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
        </CardContent>
      </Card>
    </div>
  );
}

export default Confirmation;
