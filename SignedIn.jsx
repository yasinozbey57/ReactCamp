import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced = "rigth" src = "https://s.gravatar.com/avatar/279092b4bafc27d7958a22e29f39ed3f?d=mm"/>
                <Dropdown pointing ="top left" text="Yasin">
                <Dropdown.Menu>
                    <Dropdown.Item text = "Bilgilerim" icon = "info"/>
                    <Dropdown.Item onClick={signOut} text = "Çıkış Yap" icon = "sign-out"/>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
