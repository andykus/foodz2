class RecipeController < ApplicationController
  respond_to :json

  def index
  end

  def show 
    @recipe = Recipe.find(params[:id])
    respond_with(@recipe)
  end

  def create    
    @recipe = Recipe.create(params[:recipe])
    respond_with(@recipe)
  end

  def update
  end

  def delete
  end
end
