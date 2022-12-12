import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Button, Image} from "native-base"

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
        <View style={{flex: 0, marginTop:80}}>
          <Image
          source={require('../../assets/normal.png')}
          />
        </View>
        <View> 
          <Button
            onPress={() => navigation.navigate("채팅")} 
          >채팅하러가기</Button>
        </View>
        <View style={{flex: 1.5}} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, //전체의 공간을 차지한다는 의미
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: "center"
    },
  });
  
  export default HomeScreen;