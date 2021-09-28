---
title: In-Memory DB
excerpt: A homework assignment to practice CRUD actions.
postedAt: 1632259800
---

# In-Memory Contact Book

In preparation for our next adventure into databases, lets try building an ultra-simplified database that lives _in-memory_.  Something in-memory is ephemeral, so when our server restarts (either automatically or manually) we'll lose any changes and it will revert to what is in the code.

## Setup
1. Navigate to our code on your local computer
2. Pull the latest code `git pull`
3. Check out the sample branch: `git checkout contact-book`
3. Install the packages `npm install`
4. Do the task(s)!
5. Submit your assignment to me by sending your `app.js` file on Slack—no need to send the entire project, just that one file.

## Your Task

### Rating: Green Circle (Easier)
Create two routes (paths) to _read_ contact(s) from our contacts list (stored in the variable `contact`s.

1. The first path should be GET `/contacts` that lists all the contacts in our "DB".
2. The second path should be `/contacts/:id` where the `:id` part of the URL is the ID of the contact we're looking for. So `/contacts/2` will get us the contact with ID 2.

  *Hint*: See this section https://expressjs.com/en/guide/using-middleware.html#middleware.application

### Rating: Blue Square (Intermediate)
In addition the above tasks, extend the GET `/contacts` route to _filter_ contacts.  Your search filter doesn't need to be advanced, but should be passed to your action by a query parameter. So `/contacts?name=Aaron` should list all contacts that have the name `Aaron` in the first or last name.  You can ignore cases.

Hint: Try using the array method `filter`

### Rating: Black Diamond (Hard!)
In addition to the above tasks, add two more routes:
1. A route to create a contact `/contacts`. (Hint: Choose the right HTTP verb to distinguish from the first task). Generate an ID that doesn't conflict with the existing IDs in the "DB" but don't need to be contiguous. So if you delete one there may be a skipped number.
2. A route to delete a contact by ID `/contacts/:id`. (Hint choose a logical HTTP verb!)