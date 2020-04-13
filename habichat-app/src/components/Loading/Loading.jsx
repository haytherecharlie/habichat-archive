import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import * as S from './styles/loading.style'

const Loading = () => {
  const animation = new Animated.Value(0)

  useEffect(() => {
    Animated.loop(Animated.timing(animation, { toValue: 1, duration: 2000 })).start()
  }, [Animated])

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg']
  })

  return (
    <S.Loading>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Svg height={40} width={40} x={0} y={0}>
          <Circle
            cx={20}
            cy={20}
            r={18}
            strokeWidth={4}
            stroke="#000"
            fill="transparent"
            strokeDasharray={Math.PI * 25}
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>
    </S.Loading>
  )
}

export default Loading
