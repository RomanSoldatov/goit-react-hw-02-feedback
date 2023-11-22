import React from 'react';
import { StyledButton } from './BtnFeedback.styled';

export const BtnFeedback = ({
  icon: Icon = null,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {Icon && <Icon size="14" />}
      {children}
    </StyledButton>
  );
};
