import { useState } from "react"
import { Button, Text, View } from "react-native"
import { NativeModules } from 'react-native';

const { MyHelloModule } = NativeModules;

const getHello = async (): Promise<string> => {
  return await MyHelloModule.getHello();
}

const Home = () => {
  const [hello, setHello] = useState('')
  return <View>
    <Text>{hello}</Text>
    <Button title="Click me" onPress={() => {
      getHello().then((hello) => {
        setHello(hello)
      }).catch((error) => {
        console.error(error)
      })
    }} />
  </View>
}

export default Home