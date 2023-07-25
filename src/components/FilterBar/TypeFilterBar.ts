import { TypeApi } from '../../api/TypeApi';

export type TypeAccordionStyle = {
	boxShadow: string;
	transition: string;
};

export type FilterBarProps = {
	updateSneakers: TypeApi[];
	activeBrand: { [key: number]: boolean };
	activeModel: { [key: number]: boolean };
	activeColors: { [key: number]: boolean };
	setActiveBrand: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
	setActiveModel: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
	setActiveColors: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
};
