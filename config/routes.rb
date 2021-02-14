Rails.application.routes.draw do
  resources :people
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # For development/test only
  get "javascripts/phone_input_international.js", to: "scripts#phone_input_international"
  get "javascripts/phone_input_international/:filename.:extension", to: "scripts#library"
  get "mocha/:filename.:extension", to: "scripts#test"
end
