import React from "react";
import { AppRegistry, StyleSheet, Text, View, Image,  PanResponder,   Animated } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Hello from "../Pages/hello";
import Second from "../Pages/Second";

const Tabs = createBottomTabNavigator({
    Home: Hello,
    Settings: Second,

    // Home: {
    //     screen: Hello,
    //     navigationOptions: {
    //       tabBarIcon:<View style={{height:50, width:50, backgroundColor:"red"}}/>,
    //     }
    //   },
    //   HomeScreen: {
    //     screen: Second,
    //     navigationOptions: {
    //       tabBarIcon: ({ tintColor }) => 
    //       <View style={{height:50, width:50, backgroundColor:"yellow"}}>

    //       </View>
    //     }
    //   }
  });

  var TabNavigation = createAppContainer(Tabs);

  export interface Props {
    name: string;
    enthusiasmLevel?: number;
    pan:any;
  }
  
  interface State {
    pan:any;
    scale:any;
  }

  var _panResponder1:any;

export default class Tabss extends React.Component<Props,State>{
    constructor(props:any){
        super(props);
        this.state= {
          pan: new Animated.ValueXY(),
          scale: new Animated.Value(1)
        }
    }

    componentWillMount() {
      _panResponder1 = PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: (e, gestureState) => {
          this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
          this.state.pan.setValue({x: 0, y: 0});
          Animated.spring(
            this.state.scale,
            { toValue: 1.1, friction: 3 }
          ).start();
          console.log(" this is props  "+JSON.stringify(this.state))
        },
    
        onPanResponderMove: Animated.event([
          null, {dx: this.state.pan.x, dy: this.state.pan.y},
        ]),
    
        onPanResponderRelease: (e, { vx, vy }) => {
          this.state.pan.flattenOffset();
          Animated.spring(this.state.scale, { toValue: 1, friction: 3 }).start();
        }
      });
    }
    

    render(){
        let { pan } = this.state;
        let [translateX, translateY] = [pan.x, pan.y];
        let imageStyle = {transform: [{translateX}, {translateY}]};
       
        return(
            <View style={{flex:1}}>
              
              {/* <Animated.View style={imageStyle} {..._panResponder1.panHandlers}>
                <View  style={{height:50, width:50, backgroundColor:"red"}}/>
              </Animated.View>
              <TabNavigation/> */}
            </View>
        )
    }

}

