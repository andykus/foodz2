class RecipeIngredient < ActiveRecord::Base
  attr_accessible :ingredient_id, :recipe_id, :unit

  belongs_to :recipe
  belongs_to :ingredient
  belongs_to :unit

end
