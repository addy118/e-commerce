const baseUrl = "https://fakestoreapi.in/api/products";

const CATEGORY = ["tv", "audio", "laptop", "mobiile", "gaming", "appliances"];
const PAGE = [1, 2, 3];

const allProducts = `${baseUrl}?limit=150`;
const categoryWise = `${baseUrl}/category?type=${CATEGORY}`;
const pageWise = `${baseUrl}?page=${PAGE}`;

export { baseUrl, allProducts, categoryWise, pageWise };
