import * as React from 'react';
import './Button.css';

import ArrowRightIcon from '../icons/ArrowRight.tsx';
import CheckIcon from '../icons/Check.tsx';
import RefreshIcon from '../icons/Refresh.tsx';
import LoadingIcon from '../icons/Loading.tsx';

const Icons = {
  'arrow-right': ArrowRightIcon,
  check: CheckIcon,
  refresh: RefreshIcon,
};

type IconProps = {
  icon: keyof typeof Icons;
};

const Icon = ({ icon }: IconProps) => {
  const Icon = Icons[icon];
  return <Icon className='icon' />;
};

const LoadingAnimation = () => <LoadingIcon className='loading' style={
  {
    width: '2.063rem',
    height: '0.375rem'
  }
} />;

type Props = {
  color?: 'primary' | 'secondary';
  icon?: keyof typeof Icons;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
};

const Button = ({ color = 'primary', icon, onClick, disabled = false, children, loading = false }: Props) => {
  const isDisabled = loading || disabled;

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`button ${color} ${loading ? 'loading' : ''}`.trim()}
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          {children}
          {icon && !!children ? <Icon icon={icon} /> : null}
        </>
      )}
    </button>
  );
};

export default Button;
