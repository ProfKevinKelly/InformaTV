# Information Portal For Elderly In The Home (InformaTV)

This is the Software Engineering Project for Group 29
Client: TCD - Department of Mechanical, Manufacturing & Biomedical Engineering
Project: AI for Surgery: Information Portal for Eldery in the Home (InformaTV Project number 30)

Ajchan Mamedov - CS Second Year
Alexandra Ichim - CSB Second Year
Kilian Ronan - CS Third Year
Liam Bartsch - CS Third Year
Michael Makarenko - CS Second Year

## Installation

You will need Node.js installed, if you don't have it installed you can install it [here](https://nodejs.org/en/download/current/)

## Execution

To run the React app use: `make execute`

## Errors

`make execute` might not work on Windows unless you use the Git bash shell.

If the makefile doesn't work then:

- navigate to _front_end_ and use: `npm i`
- navigate to _back_end_ and use: `npm i`
- use: `npm run dev`

## Objectives

- :white_check_mark: Creating a linked back-end, database and front-end.
- :white_check_mark: Presenting a simple visual format for the elderly person.
- :white_check_mark: Allowing controls to allow the curator to modify and select content of the elderly’s view.
- :white_check_mark: Making interactions between the trusted circle and the elderly person possible and as simple as possible.
- :white_check_mark: Test all the functionalities and make sure it all works together.
- :white_check_mark:Deliver the final product of the system to the client and the future potential developers.

## Further Progress and Development Ideas

Because this project was part of a course project we were limited on time being able to develop the Portal, which is why there are a lot of features and functionality that have not been finished or fully implemented. Some ideas and concepts that can be worked on are:

- Interactivity like Netflix for a TV app [spatial interactivity](https://github.com/NoriginMedia/react-spatial-navigation)

- Reminder calendar integration [react calendar](https://www.npmjs.com/package/react-reminder-calendar)

- Messaging feature like Facebook Messenger [instant chat](https://github.com/paul-pagnan/react-instant-chat)

## back_end

Everything to do with the server, database connection and backend

## ChatApplication

Chat implementation for the messages

## front_end

Everything to do with main React App, UI and front_end views

## gitignore

gitignore for functional and reliable group working

## Makefile

Makefile to automatically install dependancies and update npm while also starting the front_end and back_end concurrently.
