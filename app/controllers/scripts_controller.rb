class ScriptsController < ApplicationController
  protect_from_forgery except: %i[module test submodule subsubmodule metadata]

  def module
    render js: File.read("./app/javascript/modules/#{params[:module]}/#{params[:filename]}.js")
  end

  def submodule
    render js: File.read("./app/javascript/modules/#{params[:module]}/#{params[:sub]}/#{params[:filename]}.js")
  end

  def subsubmodule
    render js: File.read("./app/javascript/modules/#{params[:module]}/#{params[:sub]}/#{params[:sub2]}/#{params[:filename]}.js")
  end

  def test
    render js: File.read("./test/mocha/#{params[:module]}/#{params[:filename]}.#{params[:extension]}")
  end

  def metadata
    render json: File.read("./app/javascript/modules/metadata.min.json")
  end

  def country_list
    render json: File.read("./app/javascript/modules/countries.emoji.min.json")
  end
end
