import React, { Component } from 'react';
import axios from 'axios';
import "./CatsSelect.css";
import { Circles } from 'react-loader-spinner';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_PWJOw8SyxzMsrHdd5OK78nN5m6kmAlSrACg9fzUfQ4NozK7eIDV5n9m4ZkagVU2E';

class GetCats extends Component {

  async getBreeds() {
    const res = await axios('/breeds');
    return res.data;
  }
  async getCatsImagesByBreed(breed_id, amount) {
    const res = await axios('/images/search?breed_ids='+breed_id + "&limit="+ amount);
    
    console.log(res.data)
    return res.data;
  }

  async loadBreedImages() {
    console.log('Load Breed Images:', this.state.selected_breed)
    const limit = document.querySelector('.limit').value
    let breed_images = await this.getCatsImagesByBreed(this.state.selected_breed,`${limit}`)

    this.setState({ images: breed_images});
  }

  constructor(...args) {

      super(...args);
      this.state = {
        images: [],
        breeds: [], 
        selected_breed: 0,
        imageStatus:<div className="flex-center">
                      <Circles color="#FF868E"/>
                    </div>
      };

    this.onBreedSelectChange = this.onBreedSelectChange.bind(this);
  }
  async onBreedSelectChange(e) {
    console.log("Breed Selected. ID:",e.target.value)
    await this.setState({
                          selected_breed:e.target.value});
    await this.loadBreedImages();
  }
  componentDidMount() {
      if (this.state.breeds.length===0) {
          (async () => {
              try {
                  this.setState({breeds: await this.getBreeds(),
                                imageStatus: ""});
              } catch (e) {
                  //...handle the error...
                  console.error(e)
              }
          })();
      }
  }

  render() {
      return (
         <>
            <select className="select__breeds" 
                     value={this.state.selected_breed} 
                     onChange={this.onBreedSelectChange}>
                     {this.state.breeds.map((breed) => 
               <option 
                     key={breed.id} 
                     value={breed.id}>
                     {breed.name}
               </option>)}
            </select>
            <select className="sortAPI limit" name="limit">
                  <option value="6">Limit: 6</option>
                  <option value="9">Limit: 9</option>
                  <option value="12">Limit: 12</option>
                  <option value="15">Limit: 15</option>
            </select>

            <select className="sortAPI " name="order">
                  <option value="asc">Asc</option>
                  <option value="desc">Desc</option>
                  <option value="rand">Rand</option>
            </select>
                        
            <div className="breedz__page">
              {this.state.images.map((image) => 
                <img className="cat-image" alt="img" 
                      src={image.url} 
                      onLoad={this.componentDidMount.bind(this)}>
                </img>)}
            </div>
            {this.state.imageStatus}
        </>
      );
  }
}

export {GetCats};