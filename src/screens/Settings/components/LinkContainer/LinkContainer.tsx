import React, { memo } from 'react';

import { View } from 'react-native';

import { useStyles } from './LinkContainer.styles';
import { TLinkContainerTypes } from './LinkContainer.types';
import { Touchable } from '../../../../components/Touchable';
import ChevronRightIcon from '../../../../components/Icons/ChevronRightIcon';

const LinkContainer: React.FC<React.PropsWithChildren<TLinkContainerTypes>> = ({
  children,
  isSeparator = false,
  handleOnPress,
}) => {
  const styles = useStyles();

  return (
    <>
      <Touchable style={styles.linkContainer} onPress={handleOnPress}>
        {children}
        <ChevronRightIcon color={styles.iconColor.color} />
      </Touchable>
      {isSeparator && <View style={styles.separator} />}
    </>
  );
};

export default memo(LinkContainer);
