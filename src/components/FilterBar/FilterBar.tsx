import { FC, useState } from 'react';
import { TypeFilterBar } from './TypeFilterBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './FilterBar.module.scss';

export const FilterBar: FC = () => {
    const allSneakers = useSelector((state: RootState) => state.sneakersDataSlice.sneakersData);
    const updateBrand = [...new Set(allSneakers.map((sneakers) => sneakers.brand))].sort();
    const updateModel = [...new Set(allSneakers.map((sneakers) => sneakers.model))].sort();
    const updateColor = [...new Set(allSneakers.map((sneakers) => sneakers.color))].sort();

    const [expanded, setExpanded] = useState<string | false>('panel1');
    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

    const accordionStyle: TypeFilterBar = {
        boxShadow: 'none',
        transition: 'none',
    };

    const multiColor = { backgroundImage: `linear-gradient(to left, rgb(255, 244, 12), rgb(74, 138, 0) 31%, rgb(0, 72, 156) 63%, rgb(213, 55, 54))` };

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
                        {updateBrand &&
                            updateBrand.map((brand, index) => (
                                <span key={index} className={styles.wrapBrand}>
                                    <input className={styles.checkbox} type='checkbox' name={brand} id={brand} />
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
                        {updateModel &&
                            updateModel.map((model, index) => (
                                <span key={index} className={styles.wrapBrand}>
                                    <input className={styles.checkbox} type='checkbox' name={model} id={model} />
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
                            {updateColor &&
                                updateColor.map((color, index) => (
                                    <span key={index} className={styles.wrap}>
                                        <span
                                            style={color === 'multi' ? multiColor : { backgroundColor: `${color}` }}
                                            className={styles.circle}></span>
                                        <span>{color}</span>
                                    </span>
                                ))}
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
