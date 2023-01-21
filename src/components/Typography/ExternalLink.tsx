import * as Tooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';

import { useAnchorClassName } from './hooks/useAnchorClassName';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children?: React.ReactNode;
  isNotFancy?: boolean; // Disables the box-shadow highlight effect on hover/focus
}

export const ExternalLink: React.FC<Props> = ({
  href,
  className,
  onClick,
  children,
  isNotFancy = false,
}) => {
  const baseClass = useAnchorClassName();

  return (
    <Tooltip.Provider delayDuration={300} skipDelayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a
            className={clsx({ [baseClass]: !isNotFancy }, className)}
            href={href}
            onClick={onClick}
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>
        </Tooltip.Trigger>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
