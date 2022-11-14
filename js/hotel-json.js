/* Change the configuration */



const firebaseConfig = {
  apiKey: "AIzaSyBmAO-kCGYr-UXiVhXQcfQiHHdpZpZ6Yak",
  authDomain: "hotel-b43e3.firebaseapp.com",
  projectId: "hotel-b43e3",
  storageBucket: "hotel-b43e3.appspot.com",
  messagingSenderId: "123884470923",
  appId: "1:123884470923:web:8315686b30d92436ad4a8e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form

  var inputData = $('form').serializeArray();
  console.log(inputData)

  /* save the data to database */
  var doc = firebase.firestore().collection('hotel').add(

    { inputData[0][0] : inputData[0][1] }

  );

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

/*
firebase
  .firestore()
  .collection('hoteldata')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
*/
