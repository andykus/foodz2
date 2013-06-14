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
#@recipe.ingredient_ids = [@savedIngredient.id]

# RecipeIngredient.delete_all

# Recipe.delete_all
# @recipe = Recipe.create(:title => 'Kaka', :description => 'Lorem ipsum dolor sit amet.', :temperature => 225, :time => 25)
# @recipe2 = Recipe.create(:title => 'Lasagne', :description => 'Lorem ipsum dolor sit amet.', :temperature => 225, :time => 25)

# Ingredient.delete_all
# ['Mööölk', 'flour', 'morot'].each do |ingredient|
# 	@savedIngredient = Ingredient.create(:ingredient => ingredient)
# 	@recipe.ingredient_ids = @recipe.ingredient_ids << @savedIngredient.id
# 	@recipe2.ingredient_ids = @recipe.ingredient_ids << @savedIngredient.id
# end

@recipe = Recipe.find(34)
@recipe.destroy