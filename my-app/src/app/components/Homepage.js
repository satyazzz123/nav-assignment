import React from 'react';
import styles from '@/app/styles/homepage.module.css';
import Link from 'next/link';

const Homepage = () => {
    return (
        <div className={styles.homepage}>
        <h1>Hello, Welcome This is the Homepage</h1>
        <h3 className={styles.describe}>I am Jignyasa, I am proficient in MERN stack, Next.js and Typescript. I have developed several projects using the above stack. I have also developed projects using Redis ,Firebase and Prisma. I have worked as freelancer as well and developed websites for Clients. I have actively make projects and love to contribute. <Link href="https://github.com/jignyasamishra">Here's my Github </Link></h3>

        </div>
    );
};

export default Homepage;