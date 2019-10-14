import { AsyncStorage } from 'react-native';
import axios from 'axios';

class Api {

    public getBaseURL(url:any) {
        return 'http://dogwalkingapi.herokuapp.com/'+url
    }

    public getRequest=(URL:any,headers:any,screenRef:any)=>(
        new Promise(async(resolve,reject)=>{
            console.log("getRequest request "+this.getBaseURL(URL))
            let headerData =  ""; // Strings.token
            axios.get(this.getBaseURL(URL),{
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "x-access-token":headerData,
                    ...headers
                }
            })
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                console.log("getRequest error"+JSON.stringify(error));
                let errMsg = "";
                if(error.response==undefined){
                    errMsg = error.message
                    reject(errMsg)
                }else{
                    errMsg = error.response.data.Message
                    reject(errMsg)
                }
            })
        })
        
    )

   public postRequest=(URL:any,body:any,headers:any)=>(
        new Promise(async(resolve,reject)=>{
            console.log("postRequest request"+this.getBaseURL(URL)+" "+JSON.stringify(body))
            let headerData =  ""; // Strings.token
            axios.post(this.getBaseURL(URL), body,{
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "x-access-token":headerData,
                    ...headers
                }
            })
              .then(function (response) {
                // handle success
                console.log("postRequest response"+JSON.stringify(response.data))
                resolve(response.data)
              })
              .catch(function (error) {
                let errMsg = "";
                console.log("postRequest error"+JSON.stringify(error))
                if(error.response==undefined){
                    errMsg = error.message
                    reject(errMsg)
                }else{
                    errMsg = error.response.data
                    reject(errMsg)
                }
                
              });
        })
    )
    
   
}

export default Api