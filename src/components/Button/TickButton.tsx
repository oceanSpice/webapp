import { FormEvent, ReactElement } from 'react'
import classNames from 'classnames/bind'
import styles from './TickButton.module.css'

const cx = classNames.bind(styles)

interface ButtonProps {
  onClick?: (e: FormEvent) => void
  size?: 'small'
  style?: 'primary' | 'ghost' | 'text'
}

export default function TickButton({
  size,
  style,
  onClick,
}: ButtonProps): ReactElement {
  const styleClasses = cx({
    button: true,
    primary: style === 'primary',
    ghost: style === 'ghost',
    text: style === 'text',
    small: size === 'small',
  })

  return (
    <button onClick={onClick} className={styleClasses}>
      ✓
    </button>
  )
}
