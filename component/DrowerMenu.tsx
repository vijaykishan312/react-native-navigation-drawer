import React,{ Component } from "react";
import { View, TouchableOpacity, ScrollView , Dimensions, Image} from "react-native";
import { createDrawerNavigator,DrawerNavigatorItems, DrawerActions } from "react-navigation-drawer";
import Hello from "../Pages/hello"; 
import Second from "../Pages/Second";
import Googlemap from "../Pages/Googlemap";
import TabBar from "./TabBar";
import GoogleAddress from "../component/autoCompleteGoogleAddress";


const titleNameArray = ["first","second"]
const Window = Dimensions.get("window");

const getDrawerItem = (navigation:any) => (
    <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() =>(navigation.navigation.state.isDrawerOpen != true)?navigation.navigation.openDrawer():navigation.navigation.closeDrawer()} >
        <View style={{height:50,width:50}}>
            <Image source={require("../Images/vijaykishanvyas.jpg")} style={{height:48,width:48, borderRadius:50}}/>
        </View>
      </TouchableOpacity>
    );

const Drawer = createDrawerNavigator(
    {
    //  TabBar: {
    //     screen: TabBar,
    //  },
    Hello: {
       screen: Second,
    },
    // Second: {
    //     screen: Hello,
    //  },
     MapView: {
        screen: Googlemap,
     },
    //  GoogleAddress: {
    //     screen: GoogleAddress,
    //  },
  }, {
    contentComponent: props => 
    // props.navigation.openDrawer()
        <View style={{flex:1}}>
            <View style={{height:180,width:Window.width}}/>
            <ScrollView style={{flex:1,top:-5, backgroundColor:"#EEEE"}}>
                <DrawerNavigatorItems {...props} onItemPress={({ route, focused }) => {
                    (props.navigation.state.isDrawerOpen != true) ? DrawerActions.openDrawer() :DrawerActions.closeDrawer()
                    props.onItemPress({ route, focused }); }} >
                </DrawerNavigatorItems>
            </ScrollView>
        </View>,

    contentOptions: {
        activeBackgroundColor:"red",
        inactiveBackgroundColor:'#DDDD',
        inactiveTintColor:'white',
        activeTintColor:"yellow"
    }, 
    
},  
  );

  Drawer.navigationOptions = (navigation:any) =>{
    return(
        {
            title:"",
            headerStyle: {
                backgroundColor:"#DDDD",
            },
            headerTitleStyle: {
                color:"black",
                textAlign: 'center'
            },
            headerLeft: getDrawerItem(navigation),
        }
    )
}
export default Drawer;