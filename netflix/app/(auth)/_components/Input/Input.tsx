import React from 'react'

import styles from './Input.module.css'

interface InputProps {
    id: string,
    type?: string,
    value: string,
    label: string,
    onChange?: any
}


const Input = ({ id, type, value, label, onChange }: InputProps) => {
    return (
        <>
            <div className={styles.InputGroup}>
                <input type={type} id={id} className={styles.Input} placeholder=' ' value={value} onChange={onChange} />
                <label htmlFor={id} className={styles.Input_Label}>{label}</label>
            </div>
        </>
    )
}

export default Input