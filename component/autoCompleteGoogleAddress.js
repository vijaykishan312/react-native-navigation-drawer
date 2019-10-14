import React, { Component } from 'react';
import {TouchableOpacity,View,Dimensions,Image,Text,ScrollView, FlatList, StatusBar, BackHandler} from 'react-native';
import { connect } from 'react-redux'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

var cityDetails = 'unknown';

class SearchPostalCodeUsingAddress extends Component{

    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <View style={{flex:1,width:"100%"}}>
                <GooglePlacesAutocomplete
                    placeholder='Chose your location'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    query={{ 
                        key: 'AIzaSyAGffqwrrLXqBDL_KlvxARlGwhqgU0lo0s', 
                        language: 'en',
                        radius:2000,
                        }}
                    GooglePlacesSearchQuery= {{ rankby: 'distance' }}
                    styles={{
                        textInputContainer: {
                        backgroundColor:"transparent",
                        borderBottomWidth:0,
                        },
                        textInput: {
                        margin:0,
                        height: 38,
                        backgroundColor:"#DDDD",
                        color: '#5d5d5d',
                        fontSize: 16,
                        },
                        predefinedPlacesDescription: {
                        color: '#1faadb'
                        },
                    }}
                    onPress={(data, details = null) => {
                        cityDetails = details;
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    renderRightButton={() => this.renderRightButton()}
                    /> 
            </View>
        )
    }

    renderRightButton =()=>{
        return(
        <TouchableOpacity style={{width:30,height:30, marginTop:15}} activeOpacity={.5} onPress={()=>this.selectAddress()}>
        </TouchableOpacity>
        );
      }

      selectAddress=()=> {
        if(cityDetails !== 'unknown'){
            const data = {
                latitude:cityDetails.geometry.location.lat,
                longitute:cityDetails.geometry.location.lng,
                modal:false,
            }
            
            this.props.getLocationUsingAddress(data)
            cityDetails = 'unknown';
      
        }
      }
}

function mapStateToProps(state){
    return {}
}
export default connect(mapStateToProps)(SearchPostalCodeUsingAddress);

