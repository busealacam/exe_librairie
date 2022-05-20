import { Provider as PaperProvider } from 'react-native-paper';
import CardComponent from './CardComponent';
import Main from './Main';
import NavComponent from './NavComponent';


export default function App() {
  return (
    <PaperProvider>
      <Main/>
      <NavComponent/>
    </PaperProvider>
  );
}




