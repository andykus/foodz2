class TestController < ApplicationController
  def test
  	puts request.url
  end
end
