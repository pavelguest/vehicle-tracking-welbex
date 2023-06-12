import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill={props.color}
      d="M0 20.429h6.282a3.31 3.31 0 0 0-.67 1.996H2.519L0 21.787V20.43Zm32-3.558v5.554h-2.667c0-.079-.01-.154-.017-.233A3.326 3.326 0 0 0 26 19.096a3.333 3.333 0 0 0-3.335 3.329H12.277a3.29 3.29 0 0 0-.672-1.996h9.933V8.869h5.57v1.334l1.778 5.333L32 16.871Zm-4.448-1.334-1.33-4H23.11v4h4.442Zm-16.164 6.888a2.444 2.444 0 0 1-2.44 2.446 2.447 2.447 0 0 1-2.446-2.446 2.443 2.443 0 0 1 4.885 0Zm-1.11 0a1.336 1.336 0 0 0-2.671 0c0 .742.6 1.333 1.34 1.333a1.33 1.33 0 0 0 1.331-1.333Zm18.166 0a2.444 2.444 0 1 1-4.891.003 2.444 2.444 0 0 1 4.89-.003Zm-1.11 0c0-.733-.598-1.334-1.334-1.334-.744 0-1.332.6-1.332 1.334 0 .742.589 1.333 1.332 1.333a1.33 1.33 0 0 0 1.334-1.333ZM20.392 7.129H0v12.533h20.392V7.13Z"
    />
  </Svg>
);
const CargoIcon = memo(SvgComponent);
export default CargoIcon;