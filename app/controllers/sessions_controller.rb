# class SessionsController < ApplicationController
#     def create
#         user=User.find_by(email: params[:email])

#         if User&.authenticate(params[:password])
#             session[:user_id]=user.id
#             byebug
#             render json: user, status: :created
#         else
#            render json: {error: {login: "Invalid email or password"}}, status: :unauthorized
#         end
#     end
# end

# Trial 2

class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid email or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
  
  end



# Third Trial

# class SessionsController < ApplicationController
#   skip_before_action :authorized, only: [:create, :auto_login]

# def create
#   @user = User.find_by(email: params[:email])
 
#   if @user && @user.authenticate(params[:password])
#     @token = encode_token({ user_id: @user.id })   
#     render json: { user: UserSerializer.new(@user), jwt: @token }, status: :accepted   
#   else
#     render json: { message: 'Invalid email or password' }, status: :unauthorized
#   end
# end

# def auto_login
#   @token = params[:token]
#   user = User.find(JWT.decode(@token, "put your secret password here", true, algorithm: 'HS256')[0]["user_id"])
#   render json: user
# end

# private

# def user_login_params
#   params.permit(:email, :password)
# end
# end