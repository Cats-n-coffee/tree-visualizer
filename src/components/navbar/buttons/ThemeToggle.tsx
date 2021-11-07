import * as React from 'react';

import { useThemeProvider } from '../../../context/ThemeProvider';

export default function ThemeToggle() {
	const { setTheme, theme } = useThemeProvider();

	function toggleTheme() {
		return theme === 'light' ? setTheme('dark') : setTheme('light');
	}

	return (
		<button
			aria-label="theme toggle"
			className={`themeToggle ${theme === 'dark' ? 'toggle' : null}`}
			onClick={toggleTheme}
			type="button"
		/>
	);
}
