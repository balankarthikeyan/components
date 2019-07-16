import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Button } from '../../src/components/Button'


const ButtonBoom = styled(Button)`
    background: tomato;
    border-radius: 10px;
`

const customIcon = () => {
    return <span>{'👀'}</span>
}

storiesOf('Components/Buttons', module)
.add('default', () => <Button />)
.add('icon', () => <Button type="icon" text="Jarvis" />)
.add('icon text', () => <Button type="icontext" text="Jarvis" />)
.add('custom text', () => <ButtonBoom text="Jarvis" />)
.add('custom icon', () => <ButtonBoom renderIcon = {customIcon} type="icon" />)
.add('custom icon text', () => <ButtonBoom renderIcon = {customIcon} type="icontext" text="Jarvis" />)
