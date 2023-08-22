import { TypeApi } from '../../api/TypeApi';

export type TypeAccordionStyle = {
	boxShadow: string;
	transition: string;
};

export type FilterBarProps = {
	updateSneakers: TypeApi[];
	activeBrand: { [key: string]: boolean };
	activeModel: { [key: string]: boolean };
	activeColors: { [key: string]: boolean };
	setActiveBrand: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
	setActiveModel: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
	setActiveColors: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
};
