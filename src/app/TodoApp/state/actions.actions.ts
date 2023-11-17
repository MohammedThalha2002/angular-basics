import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../types/todo';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    Clicked: emptyProps(),
    'Add Todo': props<{ todo: Todo }>,
  },
});
