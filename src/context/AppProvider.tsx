import React from 'react';

import ThemeProvider from './ThemeProvider';

export default function AppProvider({ children }: AppProps) {
	return (
		<React.Fragment>
			<ThemeProvider>{children}</ThemeProvider>
		</React.Fragment>
	);
}
