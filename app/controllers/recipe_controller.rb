class RecipeController < ApplicationController
  respond_to :json

  def index
  end

  def show 
    @recipe = Recipe.find(params[:id])
    
    respond_with(@recipe)
  end

  def create
  end

  def update
  end

  def delete
  end
end
