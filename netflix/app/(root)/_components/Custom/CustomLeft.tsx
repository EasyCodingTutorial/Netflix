import React from 'react'

import styles from './Custom.module.css'

const CustomLeft = () => {
    return (
        <section className={styles.Custom}>


            <div >
                <video autoPlay muted loop>
                    <source src='/assets/2.mp4' />
                </video>
            </div>


            <div className={styles.CustomContent}>
                <h6>Watch everywhere</h6>
                <p>
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>
            </div>

        </section>
    )
}

export default CustomLeft