// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

var names = ["Fahad","Faiq","Asif","Hammad","Huzaifa"];
for (var nameOfFriend of names){
    console.log(`Hi ${nameOfFriend}!, hopefully you will pass your exams with high grades`);
}