import styled from "styled-components";
import {theme} from "../styles/Theme";
import {useState} from "react";

export const Counter = () => {
    let [count, setCount] = useState<number>(0);

    function incrementHandler() {
        if (count === theme.maxCount) return;
        let newCount = ++count;
        setCount(newCount);
    }

    function resetHandler() {
        if (count === 0) return;
        setCount(0);
    }

    return (
        <StyledContainer>
            <StyledBox>
                <StyledScreen count={count}>{count}</StyledScreen>
                <StyledBtnContainer>
                    <StyledBtn id="inc" count={count} onClick={incrementHandler}>INC</StyledBtn>
                    <StyledBtn id="res" count={count} onClick={resetHandler}>RESET</StyledBtn>
                </StyledBtnContainer>
            </StyledBox>
        </StyledContainer>
    )
}

type StyledCountComponentType = {
    id?: string;
    count: number;
}

const StyledContainer = styled.div`
  background-color: ${theme.secondColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledBox = styled.div`
  border: ${theme.mainColor} 2px solid;
  border-radius: 4px;
  margin: 0 auto;
  height: 15em;
  width: 20em;
  display: flex;
  flex-direction: column;
`

const StyledScreen = styled.span<StyledCountComponentType>`
  background-color: ${theme.mainColor};
  border-radius: 4px;
  margin: 12px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  font-weight: bold;
  color: ${props => props.count === theme.maxCount ? "red" : theme.secondColor} ;
`

const StyledBtnContainer = styled.div`
  border: ${theme.mainColor} 2px solid;
  border-radius: 4px;
  margin: 0 12px 12px 12px;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

function resolveEnable(props: StyledCountComponentType) {
    if ((props.id === "inc" && props.count === theme.maxCount) ||
        (props.id === "res" && props.count === 0)) {
        return 0.3;
    }
    return 1;
}

const StyledBtn = styled.button<StyledCountComponentType>`
  background-color: ${theme.mainColor};
  border-radius: 4px;
  height: 70%;
  width: 40%;
  font-size: 30px;
  font-weight: bold;
  color: ${theme.secondColor};
  opacity: ${props => resolveEnable(props)};
`