export const products = [
  { 
    id: 1, 
    title: 'Embroidered Lawn Suit', 
    description: 'Premium 3-piece embroidered lawn suit with chiffon dupatta. Perfect for summer occasions.', 
    price: 2499, 
    originalPrice: 4999, 
    images: ['https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600'], 
    category: 'sale', 
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black', hex: '#111111' }, { name: 'Maroon', hex: '#7f1d1d' }]
  },
  { 
    id: 2, 
    title: 'Classic Cotton Dupatta', 
    description: 'Soft and breathable cotton dupatta ideal for everyday wear.', 
    price: 599, 
    originalPrice: 1200, 
    images: ['https://images.unsplash.com/photo-1566564174899-fc0cdc9b0cb2?w=600'], 
    category: 'sale', 
    rating: 4.2,
    sizes: ['Standard'],
    colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Beige', hex: '#d4a574' }]
  },
  { 
    id: 3, 
    title: 'Printed Chiffon Dupatta', 
    description: 'Lightweight chiffon dupatta with digital print. Versatile and stylish.', 
    price: 799, 
    originalPrice: 1500, 
    images: ['https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600'], 
    category: 'sale', 
    rating: 4.0,
    sizes: ['Standard'],
    colors: [{ name: 'Red', hex: '#ef4444' }, { name: 'Blue', hex: '#3b82f6' }]
  },
  { 
    id: 4, 
    title: 'Cotton Lawn Fabric 3M', 
    description: 'Unstitched premium cotton lawn fabric. 3 Meters.', 
    price: 1200, 
    originalPrice: 2200, 
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600'], 
    category: 'sale', 
    rating: 4.3,
    sizes: ['3 Meters'],
    colors: [{ name: 'White', hex: '#f5f5f5' }]
  },
  { 
    id: 5, 
    title: 'New Arrival Fancy Suit', 
    description: 'Latest designer fancy suit with modern embroidery.', 
    price: 3499, 
    originalPrice: 3499, 
    images: ['https://images.unsplash.com/photo-1595777712802-4b437af55986?w=600'], 
    category: 'new_arrival', 
    rating: 4.7,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Navy', hex: '#001f3f' }]
  },
  { 
    id: 6, 
    title: 'Premium Silk Suit', 
    description: 'Luxurious silk suit for special occasions.', 
    price: 5999, 
    originalPrice: 5999, 
    images: ['https://images.unsplash.com/photo-1619451334792-150fc22427a4?w=600'], 
    category: 'good_quality', 
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Gold', hex: '#c9a84c' }, { name: 'Emerald', hex: '#10b981' }]
  },
  { 
    id: 7, 
    title: 'Casual Cotton Suit', 
    description: 'Comfortable everyday cotton suit for casual wear.', 
    price: 1899, 
    originalPrice: 3500, 
    images: ['https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600'], 
    category: 'good_quality', 
    rating: 4.4,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Light Blue', hex: '#add8e6' }, { name: 'Cream', hex: '#fffdd0' }]
  },
  { 
    id: 8, 
    title: 'Trendy Lawn Suit', 
    description: 'Latest trend in lawn suits with vibrant colors.', 
    price: 2199, 
    originalPrice: 2199, 
    images: ['https://images.unsplash.com/photo-1609706228149-0d782e1bcc54?w=600'], 
    category: 'viral', 
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Pink', hex: '#ff69b4' }]
  },
  { 
    id: 9, 
    title: 'Budget Lawn Fabric', 
    description: 'Affordable lawn fabric per meter.', 
    price: 180, 
    originalPrice: 350, 
    images: ['https://images.unsplash.com/photo-1522773356271-cbc2cf34d359?w=600'], 
    category: 'low_price', 
    rating: 3.9,
    sizes: ['1 Meter'],
    colors: [{ name: 'Multi', hex: '#9c27b0' }]
  },
  { 
    id: 10, 
    title: 'Economy Cotton Dupatta', 
    description: 'Budget-friendly cotton dupatta for everyday use.', 
    price: 299, 
    originalPrice: 600, 
    images: ['https://images.unsplash.com/photo-1495114716159-ce3a3d0e3ae4?w=600'], 
    category: 'low_price', 
    rating: 3.8,
    sizes: ['Standard'],
    colors: [{ name: 'Grey', hex: '#808080' }]
  },
  { 
    id: 11, 
    title: 'Karandi Suit Unstitched', 
    description: 'Premium quality karandi fabric, 3-piece unstitched.', 
    price: 3200, 
    originalPrice: 3200, 
    images: ['https://images.unsplash.com/photo-1615886753866-79396abc446a?w=600'], 
    category: 'good_quality', 
    rating: 4.6,
    sizes: ['Unstitched'], 
    colors: [{ name: 'Cream', hex: '#fef3c7' }]
  },
  { 
    id: 12, 
    title: 'Printed Lawn Per Meter', 
    description: 'Budget-friendly printed lawn fabric per meter.', 
    price: 180, 
    originalPrice: 350, 
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600'], 
    category: 'low_price', 
    rating: 3.9,
    sizes: ['1 Meter'], 
    colors: [{ name: 'Floral', hex: '#ec4899' }]
  },
];

export const CAT_LABELS = {
  sale: '🔥 Sale Products',
  new_arrival: '✨ New Arrivals',
  good_quality: '🌟 Good Quality',
  viral: '🚀 Viral Trends',
  low_price: '💰 Low Price'
};
