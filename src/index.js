import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const renderContainer = Component => {
  render(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('main'),
  );
};

renderContainer(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderContainer(App);
  });
}
