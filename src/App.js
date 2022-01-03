// * react basic import
import React from 'react'
import styled from 'styled-components'

import Contents from './components/Contents'

function App() {
    return (
        <Container>
            <FlexBox>
                <p>워키도기 과제 - 윤진선</p>
                <Phone>
                    <Screen>
                        <Contents />
                    </Screen>
                </Phone>
            </FlexBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 98vh;
`

const FlexBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
`

const Phone = styled.div`
    width: 19rem;
    height: 37rem;
    background: linear-gradient(to right bottom, #7d7de5, #27e9a1);
    padding: 1.5rem 1rem 1.5rem 1rem;
    border-radius: 20px;
    border: 1px solid #ddd;
    box-shadow: 0px 10px 10px darkgrey;
`

const Screen = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    overflow-y: auto;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default App
