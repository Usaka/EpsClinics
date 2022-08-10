import { Alert } from 'react-native';

const AlertOk = (title, content, text) => {
  Alert.alert(
    title,
    content,
    [
      { text },
    ],
  );
};

const AlertCancel = () => {

};

export {
  AlertOk,
  AlertCancel,
};
