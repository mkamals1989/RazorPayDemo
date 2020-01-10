/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  ToastAndroid,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="Pay with Razorpay"
          onPress={() => {
            var options = {
              description: 'Purchased product name or anything', // Optional
              image: 'https://i.imgur.com/3g7nmJC.png', // Optional - Use app logo url
              currency: 'INR', // Mandatory
              key: 'rzp_test_1DP5mmOlF5G5ag', // Mandatory- replace with live key id
              amount: '10000', // Mandatory INR amount has to be given in paise always
              name: 'Kamal', // Mandatory
              prefill: { // Optional
                email: 'kamal@test.com',
                contact: '9962029335',
                name: 'Amazon app'
              },
              theme: { color: '#F37254' } // Optional
            }
            RazorpayCheckout.open(options).then((data) => {
              // handle success
              console.log("Success response data: ", data);
              alert(`Success: ${data.razorpay_payment_id}`);
            }).catch((error) => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
          }}

        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "white",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});

export default App;
