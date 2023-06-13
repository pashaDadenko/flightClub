import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './AccordionMUI.module.scss';

export const AccordionMUI: FC = () => {
    return (
        <Accordion className={styles.root}>
            <AccordionSummary
                className={styles.headingWrap}
                expandIcon={<ExpandMoreIcon className={styles.icon} />}
                aria-controls='panel1a-content'
                id='panel1a-header'>
                <Typography className={styles.heading}>SHIPPING & RETURNS</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.textWrap}>
                <Typography className={styles.text}>
                    <span>Cancelations </span>
                    <span>
                        For sneakers, you may cancel your order within 3 hours of placing it or before it is confirmed by the seller - whichever comes
                        first. If 3 hours have passed from when you placed the order and/or the seller has already confirmed the order, then the order
                        cannot be canceled. If neither have occurred, you can cancel your order first by accessing it via “Track My Order” or “My
                        Account,” clicking “Cancel Order” and following the instructions.
                    </span>
                    <span>If you checked out as a guest, you will need to create a Flight Club account.</span>
                    <span>Delivery</span>
                    <span>
                        Delivery and processing speeds vary by pricing options. The following shipping estimates apply only to the contiguous US and
                        exclude deliveries to PO boxes and military bases. All delivery times are estimates and are not guaranteed. Shipments may be
                        affected by weather-related delays, carrier limitations or other events outside of our control.
                    </span>
                    <span>
                        "Lowest Price" orders may ship to Flight Club first for verification and typically take 7-10 business days (M-F, excluding
                        holidays) to reach you. It will typically take 3-5 business days (M-F, excluding holidays) for a "Fastest To You" item,
                        ordered before 2 PM ET with standard shipping, to be delivered.
                    </span>
                    <span>
                        Estimated delivery times do not apply to international orders. International customers are responsible for any additional fees
                        or taxes after an item ships.
                    </span>
                    <span>Returns</span>
                    <span>All sales with Flight Club are final.</span>
                    <span>
                        If you have any questions or concerns with regard to sizing or condition of a specific product on our site, please contact us
                        before purchasing.
                    </span>
                    <Link to={''}>Learn more</Link>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};
