import React, { useRef } from 'react'
import * as S from './PostInput.style'

interface Props {
  typeNewPost: func
  value: string
}

const PostInput = ({ value, typeNewPost }: Props) => {
  return (
    <S.PostInput>
      <S.Input
        autoCapitalize="sentences"
        autoCompleteType="off"
        autoCorrect={true}
        autoFocus={true}
        blurOnSubmit={false}
        caretHidden={false}
        clearButtonMode="never"
        clearTextOnFocus={false}
        contextMenuHidden={false}
        dataDetectorTypes="all"
        defaultValue=""
        disableFullscreenUI={false}
        editable={true}
        enablesReturnKeyAutomatically={false}
        importantForAutofill="no"
        keyboardAppearance="default"
        maxLength={500}
        multiline={true}
        numberOfLines={10}
        onChangeText={(t) => typeNewPost(t)}
        placeholder="Say Something.."
        textAlignVertical="top"
        value={value}
      />
    </S.PostInput>
  )
}

export default PostInput
