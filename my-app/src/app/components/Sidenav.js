import React from 'react';
import Link from 'next/link';
import styles from "@/app/styles/sidenav.module.css"
const Sidenav = () => {
    return (
        // Create an HTML page on which the left side should be home, contact, information, and guide.
        <div className={styles.sidenav}>
            <ul>
                <li> <Link href="/">Home</Link>  </li>
                <li> <Link href="/contact">Contacts</Link></li>
                <li><Link href="/info">Information</Link></li>
                <li><Link href="/guide">Guide</Link></li>
            </ul>
        </div>
    );
};

export default Sidenav;