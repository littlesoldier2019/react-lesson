import React, { Component } from 'react';
import './animal.css';
import ArrowLeft from './img/icons8-arrow-left-64.png'
import ArrowRight from './img/icons8-arrow-left-64.png'


const animals = [
  {
    name: 'Cat',
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
  },
  {
    name: 'Dog',
    image:
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
  },
  {
    name: 'Koala',
    image:
      'https://pbs.twimg.com/profile_images/1367917640/Twitter_Profile_Picture_400x400.jpg'
  },
  {
    name: 'Lion',
    image:
      'https://www.bornfree.org.uk/storage/media/content/images/Field%20Conservation%20Work/Meru/meru-1.jpg'
  },
  {
    name: 'Zebra',
    image:
      'https://africanzebra.files.wordpress.com/2012/11/zebra-4-400-x-400.jpg?w=584'
  },
  {
    name: 'Tiger',
    image:
      'https://img.apmcdn.org/1d7e509f9c3948721d903c2c77c97cc8ce30a02a/square/d31ef8-20161130-molniy.jpg'
  },
  {
    name: 'Elephant',
    image:
      'https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/08/elephant-235105.jpg?h=3fbe8d4f&itok=9_KcfZat'
  },
  {
    name: 'Hyena',
    image:
      'https://dlp2gfjvaz867.cloudfront.net/product_photos/52538777/Hyena_20smaller_400sq.jpg'
  },
  {
    name: 'Wild Dog',
    image:
      'https://2.bp.blogspot.com/_DfiJkdLFAtk/TMkzrmSXiVI/AAAAAAAABMI/G2u5rD64FqM/s400/licaone01.jpg'
  }
]

class Animal extends Component {
    state = {
      count: 0,
      name: 'Cat',
      image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
  
    }

    changeForward = () => {

      if (this.state.count + 1 < animals.length) {
        this.setState({ 
          count: this.state.count + 1,
          name: animals[this.state.count + 1].name,
          image: animals[this.state.count + 1].image,
        })

      } else {
        this.setState({ 
          count: this.state.count - this.state.count,
          name: animals[this.state.count - this.state.count].name,
          image: animals[this.state.count - this.state.count].image,
        })
      }
    }

    changeBackward = () => {
      if (this.state.count === 0) {
        this.setState({ 
          count: animals.length - 1,
          name: animals[animals.length - 1].name,
          image: animals[animals.length - 1].image,
        })
      } else {
        this.setState({ 
          count: this.state.count - 1,
          name: animals[this.state.count - 1].name,
          image: animals[this.state.count - 1].image,
        })
      }
      
      
    }

    render() {
      return (
        <div className='Animal'>
          <h3>{this.state.name}</h3>
          <img src={this.state.image} alt='animal' />
          <div>
            <div className='button_contain'>
              <img src={ArrowLeft} alt='arrow'/> 
              <button className='button' onClick={this.changeBackward}> Back </button>
              <button className='button' onClick={this.changeForward}> Continue </button>
              <img src={ArrowRight} alt='arrow'/>
            </div>
          </div>
        </div>
      )
    }
  

  }

export default Animal;
