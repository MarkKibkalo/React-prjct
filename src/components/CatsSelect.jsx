import React, { Component } from 'react';
import axios from 'axios';
import "./CatsSelect.css";
import {Back} from "../components/Back"
import {ReactComponent as SortDownUP} from "../img/icon/sort-down-up.svg"
import {ReactComponent as SortUpDown} from "../img/icon/sort-up-down.svg"
import { Circles } from 'react-loader-spinner';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_PWJOw8SyxzMsrHdd5OK78nN5m6kmAlSrACg9fzUfQ4NozK7eIDV5n9m4ZkagVU2E';

class CatsSelect extends Component {

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
    const breedzPage = document.querySelector('.breedz__page')
    
    function handleClickSortUp() {
      breedzPage.classList.add('flex-direction_reverse')
    }

    function handleClickSortDown() {
      breedzPage.classList.remove('flex-direction_reverse')
    }

    return (
      <div>
        <div className="nav__flex-container">
          <div className="btn-red">
              <Back/>
          </div>
          <div className="page__title">BREED</div>
          <select className="select__breeds"
                  placeholder='Chose breed' 
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
          <div className="gray-container-icon" onClick={handleClickSortUp}>
              <SortDownUP />
          </div>
          <div className="gray-container-icon" onClick={handleClickSortDown}>
              <SortUpDown />
          </div>
        </div>
                        
        <div className="breedz__page">
          {this.state.images.map((image) => 
            <img className="cat-image" alt="img" 
                  src={image.url} 
                  onLoad={this.componentDidMount.bind(this)}>
            </img>)}
        </div>
        {this.state.imageStatus}
      </div>
    );
  }
}

export {CatsSelect};