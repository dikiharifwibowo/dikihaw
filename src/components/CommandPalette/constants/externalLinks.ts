/**
 * We store all external links we want to be available in the Command Palette here.
 */

import { PageData } from '../../../../types/types';

export const EXTERNAL_LINKS: readonly PageData[] = [
  {
    title: 'GitHub',
    description: 'Check out my GitHub profile 🐙🐱',
    link: 'https://github.com/dikiharifwibowo',
    hiddenSearchTerm: 'social gh',
  },
  {
    title: 'Twitter',
    description: 'Follow me on Twitter!🙂',
    link: 'https://twitter.com/dikiharifwibowo',
    hiddenSearchTerm: 'social',
  },
];

export const filterExternalLinks = (query: string): PageData[] => {
  const words = query.split(' ').map((word) => word.toLowerCase());

  return EXTERNAL_LINKS.filter((page) =>
    words.every(
      (word) =>
        page.title.toLowerCase().includes(word) ||
        page.description.toLowerCase().includes(word) ||
        page.hiddenSearchTerm?.toLowerCase().includes(word),
    ),
  );
};
