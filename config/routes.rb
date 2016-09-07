Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:index, :show]
    resources :question_responses, only: [:create, :show, :update, :destroy]
    resources :conversations, only: [:create, :show, :index] do
      resources :messages, only: [:create]
    end

  end

  root "static_pages#root"
end
