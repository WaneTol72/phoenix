import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Header/>
            <Main/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
