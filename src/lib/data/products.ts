// Product catalog data

export interface Product {
    id: string;
    name: string;
    description: string;
    category: "feeds" | "products";
    subcategory: string;
    image: string;
    specifications?: Record<string, string>;
    packingSizes?: string[];
}

// Feeds products
export const feedsProducts: Product[] = [
    {
        id: "dairy-meal-16",
        name: "Dairy Meal 16%",
        description: "Boost milk production naturally with our scientifically formulated dairy meal.",
        category: "feeds",
        subcategory: "cow",
        image: "/images/products/dairy-meal.jpg",
        specifications: {
            "Crude Protein": "16%",
            "Crude Fiber": "12%",
            "Metabolizable Energy": "10.5 MJ/kg",
        },
        packingSizes: ["20kg", "50kg", "70kg"],
    },
    {
        id: "dairy-meal-20",
        name: "Dairy Meal 20%",
        description: "Premium high-protein formula for maximum milk yield in high-producing cows.",
        category: "feeds",
        subcategory: "cow",
        image: "/images/products/dairy-meal-premium.jpg",
        specifications: {
            "Crude Protein": "20%",
            "Crude Fiber": "10%",
            "Metabolizable Energy": "11.2 MJ/kg",
        },
        packingSizes: ["20kg", "50kg", "70kg"],
    },
    {
        id: "layers-mash",
        name: "Layers Mash",
        description: "Faster growth, stronger shells. Complete nutrition for laying hens.",
        category: "feeds",
        subcategory: "chicken",
        image: "/images/products/layers-mash.jpg",
        specifications: {
            "Crude Protein": "17%",
            "Calcium": "3.5%",
            "Phosphorus": "0.45%",
        },
        packingSizes: ["10kg", "25kg", "50kg"],
    },
    {
        id: "broiler-starter",
        name: "Broiler Starter",
        description: "High-energy formula for rapid early growth in broiler chicks.",
        category: "feeds",
        subcategory: "chicken",
        image: "/images/products/broiler-starter.jpg",
        specifications: {
            "Crude Protein": "22%",
            "Metabolizable Energy": "12.5 MJ/kg",
        },
        packingSizes: ["10kg", "25kg", "50kg"],
    },
    {
        id: "pig-finisher",
        name: "Pig Finisher",
        description: "Optimized for weight gain. Get your pigs market-ready faster.",
        category: "feeds",
        subcategory: "pig",
        image: "/images/products/pig-finisher.jpg",
        specifications: {
            "Crude Protein": "16%",
            "Lysine": "0.75%",
            "Metabolizable Energy": "13.0 MJ/kg",
        },
        packingSizes: ["25kg", "50kg"],
    },
];

// Dairy products
export const dairyProducts: Product[] = [
    {
        id: "fresh-milk",
        name: "Fresh Milk",
        description: "Pasteurized to perfection. Farm-fresh milk delivered to your doorstep.",
        category: "products",
        subcategory: "milk",
        image: "/images/products/fresh-milk.jpg",
        packingSizes: ["500ml", "1L", "2L"],
    },
    {
        id: "yoghurt-strawberry",
        name: "Strawberry Yoghurt",
        description: "Real fruit, real cream. Naturally sweetened with fresh strawberries.",
        category: "products",
        subcategory: "yoghurt",
        image: "/images/products/yoghurt-strawberry.jpg",
        packingSizes: ["150g", "500g", "1kg"],
    },
    {
        id: "yoghurt-vanilla",
        name: "Vanilla Yoghurt",
        description: "Smooth and creamy with natural vanilla essence.",
        category: "products",
        subcategory: "yoghurt",
        image: "/images/products/yoghurt-vanilla.jpg",
        packingSizes: ["150g", "500g", "1kg"],
    },
    {
        id: "yoghurt-natural",
        name: "Natural Yoghurt",
        description: "Pure, unsweetened yoghurt. Perfect for cooking or healthy snacking.",
        category: "products",
        subcategory: "yoghurt",
        image: "/images/products/yoghurt-natural.jpg",
        packingSizes: ["150g", "500g", "1kg"],
    },
    {
        id: "cheddar-cheese",
        name: "Cheddar Cheese",
        description: "Artisan cheddar aged to perfection. Rich, sharp, and utterly delicious.",
        category: "products",
        subcategory: "cheese",
        image: "/images/products/cheddar-cheese.jpg",
        packingSizes: ["200g", "500g", "1kg"],
    },
    {
        id: "mozzarella-cheese",
        name: "Mozzarella Cheese",
        description: "Soft, stretchy mozzarella. Perfect for pizzas and salads.",
        category: "products",
        subcategory: "cheese",
        image: "/images/products/mozzarella.jpg",
        packingSizes: ["200g", "500g"],
    },
];

export const feedCategories = [
    { id: "cow", name: "Dairy/Cattle" },
    { id: "chicken", name: "Poultry" },
    { id: "pig", name: "Pig" },
];

export const productCategories = [
    { id: "milk", name: "Fresh Milk" },
    { id: "yoghurt", name: "Yoghurt" },
    { id: "cheese", name: "Cheese" },
];
