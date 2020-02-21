Rails.application.routes.draw do
  get 'api/Messages'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :create, :show, :update, :destroy]
    resources :direct_messages, only: [:index, :create, :show, :update]

    resources :messages, only: [:index]
  end
  
  root to: 'static_pages#root'

  mount ActionCable.server, at: '/cable'
end
