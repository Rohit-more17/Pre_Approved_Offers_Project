import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import PracticeScreen from "./src/screens/PracticeScreen";
import TempScreen from "./src/screens/TempScreen";



const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    Temp : TempScreen,
    Prac : PracticeScreen ,
  },
  {
    initialRouteName :"Home",
    defaultNavigationOptions : {
      title : "XYZ Bank",
      headerTitleAlign: "center" ,
    }
  


  }
)

export default createAppContainer(navigator);
