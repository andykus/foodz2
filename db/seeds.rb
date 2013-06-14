# encoding: UTF-8

Unit.delete_all
['g', 'dl', 'st'].each do |unit|
	Unit.create(:unit => unit)
end

# Many to many: 
# http://stackoverflow.com/questions/8131213/how-can-i-populate-a-join-many-to-many-table-inside-seeds-rb-for-ruby-on-rails
# Modell.kopplingstabell = [annanModell.id] -- Första grejen man vill lägga till
# Modell.kopplingstabell = Model.kopplingstabell < annanModell.id
# HUR LÄTT SOM HELST JU.. (noobs...)

Recipe.delete_all
@recipe = Recipe.create(:title => 'Kaka', :description => 'Lorem ipsum dolor sit amet.', :temperature => 225, :time => 25)
@recipe2 = Recipe.create(:title => 'Lasagne', :description => 'Lorem ipsum dolor sit amet.', :temperature => 225, :time => 25)

Ingredient.delete_all
['Mööölk', 'flour', 'morot'].each do |ingredient|
	@savedIngredient = Ingredient.create(:ingredient => ingredient)
	@recipe.recipe_ingredients = @recipe.recipe_ingredients < @savedIngredient.id
	@recipe2.recipe_ingredients = @recipe2.recipe_ingredients < @savedIngredient.id
end