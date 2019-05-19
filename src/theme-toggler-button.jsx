import React from 'react';
import { ThemeContext } from './theme-context';

const ThemeTogglerButton = props => (
    <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
            <button
                onClick={toggleTheme}
                style={{color: theme.foreground, backgroundColor: theme.background}}
            >
                Toggle Theme
            </button>
        )}
    </ThemeContext.Consumer>
);

export default ThemeTogglerButton;