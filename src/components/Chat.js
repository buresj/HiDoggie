import React from 'react';
import ChatBot from 'react-simple-chatbot';
import img from '../5554.jpg';
import avatar from '../bruno_avatar.png'
import logo from '../logo.png'
import Review from './Preview'

const Chat = props => {

    return (
        <ChatBot
            headerTitle={'Hi Doggie 🐶 App'}
            placeholder={'Napiš zprávu...'}
            botAvatar={avatar}
            botDelay={1000}
            steps={[
                {
                    id: '1',
                    message: `Haf! Jmenuji se Bruno! 🐾 a zrovna teď bydlím v útulku Handipet Rescue kousek od Mělníka`,
                    trigger: '2',
                },
                {
                    id: '2',
                    message: 'Jak se jmenuješ?',
                    trigger: '3',
                },
                {
                    id: '3',
                    user: true,
                    trigger: '4',
                },
                {
                    id: '4',
                    message: 'Pac {previousValue}!',
                    trigger: '5',
                },
                {
                    id: '5',
                    message: 'Na co se chceš zeptat?',
                    trigger: '6',
                },
                {
                    id: '6',
                    options: [
                        { value: 1, label: 'Jaký je tvůj příběh?', trigger: '10' },
                        { value: 2, label: 'Jak můžu pomoci?', trigger: '8' },
                    ]
                },
                {
                    id: '10',
                    message: 'Počkej, někde mám odkaz na článek, který o mě napsali. ⭐⭐⭐',
                    trigger: '7',
                },
                {
                    id: '7',
                    component: (
                        <a href="https://www.handipet.org/2019/08/14/bruno-2/">
                            <h2>BRUNO – DOBROTIVÝ OBR S NEMOCNÝM SRDCEM</h2>
                            <img src={logo} width="200" /></a>
                    ),
                    'trigger': '11',
                },
                {
                    id: '8',
                    message: 'Pošli nám hromadu piškotů!',
                    trigger: '9',
                },
                {
                    id: '9',
                    component: (
                        <img src={img} height="200" width="200" />
                    ),
                    trigger: '11',
                },
                {
                    id: '11',
                    message: 'Děkujeme za zájem, můžu se Tě zeptat na kontakt, abychom ti mohli poslat novinky?',
                    trigger: '12',
                },
                {
                    id: '12',
                    options: [
                        { value: 1, label: 'Určitě!', trigger: '13' },
                        { value: 2, label: 'Ne díky 😊', end: true },
                    ]
                }, {
                    id: '13',
                    message: 'Jak se jmenuješ?',
                    trigger: 'name',
                },
                {
                    id: 'name',
                    user: true,
                    trigger: '14',
                },
                {
                    id: '14',
                    message: 'Kam ti můžeme napsat?',
                    trigger: 'email',
                },
                {
                    id: 'email',
                    user: true,
                    trigger: '15',
                },
                {
                    id: '15',
                    message: 'Bezva - tady je shrnutí:',
                    trigger: 'review',
                },
                {
                    id: 'review',
                    component: <Review />,
                    asMessage: true,
                    trigger: 'update',
                },
                {
                    id: 'update',
                    message: 'Chceš změnit některé z údajů?',
                    trigger: 'update-question',
                },
                {
                    id: 'update-question',
                    options: [
                        { value: 'yes', label: 'Ano', trigger: 'update-yes' },
                        { value: 'no', label: 'Ne', trigger: 'end-message' },
                    ],
                },
                {
                    id: 'update-yes',
                    message: 'Co si přeješ změnit?',
                    trigger: 'update-fields',
                },
                {
                    id: 'update-fields',
                    options: [
                        { value: 'name', label: 'Jméno', trigger: 'update-name' },
                        { value: 'email', label: 'Email', trigger: 'update-email' },
                    ],
                },
                {
                    id: 'update-name',
                    update: 'name',
                    trigger: '15',
                },
                {
                    id: 'update-email',
                    update: 'email',
                    trigger: '15',
                },
                {
                    id: 'end-message',
                    message: 'Díky! Vše je uloženo a brzy Ti napíšeme!',
                    end: true,
                },
            ]}

        />
    )
}

export default Chat;
