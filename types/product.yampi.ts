interface YampiImageSize {
  url: string;
  width: number;
  height: number;
}

interface YampiImage {
  thumb: YampiImageSize;
}

interface YampiVariation {
  name: string;
  value: string;
  id: number;
  value_id: number;
}

interface YampiSku {
  price_sale: number;
  weight: number;
  variations: YampiVariation[];
}

export interface YampiProduct {
  id: number;
  name: string;
  images?: {
    data: YampiImage[];
  };
  skus?: {
    data: YampiSku[];
  };
}
