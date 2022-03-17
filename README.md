# Ledger Case Study

Hello! My name is Will Sparrow and these instructions will show you how to run my application. Please message me if you have any questions. Enjoy!

## Prerequisites
* Python
  * I am assuming those viewing this have Python 3 installed. If you do not have Python 3 (execute `python --version` in a terminal/command prompt to check), then download [Python](https://www.python.org/downloads/) from the website.
* Node
  * Ensure that you have the most up to date version of Node installed (execute `node --version` in a terminal/command prompt to check). Download [Node](https://nodejs.org/en/) website. from the website if you do not have it installed.
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

### Start Backend
Here I may be a little bit more descriptive. Split a terminal window into two within VS code.

On the lefthand terminal, change directories into the root directory _backend_. Execute 

`python manage.py runserver`. Navigate to http://127.0.0.1:8000/ to see an aggregated view of the total claims found in the auto_policies.csv. Navigate to
http://127.0.0.1:8000/api/policies/ to see the endpoint for all of the auto policies. It is paginated and is returning only 100 records at a time for performance reasons.

Right now, you can only filter by marital status. Add ?search=Married or ?search=Single after api/policies to filter data.

### Start Frontend
Ensure that you have the front end running by leaving that first split terminal window untouched.

Change directories into the frontend root directory.

Run npm install to download the necessary dependinces specified in packages.json. This should give you everything you need to run front end.

In that second terminal window, ensure you are still in that second terminal window and execute npm start.

Now you should see the front end applicaiton and should be able to click across the different views to see the different funtionality. 

Enjoy!


