import { createContext } from 'react';

export const ThemeContext = createContext({ theme: {} });

export function ThemeProvider(props) {
	return (
		<ThemeContext.Provider value={{ theme: props.theme || {} }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
