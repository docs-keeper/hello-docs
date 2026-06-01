// Pricing constants for the storefront
export const TAX_RATE = 0.08;
export const SHIPPING_FLAT = 5;
export const FREE_SHIP_THRESHOLD = 50;
export const MAX_QTY = 99;
export const HANDLING_FEE = 2;

export const MEMBER_DISCOUNT = 0.1;
export const BULK_DISCOUNT = 0.15;
export const BULK_MIN_QTY = 10;
export const COUPON_WELCOME = 0.2;
export const COUPON_MAX_USES = 1;
export const LOYALTY_POINTS_PER_DOLLAR = 2;
export const LOYALTY_REDEEM_RATE = 0.01;
export const GIFT_CARD_MIN = 25;
export const GIFT_CARD_MAX = 500;
export const RETURN_WINDOW_DAYS = 30;
export function memberPrice(price) { return price * 0.9; }
export function withTax(price) { return price * 1.08; }
export function shippingFor(subtotal) { return subtotal >= 50 ? 0 : 5; }
export function loyaltyPoints(spend) { return Math.floor(spend * 2); }
export function applyCoupon(price) { return price * 0.8; }
