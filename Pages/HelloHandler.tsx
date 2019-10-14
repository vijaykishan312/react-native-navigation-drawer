// components/Hello.tsx
import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { requestLocationPermission } from "../CommonFunction/CommonFunction";
import { connect } from 'react-redux';
import DrawerMenu from "../component/DrowerMenu";
import GoogleAddress from "../component/autoCompleteGoogleAddress";

export interface Props {
}

const NavigationDrawer = createAppContainer(
    createStackNavigator({
        DrawerMenu:{
            screen:DrawerMenu,
          },
        //   GoogleAddress: {
        //      screen: GoogleAddress,
        //   },
      
    },{
        defaultNavigationOptions: (props) => {
            return (
                {              
                   headerTitleStyle: {
                   textAlign: 'center',
                   alignSelf: 'center',
                   fontFamily: 'ArialMT',
                   fontWeight: '300',
                   fontSize:18,
                 },
                   headerStyle:{
                     backgroundColor:"#DDDD"
                   }
               });
              
         }
   })
  )


  class HelloHandler extends React.Component<Props> {
      constructor(props:Props){
          super(props);
      }

      async componentDidMount() {
      await requestLocationPermission()
    }
        render(){
            return(
                <View style={{flex:1, backgroundColor:"yellow"}}>
                    <NavigationDrawer/>
                </View>
            )
        }

    }

    export default connect()(HelloHandler);