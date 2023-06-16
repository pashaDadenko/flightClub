import { TypeApi } from '../../api/TypeApi';

export type allSneakersSliceState = {
    AllSneakers: TypeApi[];
    CurrentSort: string;
};
