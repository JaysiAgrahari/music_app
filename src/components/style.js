import styled from "styled-components";
const Container = styled.div`
//  display:flex;
//  justify-content:center;
//  align-items:center;
//  flex-direction:column;
//  height:100vh ;
//  width:100vw;
//  background-color:#1db954;
//  gap:5rem;
//  img{
//     height:20vh;
//  }
//  button{
//     padding:1rem 5rem;
//     border-radius: 5rem;
//     border:none;
//     background-color: black;
//     color:#49f585;
//     font-size:1.4rem;
//     cursor:pointer;

//  }


max-width:100vw;
max-height:100vh;
overflow:hidden;
display: grid;
grid-template-rows: 85vh 15vh;
.spotify-body{
   display:grid;
   grid-template-columns:15vw 85vw;
   height:100%;
   width:100%
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
.body {
 height: 100%;
 width: 100%;
   //    overflow: auto;
   //    &::-webkit-scrollbar {
   //      width: 0.7rem;
   //      max-height: 2rem;
   //      &-thumb {
   //        background-color: rgba(255, 255, 255, 0.6);

}
 `

export default Container;