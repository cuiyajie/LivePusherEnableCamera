import Nerv, { Component } from 'nervjs'
import { View, Text, LivePusher } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <LivePusher style={{width: '100vw', height: '100vh'}} enableCamera={false}></LivePusher>
      </View>
    )
  }
}
