Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :drinks
		post '/ingredients', to: 'ingredients#query'
	end

	if Rails.env.development?
		mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "api/ingredients"
	end
end
