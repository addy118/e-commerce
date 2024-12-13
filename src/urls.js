baseUrl = "https://fakestoreapi.in/api/products";

CATEGORY = ['tv', 'audio', 'laptop', 'mobiile', 'gaming', 'appliances'];
PAGE = [1, 2, 3];

allProducts = `baseUrl?limit=150`;
category = `baseUrl/category?type={CATEGORY}`;
pageWise = `baseUrl?page={PAGE}`;
