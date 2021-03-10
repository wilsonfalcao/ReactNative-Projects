import {StatusBar} from "react-native";
import React,{useEffect,useState} from 'react';
import { StyleSheet,Text,View,SafeAreaView,} from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default function App() {

  const [userpermition,SetUserPermition] = useState(null);
  const [faceHandle,setFaceHandle] = useState([]);
  const [dimensions,setDimensions] = useState([]);
 

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
    setDimensions({
        EyesDimension:(faces[0] ? (faces[0].bounds.size.width/5) : 0),
        PupilsDimension:(faces[0] ? (faces[0].bounds.size.width/5)/3 : 0),
        MounthDimension:(faces[0] ? (faces[0].bounds.size.width/2.4) : 0),
        Smelling:(faces[0] ? faces[0].smilingProbability : 0 ),

    });

    //console.log(faceHandle[0].rightMouthPosition);
  }

  const ProprietiesView = () =>{

    return(
      <View style= {{width:300,height:300,top:360}}>

      </View>
         
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{flex: 1 }}
        autoFocus={"on"}
        focusDepth={"0"}
        ratio={"16:9"}
        type='front'
        onFacesDetected = {faceDetected}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.all,
          runClassifications: FaceDetector.Constants.Classifications.all,
          minDetectionInterval: 100,
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
            <View style={{flex:1,backgroundColor:"#000"}}>
              {faceHandle[0].leftEyeOpenProbability >0.6 && 
              <View style={{position:'absolute',left:faceHandle[0].leftEyePosition.x-10, top :faceHandle[0].leftEyePosition.y-15,}}>
                  <View style=
                    {{
                      width:dimensions.EyesDimension,
                      height:dimensions.EyesDimension,
                      borderRadius:dimensions.EyesDimension,
                      backgroundColor:"#FFFF00"
                    }}
                  >
                    <View style=
                      {{
                        width:dimensions.PupilsDimension,
                        height:dimensions.PupilsDimension,
                        left:(dimensions.EyesDimension/2) - (dimensions.PupilsDimension/2),
                        top:(dimensions.EyesDimension/2) - (dimensions.PupilsDimension/2),
                        borderRadius:dimensions.EyesDimension,
                        backgroundColor:"#000"
                      }}
                    >
                    </View>

                  </View>
              </View>}
              
              {faceHandle[0].rightEyeOpenProbability >0.6 && 
              <View style={{position:'absolute',left:faceHandle[0].rightEyePosition.x-10, top :faceHandle[0].rightEyePosition.y-15,}}>
                  <View style=
                    {{
                      width:dimensions.EyesDimension,
                      height:dimensions.EyesDimension,
                      borderRadius:dimensions.EyesDimension,
                      backgroundColor:"#FFFF00"
                    }}
                  >
                    <View style=
                      {{
                        width:dimensions.PupilsDimension,
                        height:dimensions.PupilsDimension,
                        left:(dimensions.EyesDimension/2) - (dimensions.PupilsDimension/2),
                        top:(dimensions.EyesDimension/2) - (dimensions.PupilsDimension/2),
                        borderRadius:dimensions.EyesDimension,
                        backgroundColor:"#000"
                      }}
                    >
                    </View>

                  </View>
              </View>}
              
              {faceHandle[0].smilingProbability >0.5 && 
              <View style={{position:'absolute',left:faceHandle[0].rightMouthPosition.x, top :faceHandle[0].leftMouthPosition.y-15,}}>
                    <View style={{
                      width:dimensions.MounthDimension,
                      height:(dimensions.MounthDimension/2),
                      backgroundColor:"#FFFF00",
                      borderBottomLeftRadius:dimensions.MounthDimension,
                      borderBottomRightRadius:dimensions.MounthDimension,
                      alignItems:"center",
                      }}
                    >
                    </View>
                  </View>}
              <Text style={{top:620,marginLeft:110,color:"#FFF",fontSize:14,fontWeight:"bold"}}>Eu sou você no escuro...</Text>
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
