import { Card, Paragraph, Title } from "react-native-paper"
import { ScrollView, StyleSheet, View } from "react-native"

export default function CardComponent() {
    const cardItems = [
        {
            title: "Marche à pied",
            date: "26 mai 2021",
            img: "https://picsum.photos/id/103/2592/1936",
            distance: "6 Km",
            time: "0h59 mn"
        },
        {
            title: "Vélo",
            date: "23 mai 2021",
            img: "https://picsum.photos//id/1077/3000/1995",
            distance: "10 Km",
            time: "1h59 mn"
        },
        {
            title: "Trekking",
            date: "20 mai 2021",
            img: "https://picsum.photos/id/1044/4032/2268",
            distance: "15 Km",
            time: "2h59 mn"
        },
        {
            title: "Marche à pied",
            date: "2 mai 2021",
            img: "https://picsum.photos/id/103/2592/1936",
            distance: "11 Km",
            time: "2h00 mn"
        },
      
    ];
    return (
        <ScrollView>
            <Title style={styles.mainTitle}>Home</Title>
            {
            cardItems.map((item, index) => (
                <Card key={index} data={item} mode={"outlined"} style={styles.container} >
                    <View style={styles.cardcontent}>
                        <View style={styles.contentElem}>
                            <View>
                                <Paragraph>{item.date}</Paragraph>
                                <Title>{item.title}</Title>
                            </View>
                            <View>
                                <Title>Distance</Title>
                                <Paragraph>{item.distance}</Paragraph>
                            </View>
                        </View>
                        <View style={styles.contentElem}>
                            <Card.Cover style={styles.containerImg} source={{uri : item.img}}/>
                            <Title>Durée</Title>
                            <Paragraph>{item.time}</Paragraph>
                        </View>
                    </View>
                </Card>
            ))
            }
        </ScrollView>
       
    )
}
const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 30,
        paddingLeft: 10,
        marginTop: 10,
    },
    container: {
        borderColor: "black",
        margin: 10,
        padding: 10,
    },
    cardcontent: {
      backgroundColor : '#ffffff',
      flexDirection: "row",
    },
    contentElem: {
         width: "50%",
         justifyContent: "space-between"
    },
    containerImg: {
        width: "100%",
        height: 130,
        borderWidth: 1,
        borderColor: "black",
    }
    
});
