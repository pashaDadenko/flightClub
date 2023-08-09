import { FC, useState } from 'react';
import { FilterBarProps, TypeAccordionStyle } from './TypeFilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { setValueBrand, setValueModel, setValueColor } from '../../redux/filterSlice/filterSlice';
import { RootState } from '../../redux/store';
import { useLocation } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './FilterBar.module.scss';

export const FilterBar: FC<FilterBarProps> = (props) => {
	const { updateSneakers, activeBrand, activeModel, activeColors, setActiveBrand, setActiveModel, setActiveColors } = props;

	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const allSneakers = useSelector((state: RootState) => state.sneakersDataSlice.allSneakers);
	const brands = [...new Set(allSneakers.map((sneakers) => sneakers.brand))].sort();
	const models = [...new Set(updateSneakers.map((sneakers) => sneakers.model))].sort();
	const colors = [...new Set(updateSneakers.map((sneakers) => sneakers.color))].sort();

	const [expanded, setExpanded] = useState<string | false>('panel1');
	const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

	const accordionStyle: TypeAccordionStyle = { boxShadow: 'none', transition: 'none' };
	const multiColor = { backgroundImage: `linear-gradient(to left, rgb(255, 244, 12), rgb(74, 138, 0) 31%, rgb(0, 72, 156) 63%, rgb(213, 55, 54))` };

	const renderBrand = pathname === '/sneakers' || pathname === '/top-sellers' || pathname === '/lowest-price' || pathname === '/search-result';

	return (
		<div className={styles.wrapper}>
			{renderBrand && (
				<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={accordionStyle} disableGutters>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
						style={{ border: '1px solid #81818131' }}>
						<Typography sx={{}}>BRAND</Typography>
					</AccordionSummary>
					<AccordionDetails style={{ borderTop: 'none', padding: '20px 20px 0 20px', backgroundColor: '#f9f9f9' }}>
						<Typography sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginLeft: '10px' }}>
							{brands &&
								brands.map((brand, index) => (
									<button
										onClick={() => {
											dispatch(setValueBrand(brand));
											setActiveBrand((prevActiveColors) => ({
												...prevActiveColors,
												[index]: !prevActiveColors[index],
											}));
										}}
										style={activeBrand[index] ? { border: '1px solid #000' } : {}}
										className={styles.button}
										name={brand}
										id={brand}
										key={index}>
										{brand}
									</button>
								))}
						</Typography>
					</AccordionDetails>
				</Accordion>
			)}

			<Accordion style={accordionStyle} disableGutters>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1bh-content'
					id='panel1bh-header'
					style={{ border: '1px solid #81818131' }}>
					<Typography sx={{}}>MODEL</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ borderTop: 'none', padding: '20px 20px 0 20px', backgroundColor: '#f9f9f9' }}>
					<Typography sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginLeft: '10px' }}>
						{models &&
							models.map((model, index) => (
								<button
									onClick={() => {
										dispatch(setValueModel(model));
										setActiveModel((prevActiveColors) => ({
											...prevActiveColors,
											[index]: !prevActiveColors[index],
										}));
									}}
									style={activeModel[index] ? { border: '1px solid #000' } : {}}
									className={styles.button}
									name={model}
									id={model}
									key={index}>
									{model}
								</button>
							))}
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion style={accordionStyle} disableGutters>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1bh-content'
					id='panel1bh-header'
					style={{ border: '1px solid #81818131' }}>
					<Typography sx={{}}>COLOR</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ borderTop: 'none', padding: '20px 20px 0 20px', backgroundColor: '#f9f9f9' }}>
					<Typography sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginLeft: '10px' }}>
						{colors &&
							colors.map((color, index) => (
								<button
									onClick={() => {
										dispatch(setValueColor(color));
										setActiveColors((prevActiveColors) => ({
											...prevActiveColors,
											[index]: !prevActiveColors[index],
										}));
									}}
									style={activeColors[index] ? { border: '1px solid #000' } : {}}
									className={styles.button}
									name={color}
									id={color}
									key={index}>
									<span style={color === 'multi' ? multiColor : { backgroundColor: `${color}` }} className={styles.circle}></span>

									{color}
								</button>
							))}
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
