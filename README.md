Two components have already been created for you, Home & About.

Look for the Router.js file under the src folder. This file is basically empty besides a couple imports. You need to create a functional component called Router in this file. You will return a Routes wrapper container that wraps two individual Route's. The two Route's should be the following:

"/" -> Home
"/about" -> About
Now we are going to take this Router and import it into App.js. Place it right underneath the Navigation component. You will need to import BrowserRouter from react-router-dom and use it to wrap both the Navigation and the Router components.

If you were successful you should see a homepage with a lot of different car details on it. You should also be able to add "/about" to the end of the url to see the about page. Typing this paths in the browser will soon get tiring so let's add them to the Navigation component. There are two commented areas for you to add links. Create one Link to the Home page and one to the About page. If you forget how to do that, reference the documentation here.

Next we want to fill out the Car component in src/Car.js but first we will need to be able to see it and Link to it. Inside of Router.js import the "Car" component and create a route for it. The path should be able to accept an id for the specific car as well. For example: "/car/:id".

Once that is complete, go to the Home component and look for the comment regarding the "a tag". Change that to a Link component and have the "to" property be: /car/${car.id}. You can leave the text, "See More Details" the same. Notice how you are routed to the "Car" component when you click on the Link. Try clicking on different cars, do you notice that the id is different each time?

Now that we can navigate to the Car component we want to fill out this page so that it looks nice and provides details about the specific car we passed in. To get the specific car we need to access the "id" property from the path. We can do that by accessing it using a hook from "react-router-dom". The useParams hook return an object of key/value pairs of the dynamic params from the current URL that were matched by the Route's path. At the top level, make sure to import { useParams } from "react-router-dom". Once we have that hook being imported, inside of our component, but before the return, we want to instantiate useParams() and destructure the object it returns. It will look like this: const {id} = useParams(). Now that we have destructured the object that useParams returns, we now have access to the key/value by using the id variable. Check out the docs for useParams here.

Note that if you would have called the parameter (id) something different in the router, say "carId", then that would change how we access it here as well const {carId} = useParams(). Also, if you feel more comfortable, instead of destructuring, we can simply access our dynamic values with this same line: const carId = useParams().carId.

Now that we have the specific id we need to find the car in the list that matches that id. You should know how to find items in an array by now so go ahead and find the specific car. Hint: the cars are in the "cars" variable at the top of the file.

Create the Car component so that it looks like the image below. To do that, import the MUI components as specified at the top of the file. You will use the MUI documentation to figure out how to style this page.