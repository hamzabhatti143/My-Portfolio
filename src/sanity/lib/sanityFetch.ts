// src/sanity/lib/sanityFetch.ts
import { client } from './client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanityFetch = async <T>(query: string, params: Record<string, any> = {}): Promise<T> => {
  return await client.fetch<T>(query, params)
}
