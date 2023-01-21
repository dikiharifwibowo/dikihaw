import clsx from 'clsx';
import { css } from 'goober';

import { getHslaColor } from '@/lib/styles/colors';
import { ExternalLink } from '@/components/Typography/ExternalLink';
import { InternalLink } from '@/components/Typography/InternalLink';

import { sendEventTracker } from '@/utils/analytics/tracker';

interface Props {
  isExternalSource: false | true;
  link: string;
  title?: any;
  pathname?: any;
  source?: any;
}

export const LinkBlog: React.FC<Props> = ({
  isExternalSource,
  link,
  title,
  pathname,
}) => {
  if (isExternalSource) {
    return <ExternalLink href={link}>{title}</ExternalLink>;
  } else {
    return (
      <InternalLink
        href={link}
        className={clsx(
          'font-bold',
          css`
            & {
              color: ${getHslaColor('heading')} !important;
            }
          `,
        )}
        onClick={() => {
          sendEventTracker({
            name: 'click',
            category: `${pathname} - post preview title`,
            label: title,
          });
        }}
      >
        {title}
      </InternalLink>
    );
  }
};
