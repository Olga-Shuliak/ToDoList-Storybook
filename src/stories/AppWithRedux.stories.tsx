import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Task} from '../Task';
import AppWithRedux from '../AppWithRedux';
import {Provider} from 'react-redux';
import {store} from '../state/store';
import {ReduxStoreProviderDecorator} from '../state/ReduxStoreProviderDecorator';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default

{
  title: 'TODOLISTS/AppWithRedux',
  component: Task,
  decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;



const Template: ComponentStory<typeof AppWithRedux> = (args) =>
    <AppWithRedux/>;


export const AppWithReduxStory = Template.bind({});




