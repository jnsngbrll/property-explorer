import React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.ReactNode;
  columns: number;
  spacing?: number;
  className?: string;
};

export const Grid = ({ children, columns, spacing = 0, className }: Props) => {
  const itemWidth = 100 / columns;

  return (
    <View
      style={{ flexDirection: 'row', flexWrap: 'wrap', margin: -spacing / 2 }}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <View
          key={index}
          style={{
            width: `${itemWidth}%`,
            padding: spacing / 2,
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};
