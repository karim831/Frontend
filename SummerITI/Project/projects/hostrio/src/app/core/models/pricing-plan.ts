export interface PricingPlan {
    id: number;
    name: string;
    price: number;
    period: string;
    image: string;
    features: string[];
    isPopular?: boolean;
}
