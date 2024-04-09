import React from 'react'

import styles from './Navbar.module.css'

import Link from 'next/link'

// For Components
import Button from '@/app/(root)/_components/Button/Button'

const Navbar = () => {
    return (
        <nav className={styles.NavbarMain}>
            <Link href={"/"}>
                <img src="/assets/logo.png" alt="Logo" />
            </Link>

            <div className={styles.BtnBox}>
                <Button LinkText='Sign In' LinkTo='/Login' />
            </div>

        </nav>
    )
}

export default Navbar