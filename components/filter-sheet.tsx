import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import { Text, View } from 'react-native';



export const FilterSheet = () => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const onOpen = useCallback(() => {
    ref.current?.expand();
  }, []);

  

  return (
    <View>
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <Text>Hello</Text>
      </BottomSheet>
    </View>
  );
};
