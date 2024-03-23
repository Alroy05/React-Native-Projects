import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
  return <View style={styles.card}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  card : {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 36,
    marginHorizontal : 24,
    padding : 16,
    backgroundColor : Colors.primary800,
    borderRadius : 8,
    elevation : 4,       //andriod only property(no effect on ios)

    //following shadow styles are for ios only
    shadowColor : 'black',
    shadowOffset : { width: 0,height: 2},
    shadowRadius : 6,
    shadowOpacity : 0.25
  },
})

export default Card;