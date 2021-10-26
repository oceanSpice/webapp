import React, { useState } from 'react'
import TickButton from '../Button/TickButton'
import styles from './InputElement.module.css'

type InputProps = {
    name: string
    label: string
    onEnter: (value: any) => void,
    includesButton: boolean
    placeholder?: string
}

export default function InputElement({
    name,
    label,
    onEnter,
    includesButton,
    placeholder
}: InputProps) {
    
    const handleChange = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(`handling change...`)
        console.log((evt.target as HTMLInputElement).value)
        var value = (evt.target as HTMLInputElement).value
        if (evt.key === 'Enter') {
            (evt.target as HTMLInputElement).value = ""
            console.log(`enter pressed!`)
            console.log((evt.target as HTMLInputElement).value)
            console.log(value)
            if (onEnter !== undefined) {
                console.log((evt.target as HTMLInputElement).value)
                onEnter(value)
            }
        }
    }

    // const onClick = () => {
    //     if (val !== undefined && val !== '') {
    //         onEnter(val)
    //     }
    // }

    return (
        <div className={styles.inputElement}>
            <label>{label}</label>
            <div>
                <input
                    name={name}
                    id={name}
                    className={styles.textarea}
                    onKeyUp={(e) => handleChange(e)}
                    placeholder={placeholder}
                />
                {/** TODO: Make this work thru references **/}
                {/* {includesButton && (
                    <TickButton onClick={(e) => onClick()} />
                )} */}
            </div>
        </div>
    )
}