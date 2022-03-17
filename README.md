# Ledger Case Study

Hello! My name is Will Sparrow and these instructions will show you how to run my application. Please message me if you have any questions.

## Prerequisites
* Python
  * I am assuming those viewing this have Python 3 installed. If you do not have Python 3 (execute `python --version` in a terminal/command prompt to check), then download [Python](https://www.python.org/downloads/) from the website.
* Node
  * Ensure that you have the most up to date version of Node installed (execute `node --version` in a terminal/command prompt to check). Download [Node](https://nodejs.org/en/) from the website if you do not have it installed.
* Terminal/Command Prompt
  * We will be navigating in and around folders on our machines which requires some basic knowledge of navigating a terminal/command prompt. See these helpful guides for [Windows](https://www.digitalcitizen.life/command-prompt-how-use-basic-commands/) or [Mac/Linux](https://www.taniarascia.com/how-to-use-the-command-line-for-apple-macos-and-linux/) users.

### Clone Repo
In the top right corner above this README, click the 'Code' dropdown highlighted in green and copy the web URL (beginning with HTTPS). Open up a terminal/command prompt on your computer or within your favorite editor/IDE (e.g., Visual Studio Code) and navigate to the folder where you would like to place this project. Execute `git clone pasted_web_url` to clone the repository to your local machine.

### Create Virutal Environment
We will also look to create a virtual environment so that we can manage our dependencies responsibly. Navigate to or create any folder you please within the terminal/command prompt and create a virtual environment by executing

`python -m venv name_of_env`

Then activate the virtual environment by executing

`source path_to_env_name/bin/activate`

Finally, to grab the dependencies associated with this project, execute

`pip install -r path_to_requirements.txt`.

If you run into an error, it is most likely because you have not included the correct path to _requirements.txt_. Ensure that you double check the correct file path. To check that the necesssary packages/libraries have downloaded, execute `pip freeze` and you should see some listed (e.g., _django_, _pandas_, _etc._)

## Running the Application

_Recommended: For the backend/frontend, I would recommend opening up Visual Studio Code (or another editor) and splitting the Terminal/Command Prmopt into two separate panes for the following steps._

### Start Backend
Navigate to the root directory `backend` within the terminal/command prompt inside your editor. Execute the command `python manage.py runserver`. You will notice some things running in the terminal/command prompt window and once finished, you can navigate to the below urls to see the views we have created.

* `http://127.0.0.1:8000/api/policies/` - Endpoint displaying all of the auto policies from the csv. It is currently paginated and only returning 100 records at a time due to performance reasons.
* `http://127.0.0.1:8000/` - Aggregated view (sum) of the total claims found across all of the policies.
* `http://127.0.0.1:8000/api/policies/?search=[marital_status]` - Filters policies by marital status. For example, if you want to see all policies that belong to married people, then you can change the term at the end to `?search=Married`. Currently, this is the only field that can be filtered on.

Ensure that the backend is still running when you look to start the front end in the following step.

### Start Frontend
Navigate to the root directory `frontend` of the repository within a different terminal/command prompt inside your editor. To grab the necessary dependencies listed in the _packages.json_, execute

`npm install` 

After that command has finished running, execute `npm start`. This will start the development server and will dispay the application at `http://localhost:3000/`. Navigate across the different views within the navigation bar to see the views/functionality associated with the application.  

Enjoy!


