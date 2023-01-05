import { createReduxStore } from './utils';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
