export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: number;
    stock: number;
    reviewCount?: number;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    address: string;
    phone?: string;
}

export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'completed'| 'cancelled';
    createdAt: Date;
    updatedAt: Date;
    shippingAddress: string;
    paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
    transactionId?: string;
    deliveryDate?: Date;
    trackingNumber?: string;
    notes?: string;
    discountCode?: string;
    taxAmount?: number;
    shippingCost?: number;
    giftWrap?: boolean;
    giftMessage?: string;
    isPaid: boolean;
    paidAt?: Date;
    isDelivered: boolean;
}