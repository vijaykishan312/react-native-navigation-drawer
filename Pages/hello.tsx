import React, { useState, useEffect} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {loginRequest  } from "../Redux/Action/userAction";
import { useDispatch, connect, useSelector } from 'react-redux';
import DateTimePicker from "react-native-modal-datetime-picker";

interface Props {
    name: string;
    enthusiasmLevel?: number;
}

 const Hello: React.FC<Props> = props => {

    var dispatch = useDispatch()
    
    const [name, setName] = useState()
    const [salary, setSalary] = useState()
    const [age, setAge] = useState()
    const [id, setID] = useState()
    const data = { name:name, salary:salary, age:age, id:id };
    const newState = useSelector(state => state);

    // this is function calling...
    useEffect(() => { 
       
        
    });

    
    
    const onSubmitt=()=>{
        // for(let i=1;i<=5;i++){
        //     for(let j=0;j<i;j++){
        //         console.log("* ".repeat(i));
        //     }
        // }

        let reqData = {
            "email_id": name,
            "password": salary,
            "device_type": "android",
            "device_token": "03df25c845d460bcdad7802d2vf6fc1dfde97283bf75cc993eb6dca835ea2e2f",
        }

         dispatch(loginRequest(reqData));
        }

       const handleDatePicked=(date:any)=>{
            const simpleDate = new Date(date);
            console.log("A date has been picked: ", simpleDate);
            var year = simpleDate.getFullYear();
            var month = simpleDate.getMonth()+1;
            var day = simpleDate.getDate();
            var formattedDate = day + '/' + month + '/' + year;
        console.log("this is simple date",JSON.stringify(formattedDate));


            var month1:number = 0   
            var year1:number = 0
            var day1:number = 0

            if(month>12){
                year1 = simpleDate.getFullYear()+1;
            }else{
                year1 = simpleDate.getFullYear()+1;
            }

            var formattedDate1 = day1 + '/' + month1 + '/' + year1;
        }

  
      return (
        <View style={{flex:1, paddingTop:10}}>
            {/* <DateTimePicker
          isVisible={true}
          onConfirm={(date)=>handleDatePicked(date)}
          onCancel={()=>{}}
        /> */}
                <TextInput style={{height:40, width:250, marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Name" 
                    onChangeText={(value)=>setName(value)}/>
                <TextInput style={{height:40, width:250, marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Salary" 
                    onChangeText={(value)=>setSalary(value)}/>
                <TextInput style={{height:40, width:250, marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Age" 
                    onChangeText={(value)=>setAge(value)}/>
                <TextInput style={{height:40, width:250, marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="ID" 
                    onChangeText={(value)=>setID(value)}/>
                <TouchableOpacity style={{height:40, width:200, backgroundColor:"#DDDD"}} onPress={()=>onSubmitt()}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>

                {/* <Text style={{color:'black',fontSize:15,}}>{state}</Text> */}
        </View>
      );

    }

    export default connect()(Hello);



