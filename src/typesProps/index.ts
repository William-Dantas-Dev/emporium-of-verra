import { ReactNode } from 'react';

export interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export interface CustomButtonProps {
  title: String;
  onClick: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface NavLinkProps {
  title: String;
  active: boolean;
  src: string;
  mobile: boolean;
}

export interface UnderConstructionProps {
  page: String;
}

export interface CreateUserProps {
  name: string;
  nick: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthUserProps {
  email: string;
  password: string;
}