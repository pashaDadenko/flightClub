export type TypeAllData = {
    InfoProduct: string;
    article: string;
    brand: string;
    color: string;
    id: number;
    images: string[];
    model: string;
    price: number;
    rating: number;
    title: string;
    sizes: number[];
};

export type HomeSliceState = {
    sneakersData: TypeAllData[];
    topSellersData: TypeAllData[];
    offWhiteData: TypeAllData[];
    airJordanData: TypeAllData[];
};
