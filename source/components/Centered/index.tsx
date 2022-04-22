import { FC, ReactNode } from 'react';

interface CenteredProps {
  children: ReactNode;
}

const Centered: FC<CenteredProps> = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>
);

export default Centered;
