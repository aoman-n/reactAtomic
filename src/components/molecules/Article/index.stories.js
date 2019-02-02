import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { blogData } from 'constants';
import Article from '.';

console.dir(blogData[0]);

storiesOf('Article', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/', 'blog']}>{story()}</MemoryRouter>
  ))
  .add('default', () => <Article {...blogData[0]} />);
