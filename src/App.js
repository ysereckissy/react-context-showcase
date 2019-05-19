import React from 'react';
import './App.css';

import ThemedButton from './themed-button';
import { Provider, themes } from './theme-context';
import ThemeColor from './ThemeColor';
import ThemeTogglerButton from './theme-toggler-button';

const Toolbar = props => (
  <ThemedButton onClick={props.changeTheme} >
    Change Theme
  </ThemedButton>
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  }

  render = () => {
    return (
      <article>
        <Provider value={this.state} >
         <ThemeTogglerButton /> 
        <section>
          <ThemeColor />
        </section>
        </Provider>
      </article>
    )
  }
}
export default App;
