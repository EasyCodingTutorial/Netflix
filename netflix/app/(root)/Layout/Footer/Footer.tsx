import React from 'react'

import styles from './Footer.module.css'
import Link from 'next/link';

// For React Icons
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";



const NetflixFooterLinks_one = [
    {
        LinkText: "Faq",
        LinkTo: "/",
    },
    {
        LinkText: "Investor Relations",
        LinkTo: "/",
    }, {
        LinkText: "Privacy",
        LinkTo: "/",
    }, {
        LinkText: "Speed Test",
        LinkTo: "/",
    }
];

const NetflixFooterLinks_Two = [
    {
        LinkText: "Help Center",
        LinkTo: "/",
    },
    {
        LinkText: "Jobs",
        LinkTo: "/",
    }, {
        LinkText: "Cookie Preferences",
        LinkTo: "/",
    }, {
        LinkText: "Legal Notice",
        LinkTo: "/",
    }
];


const NetflixFooterLinks_Three = [
    {
        LinkText: "Account",
        LinkTo: "/",
    },
    {
        LinkText: "Ways To Watch",
        LinkTo: "/",
    }, {
        LinkText: "Corporate Information",
        LinkTo: "/",
    }, {
        LinkText: "Only on Netflix",
        LinkTo: "/",
    }
];


const NetflixFooterLinks_Four = [
    {
        LinkText: "Media Centre",
        LinkTo: "/",
    },
    {
        LinkText: "Terms of Use",
        LinkTo: "/",
    }, {
        LinkText: "Contact Us",
        LinkTo: "/",
    },
];





const Footer = () => {
    return (

        <footer className={styles.Footer}>

            <h6>Questions ? Call <span>+91 9876543210</span></h6>

            <div className={styles.FooterRow}>

                <div className={styles.FooterBox}>
                    {
                        NetflixFooterLinks_one.map(({ LinkText, LinkTo }) => (
                            <Link href={LinkTo} key={LinkText}>{LinkText}</Link>
                        ))
                    }
                </div>

                <div className={styles.FooterBox}>
                    {
                        NetflixFooterLinks_Two.map(({ LinkText, LinkTo }) => (
                            <Link href={LinkTo} key={LinkText}>{LinkText}</Link>
                        ))
                    }
                </div>


                <div className={styles.FooterBox}>
                    {
                        NetflixFooterLinks_Three.map(({ LinkText, LinkTo }) => (
                            <Link href={LinkTo} key={LinkText}>{LinkText}</Link>
                        ))
                    }
                </div>


                <div className={styles.FooterBox}>
                    {
                        NetflixFooterLinks_Four.map(({ LinkText, LinkTo }) => (
                            <Link href={LinkTo} key={LinkText}>{LinkText}</Link>
                        ))
                    }
                </div>

            </div>


            <h6>@2024 <span>Netflix India</span></h6>

            {/* Custom */}
            <div className={styles.FooterRow_Two}>
                <h5>Easy Coding Tutorial</h5>

                <div>


                    <Link href={"https://www.linkedin.com/in/amanyadaveasycodingtutorial/"} target='_blank'>
                        <FaLinkedin />
                    </Link>

                    <Link href={"https://www.instagram.com/easycodingtutorial/"} target='_blank'>
                        <FaInstagram />
                    </Link>

                    <Link href={"https://github.com/EasyCodingTutorial"} target='_blank'>
                        <FaGithub />
                    </Link>



                </div>

            </div>


        </footer>

    )
}

export default Footer