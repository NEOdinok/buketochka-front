import React from "react";
import { ContactCard } from "./ContactCard/ContactCard";
import styles from "./styles.module.scss";
import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types"; 

interface contact {
  link: string,
  icon: IconDefinition,
  id: string,
  type: string,
}

type Props = {
  contacts: contact[] | undefined;
};

export const ContactsList:React.FC<Props> = ({contacts}) => {
  const renderContacts = () => (
    contacts?.map((item: contact): ReactNode => {
      return <ContactCard id={ item.id } link={ item.link } type={ item.type} />;
    }) 
  )

  return (
    <div className={ styles.contactsWrapper }>
      <div className={ styles.heading }> Свяжитесь с нами</div>
      <div className={styles.listWrapper}>
      {contacts && renderContacts()}
      </div>
    </div>

  );
};
