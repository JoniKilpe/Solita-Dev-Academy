README
--------------

Few things before we start concerning the task.
MongoDB was used as the database. Free-version has limited space available, so only one csv monthly data was used (2021-05).
Additionally the file's "Duration (.sec)" -data had to be modified as MongoDB considered it as an object because of the dot.

Prerequisites:
Editor, for instance, visual studio code.
Node.js

I also unfortunately ran out of time. You can use the app as follows:
1. Download the code
2. Open the folder on, for example, visual studio code by launching the editor, top-left corner, open folder -> solita-dev-academy-2023
3. Open terminal and write node index.
--> displays filtered journeys on cmd. Filters have taken into account journeys more than 10 meters long and more than 10 seconds length.

Unfortunately there are over 700k results. :)

What I achieved was setting up the mongoDB online so the journeys are not stored locally. The Mongodb is running online on my account and
this application can fetch the data. The pipeline variable takes the filters into account and there can be additional filters specified
if needed.

I started to tinker around React and Express but they were left unfinished. I'm pretty new to these things.
