import { FC, useState } from 'react';
import { FilterBarProps, TypeAccordionStyle } from './TypeFilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setValueBrand, setValueModel, setValueColor } from '../../redux/sneakersData/sneakersDataSlice';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './FilterBar.module.scss';

export const FilterBar: FC<FilterBarProps> = ({ updateSneakers }) => {
	const dispatch = useDispatch();

	const allSneakers = useSelector((state: RootState) => state.sneakersDataSlice.sneakersData);

	const brands = [...new Set(allSneakers.map((sneakers) => sneakers.brand))].sort();
	const models = [...new Set(updateSneakers.map((sneakers) => sneakers.model))].sort();
	const colors = [...new Set(allSneakers.map((sneakers) => sneakers.color))].sort();

	const [expanded, setExpanded] = useState<string | false>('panel1');
	const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

	const accordionStyle: TypeAccordionStyle = { boxShadow: 'none', transition: 'none' };
	const multiColor = { backgroundImage: `linear-gradient(to left, rgb(255, 244, 12), rgb(74, 138, 0) 31%, rgb(0, 72, 156) 63%, rgb(213, 55, 54))` };

	const [activeColors, setActiveColors] = useState<{ [key: number]: boolean }>({});

	return (
		<div className={styles.wrapper}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={accordionStyle} disableGutters>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1bh-content'
					id='panel1bh-header'
					style={{ border: '1px solid #81818131' }}>
					<Typography sx={{}}>BRAND</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ border: '1px solid #81818131', borderTop: 'none', padding: '10px 20px 0 20px' }}>
					<Typography sx={{ display: 'flex', flexDirection: 'column' }}>
						{brands &&
							brands.map((brand, index) => (
								<span key={index} className={styles.wrapBrand}>
									<input
										onClick={() => {
											dispatch(setValueBrand(brand));
										}}
										className={styles.checkbox}
										type='checkbox'
										name={brand}
										id={brand}
									/>
									<label className={styles.label} htmlFor={brand}>
										{brand}
									</label>
								</span>
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
					<Typography sx={{}}>MODEL</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ border: '1px solid #81818131', borderTop: 'none', padding: '10px 20px 0 20px' }}>
					<Typography sx={{}}>
						{models &&
							models.map((model, index) => (
								<span key={index} className={styles.wrapBrand}>
									<input
										onClick={() => {
											dispatch(setValueModel(model));
										}}
										className={styles.checkbox}
										type='checkbox'
										name={model}
										id={model}
									/>
									<label className={styles.label} htmlFor={model}>
										{model}
									</label>
								</span>
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
				<AccordionDetails style={{ border: '1px solid #81818131', borderTop: 'none', padding: 0 }}>
					<Typography sx={{}}>
						<span className={styles.wrapColor}>
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
										key={index}
										className={styles.wrap}
										style={activeColors[index] ? { border: '1px solid #000' } : {}}>
										<span
											style={color === 'multi' ? multiColor : { backgroundColor: `${color}` }}
											className={styles.circle}></span>
										<span>{color}</span>
									</button>
								))}
						</span>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
