import React from 'react';
import { AppProps } from 'typings/interfaces';
import ThemeProvider from './ThemeProvider';

export default function AppProvider({ children }: AppProps) {
	return (
		<React.Fragment>
			<ThemeProvider>{children}</ThemeProvider>
		</React.Fragment>
	);
}
