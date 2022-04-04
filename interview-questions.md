# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
In order to modify the contents of the database and add the foreign key , you can create a migration adding
the column and attributes needed. Once you have added the appropriate data you would migrate via the rails db:migrate command. The Cohort model will contain a primary key
while the foreign key will be added to the student model with a name student_id.

Researched answer:
$ The following steps would be taken.
$ rails g migration add_foreign_key
$ rails db:migrate
$ add_column:animals, :animal_id, :integer
$ rails:db migrate

2. Which RESTful routes must always be passed params? Why?

Your answer: I believe the destroy, update and show routes must always be passed params in order to
successfully pull information from a linked database. For example, an id passed into one of the previously mentioned
routes in order to update the chosen item.


Researched answer:

The Http verb with the url request and passed params defines the correct route
ex: delete '/photos/:id
In the example the HTTP verb/action is delete/destroy, requesting photos and the param of id to specify which
photo from the database to delete.

3. Name three rails generator commands. What is created by each?

Your answer:
rails g model - model files to include: migration file, model.rb and model test file
rails g controller - controller files to include controller_name_controller.rb
rails g resource

Researched answer:
controller files generated also include the test.rb file , helpers.rb, view file of controller and scss file of controller.
rails g resource generates : migration file, models, controller file , views, helpers , scss and route of project

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students = Index method called to display all items of declared model.

action: "POST"   location: /students = Create method called to add data to the db.

action: "GET"    location: /students/new = New method called to display the form for the user to enter data for a new student

action: "GET"    location: /students/2 = Show method called to list one item from the model in this case the student with an id of 2

action: "GET"    location: /students/2/edit = Edit method to display a form to edit student information with the id of 2.

action: "PATCH"  location: /students/2 = Update method called and updates the student information in the db

action: "DELETE" location: /students/2= Destroy method called and removes the student with an id of 2 from the db

5. As a developer, you are making an application to manage your to do list.
   Create 10 user stories that will help you get your application started.
   Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

   USER STORIES:

   As a user I can create a new to-do list.
   As a user I can change the name of my to-do list
   As a user I can add items to the to-do list.
   As a user I can update my to-do list.
   As a user I can reorder my to-do list.
   As a user I can delete my to-do list.
   As a user I can mark items done on to-do list.
   As a user I can share my to-do list.
   As a user I can add short description of my to-do list.
   As a user I can add a due date to each item of my to-do list.
