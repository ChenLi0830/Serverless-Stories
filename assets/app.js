$(document).ready(function(){
   // Any time a page is loaded we'll check to see what the authentication status is
   updateAuthenticationStatus();
   // Since we're not using a framework and our example is very basic, we have a helper
   // function that checks to see if we're on the super secret admin page
   loadAdmin();
 });

 function logout(){
  // Here we'll implement the logic to log a user out
 };

 function updateAuthenticationStatus(){
  // Our implementation of updating user authenticate state will go here
 }

 function loadAdmin(){
  // In the loadAdmin() function we'll check to see if we're on the admin page
  // Additionally, if we are on the admin page and are authenticated we'll call
  // the subscribers Lambda function to retrieve the list of users that have
  // signed up for our newsletter
 }

 $('#newsletter').submit(function(e){
  // This method will call our subscribe Lambda function and try to register
  // the email if it's unique
 })

 $('#signin').submit(function(e){
  // This method will log the user in using the AWS Cognito service
 })