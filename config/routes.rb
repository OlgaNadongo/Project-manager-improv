Rails.application.routes.draw do
    resources :users, only: [:index, :show, :create, :update, :destroy]
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resources :teammates, only: [:index, :show, :create, :update, :destroy]
    resources :teammate_projects, only: [:index, :show, :create, :update, :destroy]
end
