# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

  # ---1)
  # The BlogPostController which inherits from the ApplicationController
  # is where we add all the code dealing with the logic of the app that
  # manages what occurs in view model , routing external requests to internal actions.
class BlogPostsController < ApplicationController
  def index
  # ---2)
  # @posts is the instance variable used and referenced in the index view
  # displays all blog posts from database upon page render
    @posts = BlogPost.all
  end

  # ---3)
  # The show method renders one item or blogpost from the db, referenced by its id/ primary key.
  # It also represents the "Read" in CRUD
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The new method is used to route the user to the view that displays a form to the user.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # A new instance variable post is created utilizing the data submitted by the user.
    # Blog_post_params method takes in all the defined attributes from the object blog.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # A new instance variable of post is created by retrieving a single object by the id to be displayed
    # for editing.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #Used to update the new post instance , replacing the blog_post_params / attributes
    # of the post object.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # If the destroy method is unsuccessful at deleting a post then the user is rerouted
      # back to the post view page.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # Private is a helper method which prevents the method blog_post_params from being
  # used outside of the class BlogPostsController
  private
  def blog_post_params
    # ---10) Limits and permits editing of specified tables (blog_post) columns (title and content)
    params.require(:blog_post).permit(:title, :content)
  end
end
