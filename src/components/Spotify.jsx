import React,{useEffect}from 'react'
import Container from './style'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Body from './Body'
import Navbar from './Navbar'
import axios from 'axios'

import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constants'


export default function Spotify() {
    const [{ token },dispatch] = useStateProvider();
    useEffect(()=>{
        const getUserInfo= async()=>{
            const  {data} = await axios.get("https://api.spotify.com/v1/me",
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "application/json"
                },
            
            })
            console.log(data,123);
            const userInfo={
                userId: data.id,
                userName:data.display_name,
                userEmail:data.email

            }
            console.log(userInfo);
            dispatch({type:reducerCases.SET_USER, userInfo})
        }
       
        
        getUserInfo()
    },[token,dispatch])

    
    return (

        <Container>
            <div className="spotify-body">
                <Sidebar/>

                <div className="body">
                    <Navbar/>

                <div className="body-contents">
                    <Body/>
                </div>

                </div>
            </div>
            <div className="spotify-footer">
                <Footer />
            </div>

        </Container>
    )
}
