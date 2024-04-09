import React from 'react'

import styles from './Custom.module.css'

const CustomRight = () => {
    return (
        <section className={styles.Custom}>
            <div className={styles.CustomContent}>
                <h6>Enjoy on your TV</h6>
                <p>
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>

            <div>
                <video autoPlay muted loop>
                    <source src='/assets/1.mp4' />
                </video>
            </div>

        </section>
    )
}

export default CustomRight