export type ProductCardProps = {
  images: { thumb: { url: string } }[]; 
  title: string;
  description: string;
  price: string;
  id?: number;
  amount?: string;
  essence?: string;
  category?:string;
};