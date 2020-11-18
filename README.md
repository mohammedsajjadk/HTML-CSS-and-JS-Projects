# Production
https://mo-videoplayer.netlify.app/

# Project Intro
We have build our own customized version of video player
Simple trick is, video player will be behind and all the icons, and other elements will be having controls through JS.
Example: Play/Pause button is just an icon, but we are adding a click event. So, when it is clicked, we play/pause the video.

# Video Explanation
> If you want to understand the installation, about the project structure etc. then watch this [Video](https://www.youtube.com/watch?v=r0ezcR_Qx84), else proceed below.

# Cloning & Creating Your Own Project

## METHOD 1

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

## METHOD 2

If you want to create a new repository and then work on it, then go to https://github.com/mohammedsajjadk and follow below the below steps

1. Click "+" button --> New Repository --> Enter repository name --> click "Create Repository"
2. Now go to any folder in your PC --> Open Command Prompt --> Clone the project from github. Use
   ```
   git clone https://github.com/mohammedsajjadk/HTML-CSS-and-JS-Projects.git
      (YES, You need to clone this repo only!)
   ```
3. Rename the folder (later, if required), then go inside that folder and open CMD again
4. Enter the below command:
   ```
   git checkout Boilerplate-For-HTML-CSS-JS
      (YES, You need to clone this branch only!)
   ```
5. Delete .git folder
6. Open CMD again
   ```
   git init
   git remote add origin <Your New Repo .git link>
   ```
7. Run the below git commands
   ```
   a) (Optional) To switch the branch, use below command:
        git switch -c <Branch name>
           Example: git switch -c Todo-App
   b) git add .
   c) git commit -m "Initial commit"
   d) git push -f origin <Branch Name>
        Example: git push -f origin master
   ```

# NPM Commands

1.  Open the project in VS Code
2.  Run the below command to download a package and it's dependencies

```
npm install
```

2. Open command prompt (in the project root directory) and enter the below command & hit ENTER
   ```
   npm run start
   ```
   You will get a message in the terminal like 'Project is running at http://localhost:8080/', go to that address in your browser

# Project Structure Explanation

- **dist** folder - This is the folder you will release to the production. More explanation to follow.
- **src** folder - In this folder only you will have all your development related activities code
- **.babelrc** file - Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones). Open this file and you will see "targets" where we would have mentioned the "last 5 versions" of all browsers and IE >=8.
- **.gitignore** file - folders or files which we don't want to push to git. Example 'npm_modules'
- **package.json** file, **webpack.config.js** file

# webpack.config.js file

Webpack is a popular module bundling system built on top of Node. js. It can handle not only combination and minification of JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins.

- We will have many .js files, but our main js file is **_index.js_**. Inside index.js file we will import all our other .js files. We will convert the index.js file code to one single .js file (**bundle.js**) and that file will be injected into index.html.
- Our index.js, other .js files and main index.html will be inside "src" folder, but "bundle.js" and the final "index.html" (which will have script src="bundle.js") will be inside "dist" folder.
- html-webpack-plugin - You will notice 'html-webpack-plugin'. The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is the one which creates an index.html inside 'dist' folder and injects script tag.

# package.json

> Run "**npm run start**" when you are going to develop.

> Run "**npm run production**" when you want to deploy your project into production.

Below I have explained the scripts used inside package.json:

- "watch:sass" - continously monitors and converts scss file to css.
- "dev-server" - continously monitors for any change in js file. Note the mode is 'development' and note the '--open'. 'development' is for development purpose meaning it will create bundle.js in memory for us inside src folder, so we can't see that. 'open' means it will monitor continously.
- "start" - We want to monitor for any change in scss or js file. So we use this.
- "build" - This is for Production. When you run this, it will create bundle.js inside src folder which you can see.
- "production": Run this command if you want to deploy into production.

All other scripts are for converting scss to css and optimizing etc.

# SRC folder

3 things will be here:

- js folder
- sass folder
- index.html file

## index.html file

**NOTE: You will wonder that we have 2 index.html in our project. One which is inside src folder is for development and one inside dist is the final one which will be released to production. Don't touch the index.html which is inside dist folder**

- This is the index.html where you will write your HTML. **Don't write any HTML inside index.html which is inside 'src' folder.** **No need to mention script tag (which mentions the path of js file) inside this HTML file.** Webpack config will take care of injecting that inside final inside.html inside 'src' folder.
- **Don't change style.css path.** That is correct. End of the day, this index.html will be inside 'src' folder and inside that folder you will see 'css/style.css'.
- **All the images you will put inside 'src' folder.** When referencing the path of image or anything, just remember that your final index.html is inside 'src' folder, so give path from there.

## JS folder

We are following MVC model here.

You will probably find folders like 'models', 'views' etc. There will be a file called 'index.js'.

- **index.js**

  - This is the controller which is like the main js file. This file will have all the code related to controller and views.

- **Models folder**

  - You will create one js file for each functionality. Example: You have a search functionality, so create Search.js. You have Results functionality, so create Results.js. Then, you do as you wish. Meaning, you can create a class, constructor and functions in those js file. Then, export it.
  - Call this js files from models folder in index.js. Then you can create a new object of the classes and then call those functions.
  - > Tip: Store whatever you need as a new property in those classes.

- **Views folder**
  - You will create one js file for each view. Meaning, you need to display something for Search functionality, so you will create searchView.js.
  - The js files inside views will mostly have HTML's which you want to render or delete etc.
  - And In Index.js, you can import this file and call this when you want.

## SASS folder

- **Style.scss** - Main scss file which will have all the other scss files imported

Next whatever you write inside the below mentioned folders will be a partial. Meaning the file name will start with an underscore. Because we don't want that to be converted to css. Only style.scss will be converted to css.

- Abstracts folder:

  - Has scss files like functions.scss, mixins.scss and variables.scss

- Base folder:

  - Has scss files like animations.scss, base.scss, typography.scss and utilities.scss

- Components folder:

  - All your components scss files will be here. Example: button.scss, card.scss, form.scss, popup.scss

- Layout folder

  - All layout scss files like footer.scss, header.scss, navigation.scss

- Pages Folder
  - All pages scss files like home.scss

# DIST folder

- Except the 'img' folder where you will put the images you want or delete, you won't touch any other file or folder.
- This is the folder which you will release to production.
- Before deploying to production, run '**npm run production**'

## CSS, JS folder

All the compiled css and JS files will be here

## index.html file

This is the final index.html which will just have an extra script tag of bundle.js.

