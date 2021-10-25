import React, { ReactNode, FormEvent, ReactElement } from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.css'

const cx = classNames.bind(styles)

interface ButtonProps {
  onClick?: (e: FormEvent) => void
  active?: boolean
  size?: 'small'
  style?: 'primary' | 'ghost' | 'text'
  title: string
}

export default function Button({
  size,
  style,
  title,
  active=true,
  ...props
}: ButtonProps): ReactElement {
  const styleClasses = cx({
    button: true,
    primary: style === 'primary',
    ghost: style === 'ghost',
    text: style === 'text',
    small: size === 'small',
  })

  return (
    <button className={styleClasses} disabled={!active} {...props}>
      {title}
    </button>
  )
}
