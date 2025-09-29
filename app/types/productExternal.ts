interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface ProductExternal {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}
