![App Logo](./my-app/src/icons/Umazing.svg)

# Amuesment Park Database 🎡🎠🎪

An Amuesment Park Database Webapplication made using react.

# Links
Hosted Site: <http://ec2-18-119-116-174.us-east-2.compute.amazonaws.com/>  
Link to files and readme: <https://google.com/>  

## Installation/Startup guide 🔨

cd into the my-app to access everything

Node version requirement 
```
version >= 16.16
```

1. Install packages
```
`npm install`
```
Installs all required modules/dependencies. (If the app is throwing missing errors, check this first)

### Scripts 📜
`npm start`

This will let you run the site locally in development mode.
Ideal for testing and non-production runs.

`npm run dev`

If you are trying run the app on your machine you have to swtich the base url found in the app.js folder to http://localhost:8080 this allows you to run the project on your local machine

# Starting the Server locally 
Once you have the .env set up, you can continue to this step.  

Firstly you're going to have to do `npm i` which will install the dependencies for the project.  

We have our backend and front end working in one repo, so once you have entered the `/my-app` folder inside your Command Prompt or VSCode terminal, you will do the command `npm start`. This will start the frontend of the server. To start the backend you will need to open another Command Prompt or VSCode within the same `/my-app` folder and now run `npm run dev` which will start up the backend server.

## Installing the files
The project team14project.zip folder is in the link above and contains the database sql dump (team14dump.sql). If you are using mysql workbench you can either import the sql file or copy the code into the editor in the workbench and execute.

## .env
To host this locally you are going to have to store the a `.env` into your ./src/Server folder. The contents of the `.env` should contain the following
```
HOST = "<HOST_URL>" (Default = "localhost")
PORT = "<PORT>" (Default = "3306")
USER = "<USER>" (Default = "admin")
PASSWORD = "<PASSWORD>" (Default = "password")
DATABASE = "<DATABASE NAME>" (Default = "master")
SECRETKEY ="<SECRET KEY>" (Default = "secretKey")
```

# Data Application Features
1. Insert/Modified/Delete
    - Inserts:  
        - Register (Data)  
                - First Name, Middle Initial (Optional), Last Name, Phone Number, Email, Password
        - Ride (Data)  
                - Zone Id, Name, Description, Image, Category, Type, Height Requirement, Capacity, Hour Capacity
        - Concession (Data)   
                - Zone Id, Name, Description, Image, Food Type
        - Giftshop (Data)  
                -  Zone Id, Name, Image
        - Incident Report (Data)  
                - Description, Date of Incident
    - Edits/Modified:   
        - Ride (Data)  
            - Name, Type, Zone Id, Ride Capacity, Hour Capacity, Image, Last Maintenance  
        - Concession (Data)  
            - Name, Zone Id, Food Type, Image
        - Giftshop (Data)  
            - Name, Zone Id, Image
        - Maintenance
            - Maintenance Complete - Insert job code to set current date as of complete.
        - Employee Information
            - Address, Phone Number
    - Delete/Remove:  
        - Ride
            - Change perm_closed column to True; (Does not delete from Database)
        - Concession
            - Change perm_closed column to True; (Does not delete from Database)
        - Giftshop
            - Change perm_closed column to True; (Does not delete from Database)
            
2. Types of Roles  
    <table>
        <thead>
            <tr>
                <td>Username</td>
                <td>Password</td>
                <td>Type</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>john.cox1@gmail.com</td>
                <td>password1</td>
                <td>admin</td>
            </tr>
            <tr>
                <td>thai.jaden@gmail.com/td>
                <td>password2</td>
                <td>manager</td>
            </tr>
            <tr>
                <td>josh.rodriguez99@yahoo.com</td>
                <td>password3</td>
                <td>maintenance</td>
            </tr>
            <tr>
                <td>devin01@hotmail.com</td>
                <td>password4</td>
                <td>janitor</td>
            </tr>
            <tr>
                <td>miguel.s@gmail.com</td>
                <td>password5</td>
                <td>customer</td>
            </tr>
        </tbody>
    </table>
3. Triggers and Semantic constraints  
    1. When a person buys a ticket and there is not more space for that specific time and date. An error will occur and a message on the front end will then show the user which ticket recieved the error.
    2. When a person buys a ticket and there a ride capacity limit for the amount of hours it can be open, it will send an error towards the user which will show up on the front end to show which ticket hit the hour capacity limit for the ride. This will also schedule a maintenance 3 days in advance.

4. Types of queries/reports availiable
    - Tickets Report - Displays Ride Name, Ride Zone, Ticket Price, Date Recorded. This report is used by the Admin & Manager. The report is dynamic based on the user's choice of wanting to look for the Tickets. The tables it gets data from is Ride & Tickets table.

    - Maintenance Report - Displays Job Code, Zone, Ride, Employee Name, Scheduled Date, Email Contact, Date completed. This report is used by the Admin & Manager. This report is dynamic based on the user's choice of wanting to look for the maintance. It will also show maintenance jobs that have yet to be assigned. The tables it gets data from is Job, Ride, Person, & Employee.

    - Employee Report -  Displays Name, Job Name, Location, Email Contact, Phone Number. This report is used by the Admins & Managers. This report is dynamic based on the user's choice of wanting to look for the Employees. The tables it gets data from is Person & Employee tables.

## Technologies 📡

#### Front-end
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

#### Database
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

#### Hosting

![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white) Host the backend

Deployed the website through AWS
