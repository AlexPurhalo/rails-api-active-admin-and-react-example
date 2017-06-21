IngredientType = GraphQL::ObjectType.define do
	name 'Ingredient'
	description 'An ingredient for drink'
	field :id, types.ID
	field :description, types.String
end
