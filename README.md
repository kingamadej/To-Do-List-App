# To-Do-List App

Is a task management application that allows to browse a calendar, create and check off tasks, create notes, and link notes with tasks, which becomes the uniqe functionality in this app.

## App usage
The app is designed to use it as a web based application. It can be used on desktop and on mobile device since the app interface is responsive. 

## Functionality
- <b> Calendar Browsing</b> 
<br> Users can navigate through a calendar to organize their tasks based on specific dates. This feature helps to visualize the distribution of tasks over time and to manage deadlines efficiently.

- <b> Tasks Creation</b>
<br> Users can create various tasks and add them to specific dates on the calendar. This feature aids in breaking down large projects or goals into manageable tasks.

- <b> Tasks Edition</b>
<br> To edit a task, the user selects the task they want to modify, which opens a detail view. In this detail view, the user can for instatnce click or tap the task's title to rename it, effectively editing the task's details.

- <b> Tasks Checking Off</b>
<br> As tasks are completed, users can check them off, providing a sense of accomplishment and a clear view of the progress made towards the completion of the project or goal.

- <b> Notes Creation</b> 
<br> In addition to tasks, users can create notes. These could be reminders, additional details related to tasks, or stand-alone notes that don't necessarily correspond to a particular task.

- <b> Notes Edition</b>
<br> The user can easily edit note's details. It can be achevied by following the process similar to tasks edition which has been described above but only in 'Notes' section.  

- <b> SPECIAL FEATURE: Link Notes with Tasks (and vice versa)</b>
<br> A unique feature of this app is the ability to link notes with specific tasks. This allows for greater context when reviewing tasks, and aids in providing additional details that might be necessary for the completion of the task

- <b> Changing the Theme Color</b>
<br> The application provides the option to change the theme color. Users can access this feature in the settings menu to customize the app's appearance according to their preferences. The available color choices are green and blue.

## Stressless design
The To-Do List app has been thoughtfully designed to create a stress-free task management experience for its users. This documentation outlines the key features that contribute to a calming and intuitive user interface.
<br></br>

- <b>Task Reminders</b>
<br>The To-Do List app intentionally does not include task reminders. This design choice aims to reduce stress and avoid overwhelming users with constant notifications. Instead, the app encourages a more relaxed and flexible approach to task management.

- <b>Visual Representation of Tasks</b>
<br>The app utilizes a color-based visual representation to indicate the status of tasks. Uncompleted tasks are displayed in green or blue, depending on the main theme chosen by the user. This color scheme promotes a soothing and visually appealing experience while allowing users to quickly identify pending tasks.

- <b>Main Theme Selection</b> 
<br>The To-Do List app offers the option to choose between a green or blue main theme. Users can select their preferred theme in the settings menu. The chosen main theme influences the color representation of uncompleted tasks, providing a personalized touch to the app's aesthetics.

- <b>Completed Tasks</b> 
<br>To maintain a clutter-free interface and avoid unnecessary visual distractions, completed tasks are usually displayed in a neutral or faded color. This differentiation allows users to focus on their ongoing and upcoming tasks without being overwhelmed by past accomplishments.

## Documentation
[Official Vue 3 documentation](https://vuejs.org/guide/introduction.html)

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
- Paste all files from your clone to new App environment by replacing: <b> whole src folder </b> 
- Run ```npm run dev``` and follow your localhost link to preview and work on app

## Working on task
- In your task on github choose "create a branch" and setup the name of your branch with your name and surname. Make sure you have "checkout locally" option selected.
- In your local repository run ```git fetch origin ``` and ``` git checkout your-branch-name```
- Edit whatever files you need to accomplish your task.
- Then copy <b> modified /src folder </b> to your cloned previously local repository. 

## Commiting changes
- Run ``` git status ``` in your local repositorty to see modified and added files.
- Run ```git add file-name``` ex. ```git add src/components/HelpPage.vue``` You can add ONLY FILES WITH OUR APP, not files with your environment! So you can update index.html and files that are only in your /src folder!
- Run ``` git commit -m "Your commit short message"```
- Run ```git push origin your-branch```, ex. ```git push origin kingamadej-home```
- Then go to github repository and compare your changes to master branch. Select "Compare & Pull Request". Then select the branch you want to merge your changes to in the "base" section, and then the branch that contains your changes in the "compare" section. Usually "base" will be  master branch and "compere" will be the branch you worked on.
- Select "Create pull request" and then create name and description. 
- Wait for Code Owner review to check and merge your changes. Do NOT click "Merge without waiting for requirements to be met (bypass branch protections)", otherwise we can lose our whole project.



