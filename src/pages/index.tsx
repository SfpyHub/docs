import React, { StrictMode } from 'react';
import LayoutProviders from '@theme/LayoutProviders';
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../theme'
import App from '../components/App'

export default function Home() {
	return (
		<StrictMode>
			<FixedGlobalStyle />
			<LayoutProviders>
				<ThemeProvider>
	        <ThemedGlobalStyle />
	        
						<App />
				
				</ThemeProvider>
			</LayoutProviders>
		</StrictMode>
	)
}