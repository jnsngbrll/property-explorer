import { properties } from '@/constants/properties';

export const getProperty = (id: string | string[]) => {
  return properties.find((property) => property.id === id);
};
