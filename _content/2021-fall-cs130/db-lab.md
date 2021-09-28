---
title: Database Lab
excerpt: An in-class activity to learn about databases
postedAt: 1632841200
---

# Database Lab

Previously, we created an in-memory "database" that was ephemeral and reset each time we restarted our server.  In class, we talked about how databases offer *persistence*, in contrast to this idea. Our next task is to retrofit our contact book to use our PostgreSQL local databases.

## Overview

In this activity, we'll be replicating our Create, Read, Update, and Delete (CRUD) contact book functionality using a database.

### Prerequisites:
1. You'll need docker installed to boot our app along with the database service. Visit [this site](https://www.docker.com/get-started) to install Docker on your local machine.
2. A familiarity with our previous [contact-book](/2021-fall-cs130/contact-book) assignment.

### Setup
We should be familiar with the first five steps—we've practiced them already, and they are a "daily" activity when contributing to a codebase.

1. Navigate to our codebase `api` folder on your local machine
2. Checkout the `main` branch
3. Pull the latest code
4. Install dependencies (`npm install`)
5. Create a new branch

The next steps are special to our new *database-connected* application.

6. To start our app, we need to use Docker to orchestrate our two services: the ExpressJS API server, *and* our Postgres database.
  
  We'll use `docker compose up` to start both of these services. This replaces the `npm start` comment (it's actually being run by Docker!)
  
  You should see some output describing our database initial setup, and finally, that our server is listening on `http://localhost:3000`.

## Tasks

Below, you'll find three main parts to our lab: first to extend our existing contact book work to us a database and practice our new ecosystem; second, an extension to practice database operations such as migrations and schema changes; and finally third, the first steps in creating a schema for our class project.

### Part 1: Contact-Book (Users) Revisited

1. Your first task is to reproduce each action from our contact book assignment:

	- An action to list all contacts
	- An action to filter contacts by either first or last name
	- An action to get a contact by ID
	- An action to create a new contact
	- An action to delete a contact by ID

  Hint: Use this [guide](https://www.prisma.io/docs/concepts/components/prisma-client/crud) as for reference.

2. Next, we'll add an action to update a contact by ID. What HTTP verb is best for this?
3. Take a moment to observe what's different about the two approaches (persisted vs. in-memory).  What is easier to write?  What is something cool you notice about using a DB?
4. Keep things organized! Split our code apart: extract the user CRUD action from our `app.js` file.
5. Play with each of the CRUD actions in our system using postman (which you already should be doing).  As you do so, take a look at the database at a more raw level (choose one of two variations):

  i.  **GUI** Open the database up in Prisma Studio. In a new terminal tab, run

	```
	$ docker compose run -p 5555:5555 app npx prisma studio
	```

	And navigate to `http://localhost:5555`. Take a look at the tables as you make changes using our API.

	ii. **‌SQL** Open the database up using `psql`. In a new terminal tab, run
	
	```
	$ docker exec -it goloanit-api-db psql -U postgres
	```
 
Try some SQL commands and explore the data.


### Part 2: Schema Changes

For this next part, I'll be offering fewer directions (which will involve more reading of documentation or experimentation).  Don't worry about clearing your database at anytime!

1. Modify our `User` schema to have an `email` field. Ensure our API is up to date and accepts CRUD actions with an email.
2. Make the email required at the DB-level.  What change did you need to make?
3. Change our ID structure from integers to UUIDs. Take note of the implications here.

Hint: Consult the [Prisma Migrate documentation](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate).

### Part 3: Items!

At long last, we're ready to start adding our item model! I'll add the DB schema below soon :). For this task,

1. Create the item model in our Prisma schema
2. Create the CRUD actions for `Item`s
3. Modify our schema to include a relationship between Items and Users such that an Item *must* belong to a user. And a user can have many items.  How did you accomplish this?
4. Without any code, describe (by typing out) the steps needed to execute the following user story:
  
  > As a user, I can see a list of all my items for loan, so that I can remind myself of what I allow others to use and seek more information.

5. Ensure you've committed all the previous steps.
6. Fulfill the above user story (for the API only—no UI needed).
