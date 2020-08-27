import Nerv, { Component } from 'nervjs'
import { View, Button, LivePusher } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {

  state = {
    animation: ""
  }

  componentWillMount () {
  }

  componentDidMount () {
    this.animationCtx = Taro.createAnimation()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  animationCtx = null

  onClick() {
    this.setState({
      animation: this.animationCtx.scale(3, 3).translate(70, 20).step().export()
    })
  }

  render () {
    console.log(this.state.animation)
    return (
      <View className='index'>
        <LivePusher style={{width: '50px', height: '50px'}} animation={this.state.animation}></LivePusher>
        <Button onClick={this.onClick.bind(this)}>Click me</Button>
      </View>
    )
  }
}
