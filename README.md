As start and to save time for this test, i have used code bootstrapping tool called react-boilerplate which help save building the project base time. This tool set upby default a Redux store and attach the reducer to it.

visit https://www.reactboilerplate.com/ to know more on how run more commands on the App

To fetch the Apis, axios or fetch will do same effecient work as i am building a small app. However, when building bigger apps, it is better to use axios and will be using it within the test as well.

ASSEMPTIONS:


DEVELOPMENT PROCESS (spent 1h45min):
1. build connected component that will hanlde th the api call and messages related and get the response as well.
2. build form where validation, submit, error check occur and list FormInput along with submit button
3. build FormInput as much reasable as possible for the current details available
4. make sure the Submit button is active only when all fields are availble, onclik triggers submition of data and clearing the form if no errors, otherwise display the errors and don't reset the form
5. back to the connected component and hanlde the api call using Redux Saga and fix the CORS policy error 
6. hanlde loading and error status and display the success message with the user Id using react-toastify
7. handle few cases with unit text within FormInput and QuickFormEntry components

To run the project:
1. clone the project into your machine
2. npm install
3. npm start

In Real time:
1. add more tests and cover all components and code
2. with more requirements, clean up code and structure it in way it can be reused
3. add more validations depending on user stories