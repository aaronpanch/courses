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
We should be familiar with all these steps—we've practiced them already, and they are a "daily" activity when contributing to a codebase.

1. Navigate to our codebase `api` folder on your local machine
2. Checkout the `main` branch
3. Pull the latest code
4. Install dependencies (`npm install`)
5. Create a new branch

## Tasks

### Part 1: Contact-Book Revisited

1. Your first task is to reproduce each action from our contact book assignment:

	- An action to list all contacts
	- An action to filter contacts by either first or last name
	- An action to get a contact by ID
	- An action to create a new contact
	- An action to delete a contact by ID

  Hint: Use this [guide](https://www.prisma.io/docs/concepts/components/prisma-client/crud) as for reference.

2. Next, we'll add an action to update a contact by ID. What HTTP verb is best for this?
3. Take a moment to observe what's different about the two approaches (persisted vs. in-memory).  What is easier to write?  What is something cool you notice about using a DB?
4. Split our code apart: extract the user CRUD action from our `app.js` file.

### Part 2: Items!

At long last, we're ready to start adding our item model! As a reminder, here's our partial database schema:

