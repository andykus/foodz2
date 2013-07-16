class IngredientController < ApplicationController
  def create
  	Ingredient.create(:ingredient => params[:ingredient]);
  end
end
