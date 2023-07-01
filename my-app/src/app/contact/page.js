import React from 'react';
import styles from "@/app/styles/contact.module.css";
import { BsLinkedin } from 'react-icons/bs';
import {BsTwitter} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import Link from 'next/link';
const page = () => {
    return (
        <div className={styles.contact}>
             <h1>Contact me by</h1>
                <ul className={styles.contactDetails}>
                    <li><Link href="https://www.linkedin.com/in/jignyasa-mishra-356520179/"><BsLinkedin/></Link></li>
                    <li><Link href="https://twitter.com/JignyasaMishra"><BsTwitter/></Link></li>
                    <li><Link href="https://github.com/jignyasamishra"><BsGithub/></Link></li>
                </ul>


        </div>
    );
};

export default page;