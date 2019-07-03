Mood Calendar App

![Calendar Image](https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150_960_720.png)

Mood Calendar App is an application for settig up your daily mood status. It was done with HTML, SCSS, Javascript and React.

The proyect structure is:

├── .git

├── docs

├── node_modules

│   ├── react

│   └── react-dom

├── public

│   └── index.html

└── src

    ├── components
    
    │   ├── Form
    
            └── Form.js
		
            └── Form.scss
		
    │   └── Home
    
            └── Home.js
		
            └── Home.scss
		
    ├── App.js
    
    ├── App.scss
    
    ├── index.js
    
    ├── index.scss
    
├── .gitignore

├── package-lock.json

├── package.json

└── README.md
    

The project uses React Router, which helps to change between the main page "Home", which has a calendar list with your daily mood status and a button to go to the edit part "Form". In the "Form" page it is possible to add a daily mood status, which will apppear in the main page. It is also possible to add a comment only in case of a happy day. All the information: date, mood and comment are stored in the local storage.

Enjoy!
                        
                 
