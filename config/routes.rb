Rails.application.routes.draw do
    # resources :users, only: [:index, :show, :create, :update, :destroy]
    resources :projects, only: [:index, :show, :create, :update, :destroy] do
       resources :teammates, only: [:index, :show, :create, :update, :destroy]
    end
    resources :teammates, only: [:index, :show, :create, :update, :destroy]
    resources :teammate_projects, only: [:index, :show, :create, :update, :destroy]

    #added part
  post "/signup", to: "users#create"
  #  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Third Trial
  # post '/login', to: 'sessions#create'
  # post '/auto_login', to: 'sessions#auto_login'
  # get '/logged_in', to: 'application#logged_in?'
  # get '/things', to: 'things#index'
end
