import { PermissionsAndroid } from 'react-native';
// import FusedLocation from 'react-native-fused-location';



export async function requestLocationPermission()  {
    const granted = await PermissionsAndroid.request(
                   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                       title: 'App needs to access your location',
                       message: 'App needs access to your location ' +
                       'so we can let our app be even more awesome.'
                       }
                   );
                   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the location")
                    // alert("You can use the location");
                    } else {
                    console.log("location permission denied")
                    // alert("Location permission denied");
                    }
}