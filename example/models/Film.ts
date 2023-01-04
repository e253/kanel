// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { year } from './Year';
import type Year from './Year';
import type { LanguageId } from './Language';
import { mpaaRating } from './MpaaRating';
import type MpaaRating from './MpaaRating';
import { z } from 'zod';

/** Identifier type for film */
export type FilmId = number & { __flavor?: 'FilmId' };

/** Represents the table public.film */
export default interface Film {
  /** Database type: pg_catalog.int4 */
  film_id: FilmId;

  /** Database type: pg_catalog.varchar */
  title: string;

  /** Database type: pg_catalog.text */
  description: string | null;

  /** Database type: public.year */
  release_year: Year | null;

  /** Database type: pg_catalog.int2 */
  language_id: LanguageId;

  /** Database type: pg_catalog.int2 */
  rental_duration: number;

  /** Database type: pg_catalog.numeric */
  rental_rate: string;

  /** Database type: pg_catalog.int2 */
  length: number | null;

  /** Database type: pg_catalog.numeric */
  replacement_cost: string;

  /** Database type: public.mpaa_rating */
  rating: MpaaRating | null;

  /** Database type: pg_catalog.timestamp */
  last_update: Date;

  /** Database type: pg_catalog.text[] */
  special_features: string[] | null;

  /** Database type: pg_catalog.tsvector */
  fulltext: Set<string>;
}

/** Represents the initializer for the table public.film */
export interface FilmInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('film_film_id_seq'::regclass)
   */
  film_id?: FilmId;

  /** Database type: pg_catalog.varchar */
  title: string;

  /** Database type: pg_catalog.text */
  description?: string | null;

  /** Database type: public.year */
  release_year?: Year | null;

  /** Database type: pg_catalog.int2 */
  language_id: LanguageId;

  /**
   * Database type: pg_catalog.int2
   * Default value: 3
   */
  rental_duration?: number;

  /**
   * Database type: pg_catalog.numeric
   * Default value: 4.99
   */
  rental_rate?: string;

  /** Database type: pg_catalog.int2 */
  length?: number | null;

  /**
   * Database type: pg_catalog.numeric
   * Default value: 19.99
   */
  replacement_cost?: string;

  /**
   * Database type: public.mpaa_rating
   * Default value: 'G'::mpaa_rating
   */
  rating?: MpaaRating | null;

  /**
   * Database type: pg_catalog.timestamp
   * Default value: now()
   */
  last_update?: Date;

  /** Database type: pg_catalog.text[] */
  special_features?: string[] | null;

  /** Database type: pg_catalog.tsvector */
  fulltext: Set<string>;
}

/** Represents the mutator for the table public.film */
export interface FilmMutator {
  /** Database type: pg_catalog.int4 */
  film_id?: FilmId;

  /** Database type: pg_catalog.varchar */
  title?: string;

  /** Database type: pg_catalog.text */
  description?: string | null;

  /** Database type: public.year */
  release_year?: Year | null;

  /** Database type: pg_catalog.int2 */
  language_id?: LanguageId;

  /** Database type: pg_catalog.int2 */
  rental_duration?: number;

  /** Database type: pg_catalog.numeric */
  rental_rate?: string;

  /** Database type: pg_catalog.int2 */
  length?: number | null;

  /** Database type: pg_catalog.numeric */
  replacement_cost?: string;

  /** Database type: public.mpaa_rating */
  rating?: MpaaRating | null;

  /** Database type: pg_catalog.timestamp */
  last_update?: Date;

  /** Database type: pg_catalog.text[] */
  special_features?: string[] | null;

  /** Database type: pg_catalog.tsvector */
  fulltext?: Set<string>;
}

/** Zod schema for film */
export const film = z.object({
  film_id: z.number(),
  title: z.string(),
  description: z.string(),
  release_year: year,
  language_id: z.number(),
  rental_duration: z.number(),
  rental_rate: z.string(),
  length: z.number(),
  replacement_cost: z.string(),
  rating: mpaaRating,
  last_update: z.date(),
  special_features: z.string(),
  fulltext: undefined,
});
