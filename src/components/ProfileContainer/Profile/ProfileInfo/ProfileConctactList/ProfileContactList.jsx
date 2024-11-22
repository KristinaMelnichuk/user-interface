import React from 'react';

const ProfileContactList = ({ contacts }) => {
    const contactList = [
        { name: 'Facebook', url: contacts.facebook },
        { name: 'Vk', url: contacts.vk },
        { name: 'Twitter', url: contacts.twitter },
        { name: 'GitHub', url: contacts.github },
        { name: 'Instagram', url: contacts.instagram },
    ];

    return (
        <ul>
            {contactList.map(
                (contact) =>
                    contact.url && (
                        <li key={contact.name}>
                            {contact.name}:
                            <a
                                href={`https://${contact.url}`}
                                target="_blank"
                            >
                                {contact.url}
                            </a>
                        </li>
                    )
            )}
        </ul>
    );
}

export default ProfileContactList;