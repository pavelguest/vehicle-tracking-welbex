import { Ref } from 'react';

import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

export enum VehicleCategories {
  cargo = 1,
  passenger = 2,
  specialTransport = 3,
}

export type TSelectVehicleCategoriesProps = {
  title: string;
  modalRef: Ref<BottomSheetModalMethods>;
  onPressButton: () => void;
};
