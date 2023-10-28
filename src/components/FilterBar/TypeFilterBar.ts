import { TypeApi } from "../../redux/api/TypeApi";

export type TypeAccordionStyle = {
	boxShadow: string;
	transition: string;
};

export type FilterBarProps = {
	updateSneakers: TypeApi[];
	activeBrand: { [key: string]: boolean };
	activeModel: { [key: string]: boolean };
	activeSizes: { [key: number]: boolean };
	activeColors: { [key: string]: boolean };
	setActiveBrand: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
	setActiveModel: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
	setActiveSizes: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
	setActiveColors: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
	setAddFilters: (arg: boolean) => void;
	renderClearFiltersBtn: boolean;
	clearFilters: () => void;
	windowWidth: number;
};
