import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color}
      d="M16.347 21.097a9.31 9.31 0 0 1-2.175-.275c-2.458-.593-4.989-2.097-7.125-4.235-2.137-2.139-3.643-4.67-4.236-7.125-.624-2.583-.179-4.793 1.253-6.224l.408-.41a1.978 1.978 0 0 1 2.795 0l2.349 2.35a1.977 1.977 0 0 1 0 2.794L8.228 9.359c.666 1.167 1.57 2.335 2.64 3.405 1.069 1.069 2.238 1.974 3.405 2.64l1.386-1.388a1.977 1.977 0 0 1 2.795 0l2.349 2.348a1.976 1.976 0 0 1 0 2.794l-.41.409c-1.009 1.011-2.406 1.53-4.046 1.53ZM5.87 3.657a.562.562 0 0 0-.403.166l-.41.409c-1.071 1.072-1.384 2.812-.88 4.898.532 2.21 1.904 4.504 3.862 6.462 1.958 1.957 4.253 3.328 6.463 3.863 2.086.503 3.825.19 4.897-.882l.409-.409a.57.57 0 0 0 0-.805L17.46 15.01a.57.57 0 0 0-.806 0l-1.758 1.759a.703.703 0 0 1-.82.127c-1.442-.745-2.895-1.83-4.203-3.138-1.308-1.308-2.39-2.76-3.138-4.202a.703.703 0 0 1 .127-.82l1.76-1.758a.57.57 0 0 0 0-.806l-2.35-2.349a.566.566 0 0 0-.402-.167Z"
    />
    <Path
      fill={props.color}
      d="M17.098 12.644a.703.703 0 0 1-.703-.704 4.658 4.658 0 0 0-4.653-4.652.703.703 0 0 1 0-1.407 6.066 6.066 0 0 1 6.059 6.06.703.703 0 0 1-.703.703Z"
    />
    <Path
      fill={props.color}
      d="M20.07 12.644a.703.703 0 0 1-.704-.704c0-4.204-3.421-7.624-7.624-7.624a.703.703 0 0 1 0-1.406c4.98 0 9.03 4.05 9.03 9.03a.703.703 0 0 1-.702.704Z"
    />
  </Svg>
);
const PhoneIcon = memo(SvgComponent);
export default PhoneIcon;
