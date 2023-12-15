# Task Manager CLI Tool
This is a task manager CLI tool built using NodeJS and CommanderJS.

## Setting up the tool
To set up this tool directly from this repository, you need to follow these steps:
- After cloning it, run `npm install` command to install all dependencies
- Next, create a `.env` file in the root directory of the project and add a variable called `MONGO_URI=` in the file and assign your MongoDB connection string to it
- The last step is to install it globally in your system using the following command: `npm i -g .`

## Supported Commands
You can create CRUD (Create, Read, Update and Delete) Operations using this cli tool. Here are a list of commands supported by the tool:
1. `gen gst` - To create GST,
2. `gen pan` - To create PAN


Note:
- To check for the version number, run this command: `gen -V` or `gen --version`.
- For help, run this command: `gen -h` or `gen --help`.
