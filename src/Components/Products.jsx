import React from 'react';


const products = [
  {
    pid: '1',
    pname: 'Wheat',
    price: '35%',
    image: 'https://img.freepik.com/free-photo/field-with-spikelets-close-up-background-with-wheat-spikelets_661209-259.jpg',
    description: 'Nutritious golden wheat',
    availableQuantity: 10,
    productValidity: '2026-03-05'
  },
  {
    pid: '2',
    pname: 'Rice',
    price: '35%',
    image: 'https://img.freepik.com/free-photo/milled-rice-black-bowl-black-cement-floor_1150-20046.jpg',
    description: 'Premium white rice',
    availableQuantity: 10,
    productValidity: '2026-04-05'
  },  
  {
    pid: '3',
    pname: 'Maize',
    price: '20%',
    image: 'https://img.freepik.com/free-photo/corn-cobs-wooden-box-high-angle-view-wooden-table_176474-5895.jpg',
    description: 'Harvested Fresh',
    availableQuantity: 15,
    productValidity: '2026-06-15'
  },
  {
    pid: '4',
    pname: 'Barley',
    price: '22%',
    image: 'https://img.freepik.com/free-photo/wheat-grains-bowl-wheat-popcorn-bowl-wheat-seed-rustic_114579-1319.jpg',
    description: 'Certified Organic',
    availableQuantity: 8,
    productValidity: '2026-05-10'
  },
  {
    pid: '5',
    pname: 'Soybeans',
    price: '30%',
    image: 'https://img.freepik.com/free-photo/soybeans-wooden-scoop-little-stone-mill_1387-407.jpg',
    description: 'Premium Quality Beans',
    availableQuantity: 12,
    productValidity: '2026-04-20'
  },
  {
    pid: '6',
    pname: 'Millet',
    price: '18%',
    image: 'https://img.freepik.com/free-photo/top-view-brown-buckwheat-inside-plate-with-spoons-dark-background_179666-17388.jpg?t=st=1744261426~exp=1744265026~hmac=fb541234df25d5b8c4a720d4b2368d5b04e03119e10f66d60f072a5f07d2efbe&w=1380',
    description: 'Naturally Grown',
    availableQuantity: 20,
    productValidity: '2026-07-01'
  },
  {
    pid: '7',
    pname: 'Oats',
    price: '15%',
    image: 'https://img.freepik.com/free-photo/rolled-oats-healthy-breakfast-cereal-oat-flakes-black-slate-background_123827-32124.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
    description: 'Whole Grain Rich',
    availableQuantity: 13,
    productValidity: '2026-06-10'
  },
  {
    pid: '8',
    pname: 'Chickpeas',
    price: '25%',
    image: 'https://img.freepik.com/free-photo/soybean-sauce-soybean-wooden-floor-soy-sauce-food-nutrition-concept_1150-26321.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
    description: 'High Protein',
    availableQuantity: 16,
    productValidity: '2026-03-28'
  },
  {
    pid: '9',
    pname: 'Lentils',
    price: '28%',
    image: 'https://img.freepik.com/premium-photo/red-lentil-lal-masoor-ki-dal-bowl-selective-focus_466689-35331.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
    description: 'Rich in Fiber',
    availableQuantity: 14,
    productValidity: '2026-05-17'
  },
  {
    pid: '10',
    pname: 'Green Gram',
    price: '12%',
    image:  'https://img.freepik.com/free-photo/red-beans-wood-background-soft-focus-with-vintage-film-filter_1339-177.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
    description: 'Crunchy and Fresh',
    availableQuantity: 18,
    productValidity: '2026-08-05'
  },
    {
      pid: '11',
      pname: 'Black Gram',
      price: '26%',
      image: 'https://img.freepik.com/free-photo/black-beans-white-small-bowl-place-dark-floor_1150-35412.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Organic & Protein Rich',
      availableQuantity: 14,
      productValidity: '2026-05-12'
    },
    {
      pid: '12',
      pname: 'Peanuts',
      price: '40%',
      image: 'https://img.freepik.com/free-photo/top-view-peanuts-arrangement_23-2150432754.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Crunchy and Nutty',
      availableQuantity: 18,
      productValidity: '2026-07-22'
    },
    {
      pid: '13',
      pname: 'Mustard Seeds',
      price: '32%',
      image: 'https://img.freepik.com/free-photo/raw-red-lentils-top-view_140725-11821.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Pungent and Flavorful',
      availableQuantity: 11,
      productValidity: '2026-04-18'
    },
    {
      pid: '14',
      pname: 'Sunflower Seeds',
      price: '45%',
      image: 'https://img.freepik.com/free-photo/top-view-black-sunflower-seeds-bowl-with-seeds-background-horizontal_176474-5356.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Energy Booster',
      availableQuantity: 16,
      productValidity: '2026-06-05'
    },
    {
      pid: '15',
      pname: 'Flax Seeds',
      price: '50%',
      image: 'https://img.freepik.com/free-photo/top-view-sesame-seeds-texture-background_176474-3278.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Rich in Omega-3',
      availableQuantity: 13,
      productValidity: '2026-04-30'
    },
    {
      pid: '16',
      pname: 'Sesame Seeds',
      price: '48%',
      image: 'https://img.freepik.com/free-photo/sesame-seeds_1150-45331.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Healthy Oil Source',
      availableQuantity: 17,
      productValidity: '2026-07-10'
    },
    {
      pid: '17',
      pname: 'Cotton',
      price: '60%',
      image: 'https://img.freepik.com/free-photo/cotton-cloud-with-splashes-drops-blue-background-3d-illustration_1057-44572.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Soft Natural Fiber',
      availableQuantity: 9,
      productValidity: '2026-08-20'
    },
    {
      pid: '18',
      pname: 'Sugarcane',
      price: '55%',
      image: 'https://img.freepik.com/free-photo/healthy-jaggery-still-life-arrangement_23-2149161550.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Sweet and Juicy',
      availableQuantity: 20,
      productValidity: '2026-09-01'
    },
    {
      pid: '19',
      pname: 'Coffee Beans',
      price: '75%',
      image: 'https://img.freepik.com/free-photo/close-up-view-dark-fresh-roasted-coffee-beans-coffee-beans-background_141793-27283.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Dark Roast Premium',
      availableQuantity: 12,
      productValidity: '2026-10-12'
    },
    {
      pid: '20',
      pname: 'Tea Leaves',
      price: '65%',
      image: 'https://img.freepik.com/free-photo/close-up-green-leaves-nature_23-2149006020.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
      description: 'Green and Aromatic',
      availableQuantity: 15,
      productValidity: '2026-06-30'
    },
      {
        pid: '21',
        pname: 'Cashew Nuts',
        price: '90%',
        image: 'https://img.freepik.com/free-photo/tasty-cashew-nuts-as-background_1150-45355.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Crunchy and Nutritious',
        availableQuantity: 10,
        productValidity: '2026-06-12'
      },
      {
        pid: '22',
        pname: 'Almonds',
        price: '100%',
        image: 'https://img.freepik.com/free-photo/top-view-brown-almonds_140725-24348.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'High in Vitamin E',
        availableQuantity: 12,
        productValidity: '2026-07-18'
      },
      {
        pid: '23',
        pname: 'Walnuts',
        price: '110%',
        image: 'https://img.freepik.com/free-photo/top-view-fresh-whole-walnuts-shells-cleaned-up-brown_140725-19002.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Heart-Healthy Snack',
        availableQuantity: 8,
        productValidity: '2026-08-08'
      },
      {
        pid: '24',
        pname: 'Pistachios',
        price: '120%',
        image: 'https://img.freepik.com/free-photo/top-view-pistachios-bowl-gray-texture-with-copy-space-horizontal_176474-1328.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Salted & Roasted',
        availableQuantity: 14,
        productValidity: '2026-10-10'
      },
      {
        pid: '25',
        pname: 'Cocoa Beans',
        price: '85%',
        image: 'https://img.freepik.com/free-photo/composition-with-roasted-coffee-beans-coffe-bean-shaped-cookies_114579-7581.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Raw & Unrefined',
        availableQuantity: 11,
        productValidity: '2026-05-28'
      },
      {
        pid: '26',
        pname: 'Black Pepper',
        price: '95%',
        image: 'https://img.freepik.com/free-photo/flat-lay-condiment-seeds-bowl_23-2148461636.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Spicy Flavor Enhancer',
        availableQuantity: 9,
        productValidity: '2026-09-14'
      },
      {
        pid: '27',
        pname: 'Cardamom',
        price: '130%',
        image: 'https://img.freepik.com/free-photo/close-up-pumpkin-seeds_53876-33638.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Aromatic and Sweet',
        availableQuantity: 7,
        productValidity: '2026-06-01'
      },
      {
        pid: '28',
        pname: 'Turmeric',
        price: '55%',
        image: 'https://img.freepik.com/free-photo/closeup-tumeric-powder-spice-spoon_53876-31709.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Natural Anti-inflammatory',
        availableQuantity: 16,
        productValidity: '2026-12-20'
      },
      {
        pid: '29',
        pname: 'Ginger',
        price: '65%',
        image: 'https://img.freepik.com/free-photo/honey-lemon-ginger-juice-food-beverage-products-from-ginger-extract-food-nutrition-concept_1150-26377.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Zesty and Medicinal',
        availableQuantity: 13,
        productValidity: '2026-11-11'
      },
      {
        pid: '30',
        pname: 'Garlic',
        price: '40%',
        image: 'https://img.freepik.com/free-photo/fresh-raw-garlic-ready-cook_1150-42637.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Bold and Pungent',
        availableQuantity: 18,
        productValidity: '2026-08-29'
      },
      {
        pid: '31',
        pname: 'Onions',
        price: '20%',
        image: 'https://img.freepik.com/free-photo/close-up-view-red-onions-left-side-purple-background-with-copy-space_141793-5403.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Fresh and Juicy',
        availableQuantity: 21,
        productValidity: '2026-07-03'
      },
      {
        pid: '32',
        pname: 'Tomatoes',
        price: '25%',
        image: 'https://img.freepik.com/free-photo/top-view-ripe-fresh-tomatoes-with-water-drops-black-background_141793-3432.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Ripe & Juicy',
        availableQuantity: 25,
        productValidity: '2026-09-09'
      },
      {
        pid: '33',
        pname: 'Potatoes',
        price: '18%',
        image: 'https://img.freepik.com/free-photo/close-up-potatoes-floor_23-2148540364.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Versatile & Filling',
        availableQuantity: 30,
        productValidity: '2026-08-01'
      },
      {
        pid: '34',
        pname: 'Carrots',
        price: '22%',
        image: 'https://img.freepik.com/free-photo/group-carrot-vegetables-sale-supermarket_169016-55194.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Crunchy & Sweet',
        availableQuantity: 19,
        productValidity: '2026-10-22'
      },
      {
        pid: '35',
        pname: 'Cabbage',
        price: '15%',
        image: 'https://img.freepik.com/free-photo/preparation-salad-from-chinese-cabbage_2829-11722.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Leafy & Mild',
        availableQuantity: 17,
        productValidity: '2026-07-07'
      },
      {
        pid: '36',
        pname: 'Spinach',
        price: '12%',
        image: 'https://img.freepik.com/free-photo/close-up-photo-fresh-spinach_176420-7294.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Rich in Iron',
        availableQuantity: 20,
        productValidity: '2026-11-15'
      },
      {
        pid: '37',
        pname: 'Broccoli',
        price: '28%',
        image: 'https://img.freepik.com/free-photo/food-pattern-close-up-close_23-2151945458.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'High in Fiber',
        availableQuantity: 14,
        productValidity: '2026-09-05'
      },
      {
        pid: '38',
        pname: 'Cauliflower',
        price: '30%',
        image: 'https://img.freepik.com/free-photo/close-up-view-cauliflower-purple-background-with-copy-space_141793-5235.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Mild and Nutritious',
        availableQuantity: 13,
        productValidity: '2026-08-13'
      },
      {
        pid: '39',
        pname: 'Pumpkin',
        price: '25%',
        image: 'https://img.freepik.com/free-photo/vertical-shot-harvested-pumpkins-grass_181624-42878.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Sweet & Earthy',
        availableQuantity: 22,
        productValidity: '2026-10-05'
      },
      {
        pid: '40',
        pname: 'Cucumber',
        price: '18%',
        image: 'https://img.freepik.com/free-photo/fresh-cucumbers-sliced-dark-background_1150-45035.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
        description: 'Cool and Refreshing',
        availableQuantity: 26,
        productValidity: '2026-06-24'
      },
      
        {
          pid: '41',
          pname: 'Mangoes',
          price: '$35',
          image: 'https://img.freepik.com/free-photo/delicious-mango-still-life_23-2151542129.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Juicy tropical mangoes',
          availableQuantity: 10,
          productValidity: '2026-07-14'
        },
        {
          pid: '42',
          pname: 'Bananas',
          price: '$20',
          image: 'https://img.freepik.com/free-photo/view-banana-fruits_23-2150823149.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Fresh ripe bananas',
          availableQuantity: 10,
          productValidity: '2025-12-30'
        },
        {
          pid: '43',
          pname: 'Apples',
          price: '$50',
          image: 'https://img.freepik.com/free-photo/top-view-fresh-apples-arrangement_23-2149433487.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Crisp red apples',
          availableQuantity: 10,
          productValidity: '2026-11-18'
        },
        {
          pid: '44',
          pname: 'Grapes',
          price: '$45',
          image: 'https://img.freepik.com/free-photo/cluster-green-black-grapes-marble-table_114579-21016.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Fresh green & black grapes',
          availableQuantity: 10,
          productValidity: '2025-08-03'
        },
        {
          pid: '45',
          pname: 'Strawberries',
          price: '$60',
          image: 'https://img.freepik.com/free-photo/strawberries_1194-2304.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Sweet garden strawberries',
          availableQuantity: 10,
          productValidity: '2027-01-25'
        },
        {
          pid: '46',
          pname: 'Oranges',
          price: '$40',
          image: 'https://img.freepik.com/free-photo/oranges-market-stall_1391-113.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Citrusy fresh oranges',
          availableQuantity: 10,
          productValidity: '2025-10-12'
        },
        {
          pid: '47',
          pname: 'Pineapples',
          price: '$55',
          image: 'https://img.freepik.com/free-photo/delicious-pineapple-still-life_23-2151605427.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Tropical juicy pineapples',
          availableQuantity: 10,
          productValidity: '2026-06-01'
        },
        {
          pid: '48',
          pname: 'Papayas',
          price: '$30',
          image: 'https://img.freepik.com/free-photo/tropical-fruits-pattern_23-2151535765.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Ripened tropical papayas',
          availableQuantity: 10,
          productValidity: '2025-09-20'
        },
        {
          pid: '49',
          pname: 'Peaches',
          price: '$50',
          image: 'https://img.freepik.com/free-photo/high-angle-peaches-wooden-board_23-2149629121.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Velvety soft peaches',
          availableQuantity: 10,
          productValidity: '2026-02-11'
        },
        {
          pid: '50',
          pname: 'Plums',
          price: '$45',
          image: 'https://img.freepik.com/free-photo/prunes-with-several-leaves-water-drops-closeup-selective-focus-shallow-depth-fieldphoto-food-ripe-fruit-plum-harvesting-prunes-autumn-ecoproducts-from-farm-fruit-product-image_166373-2810.jpg?uid=R160055992&ga=GA1.1.777470944.1742779630&semt=ais_hybrid&w=740',
          description: 'Farm-fresh juicy plums',
          availableQuantity: 10,
          productValidity: '2027-03-09'
        }
      
    
];

const Products = () => {
  return (
    <div style={styles.container}>
      <br /><br /><br />
      <h1 style={styles.header}>Agricultural Products</h1>
      <br />
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.pid} style={styles.card}>
            <img src={product.image} alt={product.pname} style={styles.image} />
            <h2 style={styles.productName}>{product.pname}</h2>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.info}>Quantity: {product.availableQuantity}</p>
            <p style={styles.info}>Valid Till: {product.productValidity}</p>
            <br></br>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: 'white',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '15px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  productName: {
    fontSize: '1.5rem',
    margin: '10px 0',
    color: '#333',
  },
  price: {
    fontSize: '1.2rem',
    color: '#4CAF50',
  },
  description: {
    fontSize: '1rem',
    color: 'green',
    margin: '5px 0',
  },
  info: {
    fontSize: '0.9rem',
    color: '#777',
    margin: '2px 0',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  
};

export default Products;
