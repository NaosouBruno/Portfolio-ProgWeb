import styled from 'styled-components';

export const Container = styled.header`
    background: white;
`;
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .minhaFoto{
        max-width:400;
        max-height:200px;
    }
    .i {
  display: flex;
  height: 100vh;
}

.i-left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.i-right {
  flex: 1;
  position: relative;
}

.i-left-wrapper {
  padding: 50px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.i-intro {
  font-size: 30px;
  font-weight: 300;
}

.i-name {
  font-size: 60px;
}

.i-title {
  height: 50px;
  overflow: hidden;
}

.i-title-wrapper {
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;
}

@keyframes move {
  25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(-100px);
  }
  75% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(-200px);
  }
}

.i-title-item {
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #59b256;
  display: flex;
  align-items: center;
}

.i-scroll {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
}

.i-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

.i-bg {
  clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  background-color: #59b256;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
}

@media screen and (max-width: 480px) {
  .i {
    flex-direction: column;
  }

  .i-left-wrapper {
  
    padding: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }

  .i-desc{
    display: none;
  }
  
}

`;
