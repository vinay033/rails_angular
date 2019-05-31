Rails.application.routes.draw do
  resources :users

  resources :users do
    collection do
      post :upload
    end
  end
end
