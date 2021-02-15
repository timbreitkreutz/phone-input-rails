Rails.application.routes.draw do
  resources :people
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "metadata.min", to: "scripts#metadata"
  get "javascripts/:module/:filename", to: "scripts#module"
  get "javascripts/:module/:sub/:filename", to: "scripts#submodule"
  get "javascripts/:module/:sub/:sub2/:filename", to: "scripts#subsubmodule"
  get "mocha/:module/:filename.:extension", to: "scripts#test"
end
