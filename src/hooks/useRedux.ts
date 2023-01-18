import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux/es/types';
import type { RootState, AppDispatch } from 'store';

export const useReduxDispatch: () => AppDispatch = useDispatch;
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
