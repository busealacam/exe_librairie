import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import CardComponent from './CardComponent';

const HomeRoute = () => <CardComponent/>;
const HistoRoute = () => <Text>History</Text>;
const AddRoute = () => <Text>Ajout</Text>;
const SettingsRoute = () => <Text>Param</Text>;

export default function NavComponent () {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
        { key: 'histo', title: 'Histo', icon: 'history', color: '#3F51B5' },
        { key: 'add', title: 'Ajout', icon: 'plus', color: '#3F51B5' },
        { key: 'settings', title: 'Param', icon: 'cog', color: '#3F51B5' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        histo: HistoRoute,
        add: AddRoute,
        settings: SettingsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
  );

}