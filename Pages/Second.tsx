import React, { useState, useEffect} from 'react';
import { View, TouchableOpacity, Dimensions, TextInput} from 'react-native';
import { connect } from 'react-redux';

const window = Dimensions.get("window");

const array:any = [{key:"apple"},{key:"mango"}];

interface Props {
    name: string;
    enthusiasmLevel?: number;
}

 const Second: React.FC<Props> = props => {

    const [data, setData] = useState();
    const onFilterHandler=(event: any)=>{
        setData(event)

       const users = array.filter((data:any)=> {
           var data1 = "";
           if(data.key.toLowerCase().indexOf(event.toLowerCase()) != -1){
            data1 = data;
           }else{
            data1 = "No record found"
           }
           console.log(JSON.stringify(data1))
           
            // return  
          });
        //   console.log(JSON.stringify(users))
    }
  
      return (
        <View style={{flex:1, }}>
            <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignSelf:"center", marginTop:10}}>
                <TextInput onChangeText={(text) => onFilterHandler(text)} 
                    value={data} style={{height:45, width:window.width-40, backgroundColor:"red",borderRadius:15, padding:10}}>

                </TextInput>
            </TouchableOpacity>
        </View>
      );

    }

    export default connect()(Second);



