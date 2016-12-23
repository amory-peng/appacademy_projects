Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  # get 'user' => 'user#index', as: 'user_index'
  # post 'user' => 'user#index'
  # get 'user/new' => 'user#new', as: 'new_user'
  # get 'user/:id/edit' => 'user#edit', as: 'edit_user'
  # get 'users/:id' => 'user#show', as: 'user'
  # patch 'user/:id' => 'user#update'
  # put 'user/:id' => 'user#update'
  #delete 'user/:id' => 'user#destroy'
end
