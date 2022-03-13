import {Box, Container, Grid, IconButton, Typography} from "@mui/material";
import {Telegram} from "@mui/icons-material";

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl" sx={{my: 6}}>
                <Box sx={{maxWidth: "xl"}}>
                    <hr color="divider" style={{borderColor: "rgba(255, 255, 255, 0.12)", backgroundColor: "#121212"}}/>
                    <Grid container color="text.secondary" bgcolor="background.default">
                        <Grid item={true} xs={10.5} sm={11.25} md={11.5}>
                            <Typography variant="button">
                                Copyright © 2022 Phoenix Project.
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={1.5} sm={0.75} md={0.5}>
                            <IconButton href="https://t.me/+_U2P2vaS5xU5YzRi">
                                <Telegram/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </footer>
    )
}

export default Footer;