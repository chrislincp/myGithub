import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"; 
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator"
import { Splash } from '../views/splash'
import routes from './routes'
import Login from "../views/login";

const SplashStack = createStackNavigator(
  {
    Splash,
  },
  {
    headerMode: "none",
  },
)

const AuthStack = createStackNavigator(
  {
    Login,
  },
  {
    headerMode: "none",
  },
)

const AppStack = createStackNavigator(
  routes,
  {
    headerMode: "none",
    navigationOptions: () => ({
      header: null,
      gesturesEnabled: true,
    }),
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal, // StackNavigator设置android水平转场动画
    }),
  },
); 


const RootNavigation = createSwitchNavigator(
  {
    SplashStack,
    AuthStack,
    AppStack,
  },
  {
    initialRouteName: 'AppStack',
  }
)


export default createAppContainer(RootNavigation);
