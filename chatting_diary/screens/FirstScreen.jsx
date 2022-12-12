import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Button, Image} from "native-base"
const FirstScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={{flex: 0, marginTop:40}}>
          <Image width={160} height={100}
          source={require('../../assets/egg.png')}
          />
      </View>
      <Image
      source={require('../../assets/normal.png')}
      />
      <View style={{flex:0, marginTop:30}}>      
        <Button 
            size="lg" 
            variant="subtle"
            colorScheme="secondary"
            onPress={() => navigation.navigate("Chatting")} 
        >채팅하러가기 </Button>
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

export default FirstScreen;