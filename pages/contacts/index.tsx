import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Heading } from '../../components/Heading';
import { contactType } from '../../types';
import React from 'react';

type ContactsType = {
  contacts: contactType[]
}

const Contacts: React.FC<ContactsType> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                {name} ({email})
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

export default Contacts;
