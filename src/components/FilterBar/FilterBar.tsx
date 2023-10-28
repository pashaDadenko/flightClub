import { FC, useState } from 'react';
import { RootState } from '../../redux/store';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../root/routesConfig';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { variantFilterBar } from './FilterBarVariants';
import { AnimatePresence, motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FilterBarProps, TypeAccordionStyle } from './TypeFilterBar';
import { setValueBrand, setValueModel, setValueColor, setValueSizes, setClearFilter } from '../../redux/filterSlice/filterSlice';

import styles from './FilterBar.module.scss';

export const FilterBar: FC<FilterBarProps> = (props) => {
	const { activeBrand, activeModel, activeSizes, windowWidth, activeColors, clearFilters, setAddFilters, updateSneakers, setActiveBrand, setActiveModel, setActiveSizes, setActiveColors, renderClearFiltersBtn } = props;

	const dispatch = useDispatch();
	const { pathname } = useLocation();

	const allSneakers = useSelector((state: RootState) => state.sneakersSlice.allSneakers);
	const brands = [...new Set(allSneakers.map((sneakers) => sneakers.brand))].sort();
	const models = [...new Set(updateSneakers.map((sneakers) => sneakers.model))].sort();
	const sizes = [...new Set(updateSneakers.map((sneakers) => sneakers.sizes).flat())].sort((a, b) => a - b);
	const colors = [...new Set(updateSneakers.map((sneakers) => sneakers.color))].sort();

	const [expanded, setExpanded] = useState<string | false>('panel1');
	const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

	const accordionStyle: TypeAccordionStyle = { boxShadow: 'none', transition: 'none' };
	const multiColor = { backgroundImage: `linear-gradient(to left, rgb(255, 244, 12), rgb(74, 138, 0) 31%, rgb(0, 72, 156) 63%, rgb(213, 55, 54))` };

	const renderBrand = pathname === PATHS.SNEAKERS || pathname === PATHS.TOP_SELLERS || pathname === PATHS.LOWEST_PRICE || pathname === PATHS.SEARCH_RESULT || pathname === PATHS.RAR_SHOES || pathname === PATHS.DARK_SHOES;

	const handleClick = () => {
		setAddFilters(false);
		window.scrollTo(0, 0);
	};

	return (
		<AnimatePresence>
			<motion.div className={styles.wrapper} key='filterBar' initial={'initial'} animate={'animate'} exit={'exit'} variants={windowWidth <= 900 ? variantFilterBar : {}}>
				{windowWidth <= 900 && (
					<div className={styles.header}>
						<div className={styles.wrap}>
							<CloseIcon className={styles.icon} onClick={handleClick} />
							<p className={styles.view} onClick={handleClick}>
								VIEW RESULT
							</p>
						</div>
						{renderClearFiltersBtn && (
							<p
								onClick={() => {
									dispatch(setClearFilter());
									clearFilters();
								}}
								className={styles.clear}>
								Clear Filters
							</p>
						)}
					</div>
				)}
				{renderBrand && (
					<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={accordionStyle} disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header' style={{ border: '1px solid #81818131' }}>
							<Typography sx={{}}>BRAND</Typography>
						</AccordionSummary>
						<AccordionDetails style={{ borderTop: 'none', padding: '20px 20px 0 20px', backgroundColor: '#f9f9f9', maxHeight: '145px', overflowY: 'auto' }}>
							<Typography sx={{ display: 'grid', gridTemplateColumns: windowWidth <= 900 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)', gap: '5px' }}>
								{brands &&
									brands.map((brand, index) => (
										<button
											onClick={() => {
												dispatch(setValueBrand(brand));
												setActiveBrand((prevActiveBrand) => ({
													...prevActiveBrand,
													[brand]: !prevActiveBrand[brand],
												}));
											}}
											style={activeBrand[brand] ? { border: '1px solid #000' } : {}}
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
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header' style={{ border: '1px solid #81818131' }}>
						<Typography sx={{}}>MODEL</Typography>
					</AccordionSummary>
					<AccordionDetails style={{ borderTop: 'none', padding: '20px 20px 0 20px', backgroundColor: '#f9f9f9', maxHeight: '145px', overflowY: 'auto' }}>
						<Typography sx={{ display: 'grid', gridTemplateColumns: windowWidth <= 900 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)', gap: '5px' }}>
							{models &&
								models.map((model, index) => (
									<button
										onClick={() => {
											dispatch(setValueModel(model));
											setActiveModel((prevActiveModel) => ({
												...prevActiveModel,
												[model]: !prevActiveModel[model],
											}));
										}}
										style={activeModel[model] ? { border: '1px solid #000' } : {}}
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
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header' style={{ border: '1px solid #81818131' }}>
						<Typography sx={{}}>US SIZES</Typography>
					</AccordionSummary>
					<AccordionDetails style={{ borderTop: 'none', padding: '20px 20px 0 20px', backgroundColor: '#f9f9f9' }}>
						<Typography sx={{ display: 'grid', gridTemplateColumns: windowWidth <= 900 ? 'repeat(5, 1fr)' : 'repeat(4, 1fr)', gap: '5px' }}>
							{sizes &&
								sizes.map((size, index) => (
									<button
										onClick={() => {
											dispatch(setValueSizes(size));
											setActiveSizes((prevActiveSize) => ({
												...prevActiveSize,
												[size]: !prevActiveSize[size],
											}));
										}}
										style={activeSizes[size] ? { border: '1px solid #000' } : {}}
										className={styles.buttonSize}
										name={size.toString()}
										id={size.toString()}
										key={index}>
										{size}
									</button>
								))}
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion style={{ marginBottom: '200px', ...accordionStyle }} disableGutters>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header' style={{ border: '1px solid #81818131' }}>
						<Typography sx={{}}>COLOR</Typography>
					</AccordionSummary>
					<AccordionDetails style={{ borderTop: 'none', padding: '20px 20px 0 20px', backgroundColor: '#f9f9f9' }}>
						<Typography sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px' }}>
							{colors &&
								colors.map((color, index) => (
									<button
										onClick={() => {
											dispatch(setValueColor(color));
											setActiveColors((prevActiveColor) => ({
												...prevActiveColor,
												[color]: !prevActiveColor[color],
											}));
										}}
										style={activeColors[color] ? { border: '1px solid #000' } : {}}
										className={styles.buttonColor}
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
			</motion.div>
		</AnimatePresence>
	);
};
