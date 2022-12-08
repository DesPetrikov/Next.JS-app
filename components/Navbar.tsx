import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>MyApp</div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={`${styles.link} ${
              pathname === path ? styles.active : ''
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
