import React from 'react';
import './index.css';

import { Consumer as ThemeConsumer} from './theme-context';
const ThemeColor = props => (
    <ThemeConsumer>
    {({theme}) => <p className="theme-box" style={{color: theme.foreground, backgroundColor: theme.background}}>
            the aim of this section is to show what the theme colors look like. here we add more text just so that you may clearly see it.
            Add more text to have a larger box size.
        </p>}
    </ThemeConsumer>
);
/*
class ThemeColor extends React.Component {
    render() {
        const theme = this.context;
        return (
                <p className="theme-box" style={{ backgroundColor: theme.background, color: theme.foreground}}>
                    the aim of this section is to show what the theme colors look like. here we add more text just so that you may clearly see it.
            </p>
        );
    }
}
ThemeColor.contextType = ThemeContext;
*/
export default ThemeColor;