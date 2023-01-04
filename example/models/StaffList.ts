// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { StaffId } from './Staff';
import { z } from 'zod';

/** Represents the view public.staff_list */
export default interface StaffList {
  /** Database type: pg_catalog.int4 */
  id: StaffId;

  /** Database type: pg_catalog.text */
  name: string;

  /** Database type: pg_catalog.varchar */
  address: string;

  /** Database type: pg_catalog.varchar */
  'zip code': string;

  /** Database type: pg_catalog.varchar */
  phone: string;

  /** Database type: pg_catalog.varchar */
  city: string;

  /** Database type: pg_catalog.varchar */
  country: string;

  /** Database type: pg_catalog.int2 */
  sid: number;
}

/** Zod schema for staff_list */
export const staffList = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  'zip code': z.string(),
  phone: z.string(),
  city: z.string(),
  country: z.string(),
  sid: z.number(),
});
