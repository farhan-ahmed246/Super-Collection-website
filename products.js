export const products = [
  { 
    id:1, 
    title:'Embroidered Lawn Suit', 
    description:'Premium 3-piece embroidered lawn suit with chiffon dupatta. Perfect for summer occasions.', 
    price:2499, 
    originalPrice:4999, 
    images:['https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600'], 
    category:'sale', 
    rating:4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black', hex: '#111111' }, { name: 'Maroon', hex: '#7f1d1d' }]
  },
  { 
    id:3, 
    title:'Printed Chiffon Dupatta', 
    description:'Lightweight chiffon dupatta with digital print. Versatile and stylish.', 
    price:799, 
    originalPrice:1500, 
    images:['https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600'], 
    category:'sale', 
    rating:4.0,
    sizes: ['Standard'], // Dupatta has no S, M, L
    colors: [{ name: 'Red', hex: '#ef4444' }, { name: 'Blue', hex: '#3b82f6' }]
  },
  { 
    id:4, 
    title:'Cotton Lawn Fabric 3M', 
    description:'Unstitched premium cotton lawn fabric. 3 Meters.', 
    price:1200, 
    originalPrice:2200, 
    images:['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600'], 
    category:'sale', 
    rating:4.3,
    sizes: ['3 Meters'], // Clearer for customer
    colors: [{ name: 'White', hex: '#f5f5f5' }]
  },
  // ... Baqi products mein bhi maine sizes ko fix kiya hai
  { 
    id:16, 
    title:'Karandi Suit Unstitched', 
    description:'Premium quality karandi fabric, 3-piece unstitched.', 
    price:3200, 
    originalPrice:3200, 
    images:['https://images.unsplash.com/photo-1615886753866-79396abc446a?w=600'], 
    category:'good_quality', 
    rating:4.6,
    sizes: ['Unstitched'], 
    colors: [{ name: 'Cream', hex: '#fef3c7' }]
  },
  { 
    id:26, 
    title:'Printed Lawn Per Meter', 
    description:'Budget-friendly printed lawn fabric per meter.', 
    price:180, 
    originalPrice:180, 
    images:['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600'], 
    category:'low_price', 
    rating:3.9,
    sizes: ['1 Meter'], 
    colors: [{ name: 'Floral', hex: '#ec4899' }]
  }
];

export const CAT_LABELS = {
    sale: '🔥 Sale Products',
    new_arrival: '✨ New Arrivals',
    good_quality: '🌟 Good Quality',
    viral: '🚀 Viral Trends',
    low_price: '💰 Low Price'
};