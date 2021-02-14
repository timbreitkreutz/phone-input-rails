class ScriptsController < ApplicationController
  protect_from_forgery except: %i[library phone_input_international test]

  def library
    render js: File.read("./app/javascript/packs/phone_input_international/#{params[:filename]}.#{params[:extension]}")
  end

  def test
    render js: File.read("./test/mocha/#{params[:filename]}.#{params[:extension]}")
  end

  def phone_input_international
    render js: File.read("./app/javascript/packs/phone_input_international.js")
  end
end
