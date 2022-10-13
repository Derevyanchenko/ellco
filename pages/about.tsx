import Head from "next/head";
import { FC } from "react";
import { ContactType } from "../types/types";

type ContactInfoProps = {
    user: ContactType,
}

const ContactInfo: FC<ContactInfoProps> = ({user}) => {
    const {id, name, email, address} = user || {};

    return (
        <li key={id}>{id} - {name} - { email } - { address.city }</li>
    )
}

const About = ({ users }) => {
    return (
        <>
            <Head>
                <title>Ellco | About</title>
            </Head>

            <h1>About Page</h1>

            {users &&        
                <ul>
                    { users.map((user) => (
                        <ContactInfo user={user} key={user.id} />
                    )) }
                </ul>
            }
        </>
    );
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if ( ! data ) {
        return {
            notFound: true,
        }
    }

    return {
        props: { users: data },
    }
};

export default About;