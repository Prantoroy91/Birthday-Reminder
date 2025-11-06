Birthday Reminder Project

🧾 Project Overview:
The Birthday Reminder is a full-stack web application that helps you save, view, and check birthdays easily.
It allows users to add birthday details through a form, view all stored birthdays, and check if anyone has a birthday today — complete with a fun celebration animation when a match is found! 

This project demonstrates the use of frontend and backend integration using HTML, CSS, JavaScript, Node.js, and Express.js.

💻 Technologies Used:
Layer					Technology								Purpose
Frontend					HTML5						Structure and layout of the web page
							CSS3						Styling, layout design, and animations
						JavaScript (index.js)			Handles button clicks, form actions, and communication with the backend
						
Backend						Node.js						Runs the server and executes backend logic
							Express.js					Web framework to create routes and handle requests/responses
							
Data Storage			JSON File / Array				Stores birthday details persistently

Development Tool			Nodemon						Automatically restarts the server during development

Project Structure:

BirthdayReminder
/
│
├── server.js               
├── package.json             
├── birthdays.json           
│
└── public/                  
   		├── birthday.html        
    	├── birthday.css         
    	└── index.js    


How It Works:
🧩 1. Add Birthday:
When you click “Add Birthday”, a form appears asking for:
	Name
	Date of Birth
After submission, it sends the data to the backend using a POST request (/add).
The backend stores it in birthdays.json.


📋 2. View All Birthdays:
Clicking “View All Birthdays” sends a GET request (/getAll).
The backend reads all stored birthdays and sends them back.
The frontend displays them neatly on the page.


🎉 3. Check Today’s Birthday:
Clicking “Check Today’s Birthday” sends a GET request (/today).
If anyone’s birthday matches the current date, it:
Displays their name 
Triggers a confetti or sky-shot animation 


🧰 Setup Instructions:
1. Install Node.js
Make sure Node.js is installed. Check using:
	node -v
	npm -v


3. Initialize Project:
Open a terminal in your project folder and run:
	npm init -y
	npm install express
	npm install nodemon --save-dev


3. Folder Setup:
Make sure your folder structure matches this:
	BirthdayReminder

	/
	│
	├── server.js
	├── package.json
	└── public/
   			├── birthday.html
   			├── birthday.css
    		└── index.js

5. Run the Server:
In the terminal:
	npx nodemon server.js

Then open your browser and visit:
👉 http://localhost:3000/birthday.html
