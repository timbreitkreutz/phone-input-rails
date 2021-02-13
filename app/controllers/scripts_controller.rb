class ScriptsController < ApplicationController
  protect_from_forgery except: :raw

  # GET scripts/phone_input.js
  def raw
    render js: File.read("./app/javascript/packs/#{params[:filename]}.#{params[:extension]}")
  end
end
