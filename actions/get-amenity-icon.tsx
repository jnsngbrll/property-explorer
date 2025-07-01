import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type IoniconName = keyof typeof MaterialCommunityIcons.glyphMap;

const iconMap: Record<string, { name: IoniconName }> = {
  Garage: { name: 'garage' },
  'Swimming Pool': { name: 'pool' },
  Garden: { name: 'flower-outline' },
  Gym: { name: 'dumbbell' },
  Security: { name: 'shield-outline' },
  Parking: { name: 'parking' },
  'Private Elevator': { name: 'elevator-passenger-outline' },
  'Rooftop Pool': { name: 'pool' },
  'Sky Lounge': { name: 'city-variant-outline' },
  'Beach Access': { name: 'beach' },
  Balcony: { name: 'balcony' },
  Elevator: { name: 'elevator-passenger-outline' },
  Fireplace: { name: 'fireplace-off' },
  'Wide Lot': { name: 'map-marker-radius-outline' },
  'Fruit Trees': { name: 'fruit-cherries' },
  'Water Supply': { name: 'water-pump' },
  'High-Speed Elevator': { name: 'elevator-passenger-outline' },
  'Backup Generator': { name: 'power-plug' },
  'Storage Area': { name: 'warehouse' },
  'Wide Entrance': { name: 'door' },
  'Truck Bay': { name: 'truck-outline' },
  'Security Gate': { name: 'gate' },
  'Lake Access': { name: 'water-outline' },
  'Private Dock': { name: 'ferry' },
  'Rooftop Deck': { name: 'home-roof' },
  'Mountain Views': { name: 'terrain' },
  Deck: { name: 'home-roof' },
  'Boat Access': { name: 'ferry' },
  'Resort Potential': { name: 'home-group' },
  'Private Beach': { name: 'beach' },
  'Front Display Window': { name: 'storefront-outline' },
  'High Foot Traffic': { name: 'walk' },
};

export const getAminityIcon = (label: string) => {
  if (iconMap[label]) {
    const { name } = iconMap[label];
    return <MaterialCommunityIcons name={name} size={18} color="#808080" />;
  }

  return (
    <MaterialCommunityIcons
      name="alert-circle-outline"
      size={18}
      color="#808080"
    />
  );
};
