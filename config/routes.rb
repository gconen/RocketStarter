Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :projects, except: [:new, :edit]
    resources :pledges, only: [:create]
    resources :categories, only: [:show, :index]
  end
end
