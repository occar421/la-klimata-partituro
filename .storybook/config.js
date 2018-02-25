import {configure} from '@storybook/react';

function loadStories() {
    require('../src/components/stories/button-story');
    // You can require as many stories as you need.
}

configure(loadStories, module);