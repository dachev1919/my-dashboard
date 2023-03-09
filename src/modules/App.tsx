import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../theme';
import Topbar from "./scenes/global/Topbar";
import {Routers} from "../routes/Routers";

const App: FC = () => {
	const { theme, colorMode } = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<main className='content'>
						<Topbar/>
						<Routers />
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
