# Outdoor Adventure Finder

## App for finding nearby mountain biking and backcountry skiing trails

Project by [@darnold001](https://github.com/darnold001)

Thanks for checking it out!

[Video of app rundown](https://www.youtube.com/embed/0mROs3x2Xoc)

## Installation
   1. Clone our repo into the directory where you want the app
   2. If you have bundler, run a ```bundle install``` in the BE/MTBTrip directory the app to innstall all necessary Ruby/Rails assets
  ![](FolderChange.gif)
   3. Once all necessary gems have been installed, please run ```rails s``` to start the backend file server
   ![](Rails s.gif)
   4. Please open another terminal window and navigate to the back up to the 'FE' folder of the current directory and enter it. Once inside of the directory, please      enter ```lite-server``` to start your frontend file server.
   ![](Lite-Server.gif)
   4. Have fun!
   ###### if you don't have lite-server, get it here! [Link to Lite-Server!](https://www.npmjs.com/package/lite-server)
   ###### if you don't have bundler or ruby, get it here! [Link to Bundler!](https://bundler.io/), [Link to Ruby!](https://www.ruby-lang.org/en/downloads/)

## Basic flow of app

### Welcome prompt
   * Prompts the user for their firstname, lastname, latitiude, logitude and search radius


### Your Saved Rides
   * This option will present the user with all of their saved trails/runs.
   * The user will now have the option to remove certain trails from their profile, as well as get more information on their currently saved trails.
  ![](SaveARide.gif)

### Add a Note
   * On a click, this presents the user with a window in which they can take notes about certain routes or their general plan, which is then saved to their profile      for future use.
![](Notes.gif)

### Model

  | User |------------<| Trails |   

### Assets used:
   * JavaScript
   * HTML
   * CSS
   * Ruby
   * jQuery
   * Rails
   * ActiveRecord
   * Sqlite3
   * JSON
   * Rake
   * Rest-Client
   * Lite-Server
   * Binding.pry

#### Credits
   * API : thanks to MTB Project and Powder Project for giving open access to their api
      * [link to Mountain BIke API!](https://www.mtbproject.com)
      * [link to Backcountry Skiing API!](https://www.powderproject.com)
   * Thanks to Flatiron Schools for guided support
