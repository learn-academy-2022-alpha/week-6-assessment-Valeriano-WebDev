# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! 
I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the 
Cohort model or the Student model?

Your answer:
In order to modify the contents of the database and add the foreign key , you can create a migration adding
the column and attributes needed. Once you have added the appropriate data you would migrate via the rails db:migrate command. The Cohort model will contain a primary key
while the foreign key will be added to the student model with a name student_id.

Researched answer:

As previously mentioned, we can use rails commands to accomplish what you asked. I used this same method while working
on a Blog-Post app in class. We used the command rails generate migration to add the foreign key. We added the foreign key to the appropriate column,
and made sure to migrate the database after each step. To do this we made sure to refer to the rails documentation during this process. It was extremely
helpful in ensuring the correct commands were used to add columns or any other parameters we failed to do initially. 

[//]: # ($ The following steps would be taken.)

[//]: # ($ rails g migration add_foreign_key)

[//]: # ($ rails db:migrate)

[//]: # ($ add_column:animals, :animal_id, :integer)

[//]: # ($ rails:db migrate)

2. Which RESTful routes must always be passed params? Why?

Your answer: I believe the destroy, update and show routes must always be passed params in order to
successfully pull information from a linked database. While building a blog-post app in class, our destroy functionality wasn't working. After
troubleshooting we realized that we weren't passing the necessary params, to route our app to the specific blogpost we wanted to delete. 
Once we refactored our code to include the necessary params(i.d. in this case),our route was functional and the destory
method was able to target the specific blogpost in the db to destroy/delete.

Researched answer:

Another example of this is if we were to create a photo gallery app. In order to route and show once specific photo we would use the 
HTTP verb GET and call on the specific photo with something like photo/ and the i.d. of the photo.
For delete, it would be the same thing but with the HTTP verb delete instead.

[//]: # (The Http verb with the url request and passed params defines the correct route)

[//]: # (ex: delete '/photos/:id)

[//]: # (In the example the HTTP verb/action is delete/destroy, requesting photos and the param of id to specify which)

[//]: # (photo from the database to delete.)

3. Name three rails generator commands. What is created by each?

Your answer:

Three rails generator commands I have experience with are the rails g model , rails g controller and rails g resource command. 
I know when I use the rails g model command , files concerning the model like model.rb , and model test file are created. For the rails 
g controller , files pertaining to the controller are created. Rails g resource is a useful command which gives us more to start with generating 
model, controller , view , helper and other files .

[//]: # (rails g model - model files to include: migration file, model.rb and model test file)

[//]: # (rails g controller - controller files to include controller_name_controller.rb)

[//]: # (rails g resource)

Researched answer:
controller files generated also include the test.rb file , helpers.rb, view file of controller and scss file of controller.
rails g resource generates : migration file, models, controller file , views, helpers , scss and route of project

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

With the GET route and /students as the location the Index method  would be called to display all items of declared model.
With the POST route and /students as the location the Create method to add data to the db.
With the GET route and /students/new as the location the New method would be called to display the form for the user to enter data for a new student
With the GET route and /students/2 as the location the Show method would be called to list one item from the model, in this case the student with an id of 2
With the GET route and /students/2 as the location the Edit method would be called to display a form to edit student information with the id of 2
With the Patch route and students/2 as the location the Update method would be called updates the student information in the db
With the Delete route and students/2 as the location the Destroy method would be called and remove the student with an id of 2 from the db




[//]: # (action: "GET"    location: /students = Index method called to display all items of declared model.)

[//]: # ()
[//]: # (action: "POST"   location: /students = Create method called to add data to the db.)

[//]: # ()
[//]: # (action: "GET"    location: /students/new = New method called to display the form for the user to enter data for a new student)

[//]: # ()
[//]: # (action: "GET"    location: /students/2 = Show method called to list one item from the model in this case the student with an id of 2)

[//]: # ()
[//]: # (action: "GET"    location: /students/2/edit = Edit method to display a form to edit student information with the id of 2.)

[//]: # ()
[//]: # (action: "PATCH"  location: /students/2 = Update method called and updates the student information in the db)

[//]: # ()
[//]: # (action: "DELETE" location: /students/2= Destroy method called and removes the student with an id of 2 from the db)

5. As a developer, you are making an application to manage your to-do list.
   Create 10 user stories that will help you get your application started.
   Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


When I think of building user stories, I think of simple steps or pieces of functionality broken down individually.
It is simplified in a manner that someone new to the app can read and understand exactly what they are able to do . I like to create 
my user stories in the potential order, functionality would occur for a new user.

Some examples of this would be ....

   As a user I can create a new to-do list.
   As a user I can change the name of my to-do list
   As a user I can add items to the to-do list.
   As a user I can update my to-do list.
   As a user I can reorder my to-do list.
   As a user I can add short description of my to-do list.
   As a user I can add a due date to each item of my to-do list.
   As a user I can mark items done on to-do list.
   As a user I can delete my to-do list.
   As a user I can share my to-do list.
