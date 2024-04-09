import styles from './Navbar.module.css'

import Link from 'next/link'

export const Navbar = () => {
    return (
        <>
            <nav className={styles.Navbar}>
                <Link href={"/"}>
                    <img src="/assets/logo.png" alt="Logo" />
                </Link>
            </nav>
        </>
    )
}