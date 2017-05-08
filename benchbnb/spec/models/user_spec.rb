require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  let! (:user) { User.create!(username: 'breakfast', password: 'password') }

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password) }
  end

  describe 'associations' do
    it { should have_many(:favorites) }
    it { should have_many(:favorite_benches) }
  end

  describe 'model_methods' do
   describe '.find_by_credentials' do
     context 'when given correct credentials' do
       it 'should find the right user' do
         # test goes here
         expect(User.find_by_credentials('breakfast', 'password')).to eql(:user)
       end
     end

     context 'when given incorrect credentials' do
       it 'should return nil' do
         # test goes here
         expect(User.find_by_credentials('breakfast', 'passwor')).to be_nil

       end
     end
   end
 end
end
