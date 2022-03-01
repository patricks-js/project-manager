import React from 'react';
import { ButtonStyle } from './styles'

export const Button = ({children, event, animate}) => <ButtonStyle animate={animate} onClick={event}>{children}</ButtonStyle>