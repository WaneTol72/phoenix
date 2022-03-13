import {Container, Typography} from "@mui/material";


function Main() {
    return (
        <main>
            <Container maxWidth={"md"} sx={{mt: 2}}>
                <Typography variant="h1" component="h4" align="center" color="text.primary">
                    Твою мать ебли ниггеры
                </Typography>
            </Container>
            <Container sx={{mt: 2}}>
                <Typography sx={{mb: 1}} variant="h4" component="h4" align="center" color="text.primary">
                    Заголовок
                </Typography>
                <Typography color="text.primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis arcu quis metus
                    maximus, a faucibus erat congue. Sed et venenatis est. Phasellus id orci ultrices, lacinia lacus
                    posuere, tempus nulla. Maecenas id consectetur tellus. Curabitur non ornare nunc. Nunc maximus
                    sollicitudin odio, non bibendum ante gravida non. Aliquam vitae faucibus elit, eget blandit nisl.
                    Quisque condimentum nibh vitae dolor ultrices, vel dictum tellus vestibulum. Vivamus ut dictum
                    neque.
                </Typography>
            </Container>
            <Container sx={{mt: 2}}>
                <Typography sx={{mb: 1}} variant="h4" component="h4" align="center" color="text.primary">
                    Заголовок
                </Typography>
                <Typography color="text.primary">
                    Nunc non rhoncus orci. Nam eu urna neque. Fusce vel nunc enim. Aenean et sem quis tortor rhoncus
                    tristique sagittis at ligula. Proin porttitor orci lectus, sit amet ullamcorper nisl tincidunt sed.
                    Morbi eget tellus imperdiet, rutrum lacus ut, sollicitudin odio. Curabitur accumsan lobortis tortor,
                    nec fermentum quam condimentum vitae. Aenean fermentum facilisis augue, non mattis lectus
                    ullamcorper at. Fusce vel diam sapien. Maecenas arcu lorem, faucibus sit amet ullamcorper interdum,
                    tristique faucibus ligula.
                </Typography>
            </Container>
            <Container sx={{my: 2}}>
                <Typography sx={{mb: 1}} variant="h4" component="h4" align="center" color="text.primary">
                    Заголовок
                </Typography>
                <Typography color="text.primary">
                    Morbi vulputate facilisis orci, quis lacinia sapien blandit ac. Fusce mollis lorem at varius
                    sodales. Curabitur augue felis, ornare pharetra mauris sit amet, aliquam fringilla mauris. Morbi
                    molestie, dolor consequat dignissim egestas, urna nulla condimentum mi, at maximus felis est nec
                    urna. Pellentesque at nibh quis ipsum mattis dictum. Maecenas commodo eleifend lacus eget euismod.
                    Integer vestibulum magna in dui aliquam, in blandit libero dignissim. Aliquam massa purus,
                    consectetur eu nunc in, vulputate semper libero. Aenean at aliquam lorem. Suspendisse malesuada
                    fermentum quam aliquam semper. Nulla luctus a tortor laoreet aliquet. Duis interdum ligula magna,
                    vel vulputate risus fringilla nec. Fusce lectus lorem, ullamcorper eu tincidunt ac, viverra eu
                    ipsum. Phasellus condimentum luctus sodales. Cras luctus non elit vitae mollis. </Typography>
            </Container>

        </main>
    )
}

export default Main;