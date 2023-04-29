import { FC, ReactNode, useState } from 'react';

interface LinkProps {
  page: string;
  children: ReactNode;
}

const Status = {
  hovered: 'hover',
  normal: 'normal',
};

// functional component type
const Link: FC<LinkProps> = ({ page, children }) => {
  const [status, setStatus] = useState<string>(Status.normal);

  // enter mouse event handler
  const onMouseEnter = () => {
    setStatus(Status.hovered);
  };
  // leave mouse event handler
  const onMouseLeave = () => {
    setStatus(Status.normal);
  };

  return (
    <a
      href={page || '#'}
      className={status}
      onMouseEnter={() => onMouseEnter}
      onMouseLeave={() => onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
