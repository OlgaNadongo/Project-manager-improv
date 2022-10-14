# class UsersController < ApplicationController

#    #GET /users
#     def index
#         users=User.all
#         render json: users, status: :ok #200
#     end

    
#     #GET /users/:id
#     def show
#         user=User.find_by(id: params[:id])

#         if user
#             render json: user, status: :ok #200
#         else
#             render json: {error: "User not found"}, status: :not_found #404
#         end
#     end


#     #POST/users
#     def create
#         user=User.create(user_params)

#         if user.valid?
#             render json: user, status: :created #201
#         else
#             render json: {errors: user.errors.full_messages} , status: :unprocessable_entity
#         end
#     end

#     #PUT/PATCH  /users/:id

#     def update

#         user=User.find_by(id: params[:id])

#         if user
#             user.update(user_params)
#             render json: user, status: :accepted
#         else
#             render json: {error:"User not found"} , status: :not_found
#         end
#     end
    
#     #DELETE /users/:id

#     def destroy

#         user= User.find_by(id: params[:id])

#         if user
#             user.destroy
#             head :no_content
#         else
#             render json: {error: "User not found"}, status: :not_found
#         end

#     end


#     private
    
#     def user_params
#         params.permit(:id, :name, :password, :email, :password_confirmation)
#     end
# end

# Trial 2
# class UsersController < ApplicationController
#     skip_before_action :authorize, only: :create 
  
#     def create
#       user = User.create!(user_params)
#       session[:user_id] = user.id
#       render json: user, status: :created
#     end
  
#     def show
#       render json: @current_user
#     end
  
#     private
  
#     def user_params
#       params.permit(:id, :name, :password, :password_confirmation)
#     end
  
#   end


# Third Trial

class UsersController < ApplicationController
  # Up here is where you will include any method you want to allow the app to invoke 
  # without checking if it's authorized first.

    skip_before_action :authorized, only: [:create]
   
    def create
      user = User.create(user_params)
     
      if user.valid?
        render json: { user: user, status: :created}
      else
        render json: { error: 'failed to create user', status: :not_acceptable}
      end
    end
  
  private
    
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
  
end