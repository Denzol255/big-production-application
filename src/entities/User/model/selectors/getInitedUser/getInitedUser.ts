import { StateSchema } from 'app/providers/StoreProvider';

export const getInitedUser = (state: StateSchema) => state.user._inited;
