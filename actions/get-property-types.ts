import type { tProperty } from '@/types/property';

export const getPropertyTypes = (data: tProperty[]) => {
  return [...new Set(data.map((d) => d.type))];
};
