import React from "react";
import {View, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image, PermissionsAndroid} from "react-native";
import MapView, { Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


var { width, height } = Dimensions.get('window')


export interface Props{
    name:any;
    navigation:any;
}

export interface State{
    region:{
        latitude: any,
        longitude: any,
        latitudeDelta: any,
        longitudeDelta: any,
        routeCoordinates:any,
    }
}

export default class GoogleMap extends React.Component<Props, State>{

 public mapRefrence:any;
 public watchId:any;
 
    constructor(props:any){
        super(props);
        this.state = {
            region:{
                latitude: null,
                longitude: null,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                routeCoordinates:[]
            }
        }
    }

    async componentDidMount() {
        Geolocation.getCurrentPosition((position)=>{
            console.log(" this is ============ "+JSON.stringify(position))
            this.setState({region:{...this.state.region, latitude:position.coords.latitude, longitude:position.coords.longitude}})
        })

        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${"26.9124,75.7873"}&destination=${"26.2389, 75.0243"}&key=AIzaSyDgJKxePVu8AKVVAPObRqzWvIALVFZeIlA`)        
        let respJson = await resp.json();
        console.log(" this is gio locatrion "+JSON.stringify(respJson))
    //     this.watchId = Geolocation.watchPosition(
    //       (position) => {
    //           console.log(" this is gio locatrion "+JSON.stringify(position.coords))
    //         // const { routeCoordinates } = this.state
    //         // const positionLatLngs = pick(position.coords, ['latitude', 'longitude'])
    //   })
      
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <MapView 
                    ref={(ref)=>this.mapRefrence = ref}
                    style={styles.map}
                    showsMyLocationButton={true}
                    zoomEnabled = {true}
                    initialRegion={this.state.region}>
                        <Marker title="760, Shastry nagar Ram nagar jaipur" coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude}} >
                            <View style={{height:36, width:36, backgroundColor:"red",borderRadius:50}}>
                                <Image source={require("../Images/vijaykishanvyas.jpg")} style={{height:35, width:35, borderRadius:50}}/>
                            </View>
                        </Marker>

                        <Polyline
                            coordinates={[
                                { latitude: 26.9124, longitude: 75.7873 },
                                { latitude: 26.2389, longitude: 73.0243 }
                            ]}
                            strokeColor="#238C23"
                            strokeColors={[ '#7F0000', '#00000000', '#B24112', '#E5845C', '#238C23', '#7F0000' ]}
                            strokeWidth={6} />


                </MapView>

                <TouchableOpacity style={{height:35, width:35, position:"absolute", top:12, right:5, borderRadius:50, backgroundColor:"#DDDD"}}
                    onPress={()=>this.mapRefrence.animateToRegion(this.state.region)}>
                    <Image source={require("../Images/current-location.png")} style={{height:35, width:35, tintColor:"#696969"}}/>
                </TouchableOpacity>

                <TouchableOpacity  activeOpacity={.85} style={{ backgroundColor:"#FFFF", position:"absolute", top:8, right:45, borderRadius:8, height:45, width:width-55}}  onPress={()=>console.log(JSON.stringify(this.props.navigation.navigate("GoogleAddress")))}>
                    {/* <TextInput style={{height:45, width:width-55, paddingLeft:8, fontSize:16}} placeholder={"Chouse Your Location"}/> */}
                    {/* <GoogleAddress/> */}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: width,
        height: height,
        position:"relative"
    },
});