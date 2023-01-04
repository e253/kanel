// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from 'zod';

/** Represents the view public.sales_by_film_category */
export default interface SalesByFilmCategory {
  /** Database type: pg_catalog.varchar */
  category: string;

  /** Database type: pg_catalog.numeric */
  total_sales: string;
}

/** Zod schema for sales_by_film_category */
export const salesByFilmCategory = z.object({
  category: z.string(),
  total_sales: z.string(),
});
