import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TypeDetailsAccordionStyle } from './TypeDetailsAccordion';

import styles from './DetailsAccordion.module.scss';

export const DetailsAccordion: FC = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

    const accordionStyle: TypeDetailsAccordionStyle = {
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        boxShadow: 'none',
        borderRadius: 0,
        padding: '15px 0',
    };

    return (
        <div className={styles.wrapper}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={accordionStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header' style={{ padding: 0 }}>
                    <Typography sx={{}}>SHIPPING & RETURNS</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: 0 }}>
                    <Typography sx={{}}>
                        <span>Cancelations </span>
                        <span>
                            For sneakers, you may cancel your order within 3 hours of placing it or before it is confirmed by the seller - whichever
                            comes first. If 3 hours have passed from when you placed the order and/or the seller has already confirmed the order, then
                            the order cannot be canceled. If neither have occurred, you can cancel your order first by accessing it via “Track My
                            Order” or “My Account,” clicking “Cancel Order” and following the instructions.
                        </span>
                        <span>If you checked out as a guest, you will need to create a Flight Club account.</span>
                        <span>Delivery</span>
                        <span>
                            Delivery and processing speeds vary by pricing options. The following shipping estimates apply only to the contiguous US
                            and exclude deliveries to PO boxes and military bases. All delivery times are estimates and are not guaranteed. Shipments
                            may be affected by weather-related delays, carrier limitations or other events outside of our control.
                        </span>
                        <span>
                            "Lowest Price" orders may ship to Flight Club first for verification and typically take 7-10 business days (M-F, excluding
                            holidays) to reach you. It will typically take 3-5 business days (M-F, excluding holidays) for a "Fastest To You" item,
                            ordered before 2 PM ET with standard shipping, to be delivered.
                        </span>
                        <span>
                            Estimated delivery times do not apply to international orders. International customers are responsible for any additional
                            fees or taxes after an item ships.
                        </span>
                        <span>Returns</span>
                        <span>All sales with Flight Club are final.</span>
                        <span>
                            If you have any questions or concerns with regard to sizing or condition of a specific product on our site, please contact
                            us before purchasing.
                        </span>
                        <Link className={styles.link} to={'/shipAndReturn'}>
                            Learn more
                        </Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
