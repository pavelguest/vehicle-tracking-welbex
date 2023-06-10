import { Ref } from 'react';

import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

export type TInterfaceLangProps = {
  title: string;
  modalRef: Ref<BottomSheetModalMethods>;
  onPress: () => void;
};
