class Recipe < ActiveRecord::Base
  attr_accessible :description, :temperature, :time, :title
 
  has_many :recipe_ingredients, :dependent => :delete_all
  has_many :ingredients, :through => :recipe_ingredients

end
