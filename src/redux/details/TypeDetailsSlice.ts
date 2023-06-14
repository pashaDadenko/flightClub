import { TypeApi } from '../../api/TypeApi';

export type detailsSliceState = {
    DetailsSneakers: TypeApi[];
    RecommendedSneakers: TypeApi[];
    Brand: string;
};
