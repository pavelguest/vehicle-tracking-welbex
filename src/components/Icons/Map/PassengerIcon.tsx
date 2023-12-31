import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill={props.color}
      d="M6.249 22.815a2.906 2.906 0 0 1-2.902-2.896 2.904 2.904 0 1 1 5.81 0 2.908 2.908 0 0 1-2.908 2.896Zm0-4.467c-.856 0-1.56.704-1.56 1.562 0 .857.704 1.56 1.56 1.56.861 0 1.564-.703 1.564-1.56 0-.858-.703-1.562-1.564-1.562Zm19.556 4.467a2.905 2.905 0 0 1-2.905-2.896 2.903 2.903 0 1 1 5.805 0c0 1.591-1.3 2.896-2.9 2.896Zm0-4.467a1.57 1.57 0 0 0-1.568 1.562c0 .857.705 1.56 1.568 1.56.86 0 1.562-.703 1.562-1.56 0-.858-.702-1.562-1.563-1.562Zm5.633-.609c0-2.82-1.757-3.155-1.757-3.155-2.585-.367-7.039-.555-7.039-.555-.409-.71-2.296-4.844-3.396-4.844H9.6c-1.396 0-3.688 4.033-4.189 4.943 0 0-1.754.305-2.581.49-.46.107-1.73.13-1.73 3.684H0v1.608h2.677a3.573 3.573 0 1 1 7.147 0h12.403a3.573 3.573 0 1 1 7.148 0H32v-2.171h-.563Zm-17.12-3.983H8.752c.753-2.346 2.148-4.02 2.736-4.02h2.832v4.02Zm1.038 0v-4.02h3.61c.747 0 2.372 3.403 2.83 4.274l-6.44-.254Z"
    />
  </Svg>
);
const PassengerIcon = memo(SvgComponent);
export default PassengerIcon;
