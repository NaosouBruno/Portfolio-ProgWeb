import styled from 'styled-components';

export const Container = styled.div`
   .c {
  height: 100vh;
  position: relative;
}

.c-bg {
  width: 20px;
  height: 100%;
  background-color: #59b256;
  position: absolute;
}

.c-wrapper {
  padding: 50px;
  display: flex;
}

.c-left {
  flex: 1;
}

.c-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.c-title {
  font-size: 60px;
  width: 80%;
}


form {
  margin-top: 20px;
}

input {
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
}

textarea {
  width: 100%;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
}

button {
  border: none;
  padding: 15px;
  background-color: #59b256;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .c-wrapper {
    flex-direction: column;
    padding: 0px 50px;
  }

  .c-title {
    font-size: 30px;
  }
  form {
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
  }

  input {
    width: 35%;
    height: 40px;
    margin: 10px;
    margin-left: 0;
  }

  button {
    margin-top: 10px;
  }
}

`;