import React, { Component } from 'react'
import Banner from '../components/banner'


const URL_ARTISTS = 'http://localhost:3004/artists'

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            artists:''
        }
    }


    render(){
        return(
            <div>
                <Banner></Banner>
            </div>
        )
    }
}

export default Home;