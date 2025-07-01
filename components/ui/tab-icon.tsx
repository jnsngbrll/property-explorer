import Ionicons from '@expo/vector-icons/Ionicons';

type IoniconName = keyof typeof Ionicons.glyphMap;

type Props = {
  name: IoniconName;
  size?: number;
  color: string;
  focuses: boolean;
};

export const TabIcon = ({ name, size = 25, color, focuses }: Props) => {
  return <Ionicons name={name} size={size} color={color} focuses={focuses} />;
};
