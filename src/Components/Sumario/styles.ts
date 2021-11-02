import styled from 'styled-components';

export const Container = styled.div`
 .a {
  height: 100vh;
  display: flex;
  align-items: center;
}

.a-left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
}

.a-right {
  flex: 1;
}

.a-card.bg {
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: #333;
}

.a-card {
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
}

.a-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.a-title {
  font-weight: 400;
}

.a-sub {
  margin: 20px 0px;
}

.a-desc{
    font-weight: 300;
}



@media screen and (max-width:480px) {
    .a{
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
    }

    .a-left {
      width: 100%;
    }

    .a-card {
      height: 30vh;
    }

    .a-card.bg, .a-award {
      display: none;
    }

    .a-right{
      padding: 20px;
    }
}
`;
