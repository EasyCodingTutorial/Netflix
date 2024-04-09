import React from 'react'

import styles from './Custom.module.css'

const ImageCustom = () => {
    return (
        <>
            <section className={styles.CustomImage}>


                <div>
                    <img src="/assets/4.png" alt="" />
                </div>

                <div className={styles.CustomContentImage}>

                    <h6>Create profiles for kids</h6>
                    <p>
                        Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                    </p>
                </div>



            </section>
        </>
    )
}

export default ImageCustom