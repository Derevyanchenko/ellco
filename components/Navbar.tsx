import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';
import vercelImg from '../public/vercel.svg';

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'About', path: '/about' },
];

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <>
            <div className="logo">
                <Image 
                    src={vercelImg}  
                    width={60} 
                    height={60} 
                    alt="vercel"
                />
            </div>
            <nav className={styles.navbar}>
                <ul>
                    { navigation.map(({ id, title, path }) => (
                        <li 
                            key={id} 
                            className={pathname == path ? styles.active : null}
                        >
                            <Link href={path}>{title}</Link>
                        </li>
                    )) }
                </ul>
            </nav>
        </>
    );
}

export default Navbar;