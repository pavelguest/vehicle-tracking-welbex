import { Linking, Alert } from 'react-native';

const DEFAULT_MESSAGE =
  'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';

export const openWhatsApp = (phone: string) => {
  const whatsapp = `whatsapp://send?text=${DEFAULT_MESSAGE}&phone=${phone}`;

  Linking.canOpenURL(whatsapp)
    .then(supported => {
      if (!supported) {
        Alert.alert('WhatsApp not installed on device');
      } else {
        return Linking.openURL(whatsapp);
      }
    })
    .catch(err => console.log(err));
};
