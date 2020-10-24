# Cloning & Creating Your Own Project

If you want to create a new branch inside https://github.com/mohammedsajjadk/HTML-CSS-and-JS-Projects/tree/Boilerplate-For-HTML-CSS-JS and continue then follow below steps:

1. Go to https://github.com/mohammedsajjadk/HTML-CSS-and-JS-Projects/tree/Boilerplate-For-HTML-CSS-JS
2. Click the dropdown
3. In the text box, enter your new branch name
4. You will see the following: **Create branch: YourBranchName from 'Boilerplate-For-HTML-CSS-JS'**. Click it and your branch is created.
5. Now go to any folder in your PC --> Open Command Prompt --> Clone the project from github. Use
   ```
   git clone https://github.com/mohammedsajjadk/HTML-CSS-and-JS-Projects.git
   ```
6. Rename the folder (later, if required), then go inside that folder and open CMD again
7. Enter the below command:
   ```
   git checkout <Your New Branch Name>
      Example: git checkout YourBranchName
   ```
# BIG NOTE
This is a project under development. 
There is no live update. You need to refresh the page to see the changes.

# How to run
The project structure for now is a mess, still you can run the following command in TWO TERMINALS/CMD:
```
npm run watch:sass-2
Go to src/js and run ===> nodemon app.js
```
Now go to http://localhost:3000 and submit the form

# Project Structure
## app.js
- This will be inside src/js
- You need to mention index.html, css, js, engine paths here
- Responsible to make MYSQL connection, insert to table and end the connection

## Writing CSS
- You need to write it in SASS format. 
- Go to src/sass and start writing inside any folder

## Writing JS
- Write inside src/js. 
- index.js you see there is the file where you will import all other js files

## views.pug
- If you notice inside app.js, you will see "app.set('view engine', 'pug')"
- And in the same file, you will see 
   ```
   res.render('index', { title: 'Data Saved!!!', message: 'Data save success!'})
   ```
   This views.pug creates an html like structure during runtime. Example: Once you have submitted a form, you need some html to be displayed to user, then you can use this.


