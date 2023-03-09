import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../theme';
import Topbar from './scenes/global/Topbar';
import { Routers } from '../routes/Routers';
import SideBar from './scenes/global/SideBar';

const App: FC = () => {
	const { theme, colorMode } = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<SideBar />
					<main className='content'>
						<Topbar />
						<Routers />
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
