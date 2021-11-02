import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
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
    .i-title-wrapper {
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;
}
.i-title-item {
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #59b256;
  display: flex;
  align-items: center;
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
    button {
        font-size: 1rem;
        color: var(--blue);
        background: var(--yellow);
        border: 0;
        border-radius: 0.25rem;
        padding: 0 2rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
