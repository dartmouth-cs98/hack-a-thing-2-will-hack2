# Will's Hackathing #2

## What I set out to build

Initially I planned on working toward creating some part of our project in react-native, or at least attempt to do so, to refamiliarize myself with the software. I encountered so many issues with my environment that I did not have enough time to undertake a large project, so in the end I had to settle for redoing the react-native tutorial from cs-52.

## What I learned

I learned that dependencies and environments can get very messy very quickly. In  less than a year all of my past projects no longer function correctly and using them as a guide for work going forward would be a bad idea.

## How does this inspire me

This experience made me much more comfortable dealing with weird environment and dependency things, so I won't despair in the same way I did in this project if I encounter issues with this in creating our app

## What didn't work

A lot of things did not work in this project. First, I was unable to get expo running for a long time and tried a number of things to get this working. I uninstalled and reinstalled expo multiple times while trying fixes googled online inbetween each attempt, then installed and reinstalled node and npm multiple times as well. Finally after updating the OS and updating xcode and then repeating the above steps I finally was able to get expo to run. My next issue was with babel, where for some reason I was having some major issues with my .babelrc file. Eventually these were resolved, but I spent a good deal of time going down that rabbit hole as well. Finally, I had a number of issues where expo needed a different version of packages than yarn was installing and the tutorial I was following was using outdated packages that were no longer working, like ListView. Due to these issues I stopped short of completing the tutorial, but I was able to get expo running and have a basic app.

Tutorial I followed: http://cs52.me/assignments/sa/react-native/