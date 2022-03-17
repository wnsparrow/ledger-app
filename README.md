# Ledger Case Study

Hello! My name is Will Sparrow and this README will give you more details on the "app" I have built, including additional context regarding the associated code, how to run the app, where to locate certain files, etc. Please reach out to me if you have any questions. Thank you.

## Running the application

### Prerequisites
#### Node
* Ensure that you have the most up to date version of Node installed. You can check if you have it installed by opening up a terminal window/command prompt and executing `node --version` or `node -v`. If you do not have it installed, download the most stable version from [Node's](https://nodejs.org/en/) website.

#### Clone Repo
* In the top right corner above this README, click the 'Code' dropdown highlighted in green and copy the web URL (beginning with HTTPS). Open up a terminal/command prompt on your computer or within your favorite editor/IDE (e.g., Visual Studio Code) and navigate to the folder where you would like to place this project. For example, if you would like to place the app within a projects folder, navigate using the cd commands like below and execute the commands to clone the repo.

![test-image](screenshots/file-structure-example.png =100x100)

#### Create Virutal Environment
* We will look to create a virtual environment so that we can manage our dependencies responsibly. Navigate to or create any folder you please within the terminal/command prompt and create a virtual environment by executing

`python -m venv name_of_env`

* Once that is done, activate the virtual environment by executing the command

`source path_to_env_name/bin/activate`

* Now that you have created and activated virtual environment, let's grab the dependencies needed for this project. All you need to do is execute the command `pip install -r path_to_requirements.txt/requirements.txt`. This should grab all the necesssary dependencies, you can check that there are some listed by executing `pip freeze`.

## Application

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


