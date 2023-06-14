import { FC } from 'react';

import styles from './ShippingAndReturns.module.scss';

export const ShippingAndReturns: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>SHIPPING & RETURNS</h3>
                <h4 className={styles.subTitle}>DELIVERY</h4>
                <p>
                    All delivery times are estimates and are not guaranteed. Shipments may be affected by weather-related delays, carrier limitations
                    or other events outside of our control.
                </p>
                <p>
                    Delivery and processing speeds vary by pricing options. "Lowest Price" orders may ship to Flight Club first for verification and
                    typically take 7-10 business days (M-F, excluding holidays) to reach buyers located in the 48 contiguous states. Excluding
                    deliveries to PO boxes and military bases, it will typically take 3-5 business days (M-F, excluding holidays) for a "Fastest To
                    You" item, ordered before 2 PM ET with standard shipping, to be delivered to a buyer located in the 48 contiguous states. For
                    “Fastest To You” items ordered after 2 PM ET with standard shipping, it will take 4-6 business days to be delivered to a buyer
                    located in the 48 contiguous states.
                </p>
                <p>
                    “Next Day” is a shipping option for “Fastest To You” items that is available only to buyers located in the 48 contiguous states,
                    excluding PO boxes and military bases. It will typically take 1 business day for a “Fastest To You” item ordered before 2 PM ET
                    with “Next Day” shipping to be delivered to a buyer located in the 48 contiguous states. It will typically take 2 business days
                    for a “Fastest To You” item ordered after 2 PM ET with “Next Day” shipping to be delivered to a buyer located in the 48 contiguous
                    states. Estimated delivery times do not apply to international orders, which vary by country.
                </p>
                <p>
                    Once your order ships, you will receive an email notification with your tracking information. International customers are
                    responsible for any additional fees or taxes after an item ships. We do our best to protect international customers from incurring
                    additional fees, but cannot guarantee against any unexpected expenses.
                </p>
                <h4 className={styles.subTitle}>RISK OF LOSS</h4>
                <p>
                    The risk of loss and title for items purchased by you passes to you upon our delivery of the items to the carrier. Replacement of
                    products and credits applied to your account for shipped items claimed as not received are subject to our investigation, and we
                    may require you to sign and return an affidavit before looking into your claim.
                </p>
                <p>We will replace products and credit your account at our discretion.</p>
                <h4 className={styles.subTitle}>CANCELATIONS</h4>
                <p>
                    For sneakers, you may cancel your order within 3 hours of placing it or before the order is confirmed by the seller, whichever
                    comes first. If 3 hours have passed from when you placed the order and/or the seller has confirmed the order, then the order
                    cannot be canceled. If neither has occurred, simply access your order via “Track My Order” or “My Account,” click “Cancel Order”
                    and follow the instructions.
                </p>
                <p>If you checked out as a guest, you will need to create a Flight Club account to manage or cancel your order.</p>
                <h4 className={styles.subTitle}>RETURNS</h4>
                <p>
                    All sales with Flight Club are final. Flight Club is a ship-to-verify and consignment marketplace, meaning all items we carry and
                    offer on this site are generally provided by independent owners. Once an item sells, either online or in one of our stores, the
                    owner receives payment for their merchandise. Because of this, we are unable to process returns or exchanges.
                </p>
                <p>
                    f you have any questions with regard to sizing or condition of a specific product on our site, please contact us before committing
                    to purchase.
                </p>
                <p>Refunds are only processed based on fulfillment errors, such as incorrectly shipped or missing items.</p>
                <p>Please feel free to contact us with any questions.</p>
            </div>
        </div>
    );
};
