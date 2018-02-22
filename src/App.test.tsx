import * as enzyme from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

it('renders the header', () => {
    const app = enzyme.shallow(<App/>);
    expect(app.find('.app-header').exists()).toBe(true);
});

it('renders the description', () => {
    const app = enzyme.shallow(<App/>);
    expect(app.find('.app-intro').exists()).toBe(true);
});

it('renders the logo', () => {
    const app = enzyme.shallow(<App/>);
    expect(app.find('.app-logo').exists()).toBe(true);
});