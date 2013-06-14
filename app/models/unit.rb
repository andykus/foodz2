class Unit < ActiveRecord::Base
  attr_accessible :id, :unit

  has_many :recipe_ingredient
end
