import { TypeApi } from '../../api/TypeApi';

export type TypeSneakersDataSlice = {
    sneakersData: TypeApi[];
    topSellersData: TypeApi[];
    offWhiteData: TypeApi[];
    airJordanData: TypeApi[];
    randomSneakers: TypeApi[];
    recommendedSneakers: TypeApi[];
    ImageCarousel: string[];
    brand: string;
};
