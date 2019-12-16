
## Pizza Palace

This repository contains code for a basic pizza ordering website .The current version is 2.0.0 beta
By Ibrahim M.
Description
The website offers the user the free will to make their preffered pizza using predefined ingredients. A user simply choosesthe size of the pizza, the crust and topping(s) , and finally the quantity. Asummary of all ordered items is produced with total charges indicated. The user can choose for delivery by providing their location or not.

Behaviour Driven Development
Behavior Driven Development is a way of constructing both non-functional and functional requirements. These requirements are directly converted into code and boosts testing.

Feature
As a User I want to

Choose the size of pizza I want e.g Small, Medium, Large
Choose what kind of crust I would like the pizza to have e.g Crispy, Stuffed, Gluten-free
Choose the topping(s) I want on my pizza.
Place an order for my Pizza and see the total charge for it.
Have an option to order as many pizzas as I want.
Have an option to have the pizza delivered or not. If delivered I want to be alerted how much the delivery charge will be.
If I want my pizza to be delivered, I want to be prompted to enter where the delivery should be made and an alert saying '' your order will be delivered to your location"
See a checkout button that when clicked shows the total amount charged for the orders.
Given the following ingredients with thier respective prices.

Days and Gender
Size	Crust	Toppings
Small-300	New York-200	Onions-30
Pepperoni-60
Sausage-70
Mushrooms-40
Medium-400	Grilled-250	Onions-40
Pepperoni-60
Sausage-80
Mushrooms-60
Large-550	DeepFish-260	Onions-50
Pepperoni-80
Sausage-90
Mushrooms-80
SCENARIO: Select size,crust , topping(s) and quantity

GIVEN: I choose size medium, Grilled, topped with Onions and Mushrooms and 1 as quantity

WHEN: I hit the create button

THEN: The system should give me Ksh 750 as my subtotal and Ksh 1000 as my grand total

SCENARIO:Enter invalid quantity

GIVEN: I would like x pizza

WHEN: I hit the create button

THEN: The system should raise an error flag alerting me that the quantity is not a number hence invalid

Setup Instructions
Open terminal and type >>> git clone https://github.com/ibrahnerd7/pizza_hub.git to clone this project.You can also download it manually
After having a local copy navigate to me folder by >> cd pizza_hub
Open the folder in your favourite editor for atom >>atom . for visual studio code >> code .
To run the website in your browser >> browser-name index.html
Technologies Used
HTML5-Used the box model to provide some responsiveness
CSS3-Included state of the art styles and a blending color scheme. -Bootstrap4 -For mobile first web design
FontAwesome Icons
Google fonts- To blend normal fonts therefore creating seamless user experience
jQuery-For website interactions
Contact Information
Email -ibrahmaina7@gmail.com
Phone number- +254707851734
Contribution
In case of any issues drop it at https://github.com/ibrahnerd7/pizza_hub/issues
Ideas and Contributions are to be pushed by creating a pull request at https://github.com/ibrahnerd7/pizza_hub/pulls


































## MIT License
Copyright (c) [2019] [Margaret Ngethe]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.