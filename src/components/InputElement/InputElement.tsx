import React from 'react'
import TickButton from '../Button/TickButton'
import styles from './InputElement.module.css'

type InputProps = {
    name: string
    label: string
    onEnter: any,
    includesButton: boolean
}

export default function InputElement({
    name,
    label,
    onEnter,
    includesButton
}: InputProps) {
    const handleChange = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === 'Enter') {
            (evt.target as HTMLInputElement).value = ""         // refresh input field
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
                    onKeyUp={handleChange}
                />
                {includesButton && (
                    <TickButton onClick={onEnter} />
                )}
            </div>
        </div>
    )
}