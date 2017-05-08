require 'rails_helper'

RSpec.describe Api::BenchesController, type: :controller do
  describe 'GET show' do
    let! (:bench) { create(:bench, lat: 50, lng: 250) }
    before(:each) do
      get :show, { id: bench.id, format: :json }
    end

    it { should render_template(:show) }
    it { should respond_with(200) }
  end

  describe "POST create" do
    context "invalid params" do
      before(:each) do
        post :create, bench: {description: "invalid bench"}, format: :json
      end

      it { should respond_with(422) }

    end
  end

  describe 'GET index' do
    render_views
    let!(:bench1) {create(:bench, lat:50, lng:250)}
    before(:each) do
      get :index, { format: :json }
    end

    it { should respond_with(200) }
    it { should render_template(:index) }
  end
end
