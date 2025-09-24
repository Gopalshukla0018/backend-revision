
const products = [
  {
    id: 1,
    name: "Laptop - ProBook X",
    category: "Electronics",
    price: 85000,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Smartphone - Galaxy S25",
    category: "Electronics",
    price: 70000,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Book - JavaScript for Beginners",
    category: "Books",
    price: 599,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 1200,
    isBestseller: false,
  },
];

export const getAllProducts = (_, res) => {
  return res.status(200).json({
    message: "All products list fetched successfuly",
    products,
  });
};


export const getNewProductsForm =(req,res)=>{
    return res.status(200).json({
        message:"form to add new products"
    })
}

export const getBestSellerProducts =(req,res)=>{
    return res.status(200).json({
        message:"Showing all best seller products",
    })
}
