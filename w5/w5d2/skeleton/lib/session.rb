require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  attr_accessor :cookie_hash

  def initialize(req)
    temp = req.cookies["_rails_lite_app"]
    if temp
      @cookie_hash = JSON.parse(temp)
    else
      @cookie_hash = {}
    end
  end

  def [](key)
    @cookie_hash[key]
  end

  def []=(key, val)
    @cookie_hash[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    res.set_cookie("_rails_lite_app", path: "/", value: @cookie_hash.to_json)
  end
end
