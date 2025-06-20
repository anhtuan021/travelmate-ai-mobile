import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useColorScheme } from 'react-native';
import { theme } from '@/utils/theme/theme';
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <GluestackUIProvider
        config={theme}
        colorMode={
          colorScheme === 'light' || colorScheme === 'dark'
            ? colorScheme
            : undefined
        }
      >
        {children}
      </GluestackUIProvider>
    </Provider>
  );
};
export default AppProvider;
