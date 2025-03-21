# React Product Management Project

This is a React-based project for managing and displaying products. It includes components for displaying products, adding new products, and handling dates.

## Project Structure

```
/src
│── ItemDate.jsx       # Displays formatted date for a product
│── NewProduct.jsx     # Form to add a new product
│── Products.jsx       # Displays a list of products
│── App.js            # Main application file
│── index.js          # Renders the React application
```

## Components Overview

### `ItemDate.jsx`
This component receives a date as a prop and formats it into a readable format (month, day, year).

#### Example Usage:
```jsx
<ItemDate date={new Date()} />
```

### `NewProduct.jsx`
A form component that allows users to add a new product by entering a name and selecting a date.

#### Features:
- Uses `useState` to manage form inputs.
- Calls `console.log()` to output form data upon submission.

### `Products.jsx`
Displays a list of products, including the product name, date, and an "Add to Cart" button.

#### Props:
- `products`: An array of product objects containing:
  - `title`: The name of the product.
  - `date`: The date associated with the product.

#### Example Usage:
```jsx
const productList = [
  { title: 'Laptop', date: new Date() },
  { title: 'Phone', date: new Date() }
];

<Products products={productList} />
```

## Technologies Used
- React.js
- Tailwind CSS

## Connect with Me
- 🔗 LinkedIn: [mrravikumar](https://www.linkedin.com/in/mrravikumar)
- 🔗 Portfolio: [mrravikumar.com](https://www.mrravikumar.com)
- 🌐 Website: [dsa2web.com](https://www.dsa2web.com)
- 📘 Facebook Page: [dsa2web](https://www.facebook.com/dsa2web)
- 📸 Instagram: [@dsa2web](https://www.instagram.com/dsa2web)
- 🐦 Twitter: [@dsa2web](https://www.twitter.com/dsa2web)
- 📩 LinkedIn Page: [dsa2web](https://www.linkedin.com/company/dsa2web)
- 📢 Telegram: [t.me/dsa2web](https://t.me/dsa2web)
