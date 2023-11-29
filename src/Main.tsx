import { PaperProvider, MD3LightTheme } from 'react-native-paper';

import App from './App';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
  },
};

const Main = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};
export default Main;
