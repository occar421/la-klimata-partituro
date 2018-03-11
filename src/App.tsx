import * as React from 'react';
import * as style from './App.css';

import Button from './components/Button';
import logo from './logo.svg';

/**
 * Main app component
 */
class App extends React.Component {
  /**
   * Render component
   */
  public render() {
        return (
            <div className={style.app}>
                <header className={style.appHeader}>
                    <img src={logo} className={style.appLogo} alt="logo"/>
                    <h1 className={style.appTitle}>Welcome to React</h1>
                </header>
                <p className={style.appIntro}>
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                    <Button onClick={this.onClick}>Click me!</Button>
                </p>
            </div>
        );
    }

    private readonly onClick = () => alert('Hello');
}

export default App;
