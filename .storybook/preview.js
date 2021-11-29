export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import StyleProvider from 'App/StyleProvider';

export const decorators = [
  (Story) => <StyleProvider><Story /></StyleProvider>,
];
