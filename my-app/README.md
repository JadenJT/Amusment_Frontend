# Team 14 Theme Park Database Management
# Links
Hosted Site: <http://ec2-18-119-116-174.us-east-2.compute.amazonaws.com/>  
Link to files and readme: <https://google.com/>  
# Installation  
## Installing the files
The project team14project.zip folder is in the link above and contains the database sql dump (team14dump.sql). If you are using mysql workbench you can either import the sql file or copy the code into the editor in the workbench and execute.

## .env
To host this locally you are going to have to store the a `.env` into your ./src/Server folder. The contents of the `.env` should contain the following
```
HOST = "<HOST_URL>" (Default = "localhost")
PORT = "<PORT>" (Default = "8000")
USER = "<USER>" (Default = "admin")
PASSWORD = "<PASSWORD>" (Default = "password")
DATABASE = "<DATABASE NAME>" (Default = "master")
SECRETKEY ="<SECRET KEY>" (Default = "secretKey")
```

# Starting the Server  
We have our backend and front end working in one repo, so once you have entered the `/my-app` folder inside your Command Prompt or VSCode terminal, you will do the command `npm start`. This will start the frontend of the server. To start the backend you will need to open another Command Prompt or VSCode within the same `/my-app` folder and now run `npm run dev` which will start up the backend server.

# Data Application Features
1. Insert/Modified/Delete
    - Inserts:  
        - Register  
            **Data:**  
                - First Name  
                - Middle Initial (Optional)  
                - Last Name  
                - Phone Number  
                - Email  
                - Password  
        - Insert Attraction
2. Types of Roles
3. Triggers and Semantic constraints
4. Types of queries/reports availiable





