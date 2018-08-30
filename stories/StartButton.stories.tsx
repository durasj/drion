import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { StartButton } from '../src/StartButton';

const stories = storiesOf('StartButton', module);

stories.add('Basic', () => <StartButton />);
