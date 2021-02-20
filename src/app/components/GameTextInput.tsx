import React from 'react'
import { useEffect, useRef } from 'react'
import { TextInstance } from '../../typechase'

const GameTextInput = ({ textInstance, inputChange }: { textInstance: TextInstance; inputChange: any }) => {
    let textInput = useRef(null)

    useEffect(() => {
        if (textInput && textInput.current) {
            ;(textInput.current as any).focus()
        }
    }, [])

    const forceFocus = () => {
        ;(textInput.current as any).focus()
    }

    return <input ref={textInput} value={textInstance.inputContent} onChange={inputChange} onBlur={forceFocus} />
}

export default GameTextInput