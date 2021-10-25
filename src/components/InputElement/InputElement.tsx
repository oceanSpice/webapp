import React, { useState } from 'react'
import TickButton from '../Button/TickButton'
import styles from './InputElement.module.css'

type InputProps = {
    name: string
    label: string
    onEnter: (value: string) => void,
    includesButton: boolean
}

export default function InputElement({
    name,
    label,
    onEnter,
    includesButton
}: InputProps) {
    const [val, setVal] = useState<string>()
    
    const handleChange = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === 'Enter') {
            (evt.target as HTMLInputElement).value = ""             // refresh input field
            if (onEnter !== undefined) {
                console.log((evt.target as HTMLInputElement).value)
                onEnter((evt.target as HTMLInputElement).value)
            }
        }
        setVal((evt.target as HTMLInputElement).value)
    }

    const onClick = () => {
        if (val !== undefined && val !== '') {
            onEnter(val)
        }
    }

    return (
        <div className={styles.inputElement}>
            <label>{label}</label>
            <div>
                <input
                    name={name}
                    id={name}
                    className={styles.textarea}
                    onKeyUp={(e) => handleChange(e)}
                />
                {includesButton && (
                    <TickButton onClick={(e) => onClick()} />
                )}
            </div>
        </div>
    )
}