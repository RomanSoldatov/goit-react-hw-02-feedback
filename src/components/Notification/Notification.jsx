import React from 'react';
import { Msg } from './Notification.styled';

export const Notification = ({ msg }) => {
  return <Msg Msg>{msg}</Msg>;
};
