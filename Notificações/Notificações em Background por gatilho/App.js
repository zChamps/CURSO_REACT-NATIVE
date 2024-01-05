import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
// import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


// IMPORTANTE: o que configura as notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [notification, setNotification] = useState(false);
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const notificationListener = useRef();
  // const responseListener = useRef();

  // useEffect(() => {
                                                                                                                                                                                                          // registerForPushNotificationsAsync().then(token => {setExpoPushToken(token)});



    ////////////////////////Listener do recebimento da notificação e retorna os dados da notificação recebida, como titulo, corpo e dados
    // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //   setNotification(notification);
    //   console.log("notificationListener:", notification.request.content.data.data);
    // });




    ////////////////////////Listener da integração com a notificação
    // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log("Response Listener:",response);
    // });

                                                                                                                                                                                                      // return () => {
                                                                                                                                                                                                      //   Notifications.removeNotificationSubscription(notificationListener.current);
                                                                                                                                                                                                      //   Notifications.removeNotificationSubscription(responseListener.current);
                                                                                                                                                                                                      // };
  // }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      {/* <Text>Your expo push token: {expoPushToken}</Text> */}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}



// IMPORTANTE: O que irá de fato enviar a notificação na hora
async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "NOTIFICAÇAAAAAAo",
        body: 'Esse é o corpo da notificação',
        data: { data: 'goes here' },
      },
      trigger: null,
    });
}
































  //////////////////////////// Verificação sobre as permissões do app
// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }




  
//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     // Learn more about projectId:
//     // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
//     token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   return token;
// }