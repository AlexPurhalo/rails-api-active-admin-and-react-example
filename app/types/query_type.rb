QueryType = GraphQL::ObjectType.define do
	name "Query"
	description "The query root for this schema"

	field :ingredient do
		type IngredientType
		argument :id, !types.ID
		resolve -> (obj, args, ctx) {
			Ingredient.find(args[:id])
		}
	end
end
