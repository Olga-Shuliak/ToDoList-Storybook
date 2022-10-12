import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import {Task} from '../Task';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLISTS/Task',
  component: Task,
  //чтобы не было повторения в TaskIsDone и TaskIsNotDone
  args: {
    changeTaskStatus: action('changeTaskStatus'),
    changeTaskTitle: action('changeTaskTitle'),
    removeTask: action('removeTask'),
    todolistId: 'TODOLIST1'
  }
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;


export const TaskIsDone = Template.bind({});
TaskIsDone.args = {
  task: {id: '1', title: 'JS', isDone: true},
};


export const TaskIsNotDone = Template.bind({});
TaskIsNotDone.args = {
  task: {id: '2', title: 'HTML', isDone: false}
};
