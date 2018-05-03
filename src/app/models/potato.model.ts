export interface Potato {
  title: string;
  link: string;
  media: {m: string};
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export const defaultPotato: Potato = {
  title: 'Hi am potato',
  link: 'http://example.com',
  media: {m: 'http://example.com'},
  date_taken: '2018-04-28T12:34:22-08:00',
  description: 'test description',
  published: '2018-04-30T14:18:28Z',
  author: 'steve',
  author_id: '1234',
  tags: 'test tags'
};
