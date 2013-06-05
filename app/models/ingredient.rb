class Ingredient < ActiveRecord::Base
  attr_accessible :id, :ingredient

  has_many :recipes
  has_many :recipes, :through => :recipe_ingredients 

end
