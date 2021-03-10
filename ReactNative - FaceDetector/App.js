import {StatusBar} from "react-native";
import React,{useEffect,useState} from 'react';
import { StyleSheet,Text,View,SafeAreaView,} from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default function App() {

  const [userpermition,SetUserPermition] = useState(null);
  const [faceHandle,setFaceHandle] = useState([]);
 

  useEffect(()=>{

    StatusBar.setHidden(true);

    (async () =>{

      const {status} = await Camera.requestPermissionsAsync();
      SetUserPermition(status === "granted");

    })();

  },[]);


  if(userpermition ==  null){
    return(
      <View><Text>Não Permitido</Text></View>
    );
  }

  if(userpermition == false){
    return(
      <View><Text>Não Permitido</Text></View>
    );
  }

  const faceDetected = ({faces}) => {
    setFaceHandle(faces);
  }

  const ProprietiesView = () =>{

    return(
      <View style= {{width:300,height:300,backgroundColor:"rgba(255,255,255,0.6)",top:360}}>
          <Text style={{fontSize:14,fontWeight:"bold",marginLeft:5,marginBottom:4}}> 
            FaceID: {faceHandle[0].faceID}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            Size: W {faceHandle[0].bounds.size.width} H {faceHandle[0].bounds.size.height} 
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:11}}> 
            Origin: Y {faceHandle[0].bounds.origin.y} X {faceHandle[0].bounds.origin.x} 
          </Text>  
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            RollAngle: {faceHandle[0].rollAngle} 
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            YawAngle: {faceHandle[0].yawAngle} 
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            SmilingProbability : {faceHandle[0].smilingProbability } 
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            Bounds: Y {faceHandle[0].bounds.origin.y} X {faceHandle[0].bounds.origin.x}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            L Eyes: Y {faceHandle[0].leftEyePosition.y} X {faceHandle[0].leftEyePosition.y}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            R Eyes: Y {faceHandle[0].rightEyePosition.y} X {faceHandle[0].rightEyePosition.y}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
             R Eyes Open: % {faceHandle[0].rightEyeOpenProbability}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
             L Eyes Open: % {faceHandle[0].leftEyeOpenProbability}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            L Ear: Y {faceHandle[0].leftEarPosition.y} X {faceHandle[0].leftEarPosition.y}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            R Ear: Y {faceHandle[0].rightEarPosition.y} X {faceHandle[0].rightEarPosition.y}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            L Cheek: Y {faceHandle[0].leftCheekPosition.y} X {faceHandle[0].leftCheekPosition.y}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            R Cheek: Y {faceHandle[0].rightCheekPosition.y} X {faceHandle[0].rightCheekPosition.y}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            L Mounth: Y {faceHandle[0].leftMouthPosition.y} X {faceHandle[0].leftMouthPosition.y}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            R Mounth: Y {faceHandle[0].rightMouthPosition.x} X {faceHandle[0].rightMouthPosition.x}
          </Text>
          <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,marginBottom:2}}> 
            Nose: Y {faceHandle[0].noseBasePosition.y} X {faceHandle[0].noseBasePosition.y}
          </Text>
      </View>
         
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        autoFocus={"on"}
        focusDepth={"0"}
        ratio={"16:9"}
        type='front'
        onFacesDetected = {faceDetected}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.accurate,
          detectLandmarks: FaceDetector.Constants.Landmarks.all,
          runClassifications: FaceDetector.Constants.Classifications.all,
          minDetectionInterval: 1000,
          tracking: true,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          {faceHandle[0] && 
            <View>
            <ProprietiesView/>
            </View>
          }
        </View>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button:{
    top:10,
    alignItems:"center",
    backgroundColor:'#6495ED',
    width:180,
    padding:15
  },
  buttonCamera:{
    flex:1,
    borderRadius:50,
    padding:15,
    backgroundColor:"rgba(0,0,0,0.6)",
    position:"absolute",
    bottom:13,
    right:"42%",
  },
});
