export interface Product{
  maker: string;
  model: string;
  id?: number;
  price: number;
  image?: string;
  description?: string;
  otherInfo?: any;
  type?: string;
  subtype?: string;
}

export interface ProductUpload{
  maker: string;
  model: string;
  id: number;
  price: number;
  image?: File;
  description: string;
  otherInfo?: any;
  type: string;
  subtype: string;
}
