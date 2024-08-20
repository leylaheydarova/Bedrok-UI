import Logo from "@/components/shared/Logo";
import styles from "./Navbar.module.css";
import Link from "next/link";
const NAV_LINKS = [
    {
        id: 1,
        title: "Home",
        href: "/",
        isButton : false
    },
    {
        id: 2,
        title: "About",
        href: "/about",
        isButton : false
    },
    {
        id: 3,
        title: "Contact",
        href: "/contact",
        isButton : false
    },
    {
        id: 4,
        title: "Subscribe",
        href: "/",
        isButton : true
    }
]
export default function Navbar(){
    return <header className={styles.header}>
        <div className="container">
            <nav className={styles.headerNav}>
                <Logo />
                <ul className={styles.headerLinks}>
                    {NAV_LINKS.map((link)=>
                    <li className={`${link.isButton ? styles.headerLinkButton : ""}`} key={link.id}>
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                    )}
                </ul>
            </nav>
        </div>
    </header>
}