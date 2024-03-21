Short discription about my program.

It is the program that helps customers order the tickets. I created two files "index.html" and "java.js" for the html and
javascrit file with respect. When the clients fill in their information and leave some fields blank, the program then
does not run. The program also stops running if the clients enter the wrong phone number and email address. I used
regexp to validate phone number and email address.

When all information is correct and the "Buy Ticket" button is clicked, the program runs "show()" functions which
put all client information in "person" object and pushes the object to the array called "tickets". After
the object is pushed, it shows all information to the client.

When the client clicks the "delete all tickets" button, the "delete_tickets()" function runs and removes all
objects present inside the matrix. So all the information stored inside the array is deleted.

For the Oblig 2, I created the server which stores the information given by the customer through the client site. When the customer
clicks the "Buy Ticket" button then the client site sends the infromation about the customer through get method as an object which is
stored in the server site as an Array. It also gives information to the client when through the client-server communication 
(get and post method). 

I also designed the client site with the help of bootstrap using different div's. It is also known as the resposive design because it
works with all the different kind of devicies such as Mobile, Tablet, Laptop and Computer.

When the client clicks the "delete all tickets" then the get method emptys the whole Array in the server sites. Then all the stored
information about the registered customer is deleted.


