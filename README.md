# To-Do-List App

Is a task management application that allows to browse a calendar, create and check off tasks, create notes, and link notes with tasks, which becomes the uniqe functionality in our app.

## Environment Setup
- You need Windows 10 or newer
- Make sure you have https://nodejs.org and ```npm``` installed
- Visual Studio Code is recommended editor 
- Initialize project ```npm init vite ```
- Setup project name as App (for instance)
- Choose framework as Vue
- Choose variant as JavaScript
- Go to your project directory ```cd your_project_name```
- Run ```npm install```
- Run ```npm install vuex```
- Run ``` npm install vue-router ```
- Clone github repository with To-Do-List-App by ```git clone https://github.com/kingamadej/To-Do-List-App.git```
- Paste all files from your clone to new App environment by replacing: <b> whole src folder and index.html file </b> 
- Run ```npm run dev``` and follow your localhost link to preview and work on app

## Working on task
- In your task on github choose "create a branch" and setup the name of your branch with your name and surname. Make sure you have "checkout locally" option selected.
- In your local repository run ```git fetch origin ``` and ``` git checkout your-branch-name```
- Edit whatever files you need to accomplish your task.

## Commiting changes
- Run ``` git status ``` to see modified and added files.
- Run ```git add file-name``` ex. ```git add src/components/HelpPage.vue``` You can add ONLY FILES WITH OUR APP, not files with your environment! So you can update index.html and files that are only in your /src folder!
- Run ``` git commit -m "Your commit short message"```
- Run ```git push origin your-branch```, ex. ```git push origin kingamadej-home```
- Then go to github repository and compare your changes to master branch. Select "Compare & Pull Request". Then select the branch you want to merge your changes to in the "base" section, and then the branch that contains your changes in the "compare" section. Usually "base" will be  master branch and "compere" will be the branch you worked on.
- Select "Create pull request" and then create name and description. 
- Wait for Code Owner review to check and merge your changes. Do NOT click "Merge without waiting for requirements to be met (bypass branch protections)", otherwise we can lose our whole project.


