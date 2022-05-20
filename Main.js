import { Appbar, Avatar } from 'react-native-paper';

export default function Main() {
    return (
        <Appbar.Header style={{backgroundColor: "#3F51B5"}} >
            <Appbar.Content title="Activity Trackers" />
            <Avatar.Image style={{backgroundColor: "#dfc3bf"}} size={50} source={require("./assets/avatar.png")}/>
        </Appbar.Header>
    )
}


