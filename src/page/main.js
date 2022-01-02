import React from 'react'
import { history } from '../redux/store'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getContentsMD } from '../redux/async/contents'

const main = (props) => {
    const dispatch = useDispatch()

    const contents = useSelector((state) => state.contentsSlice.contents)
    console.log('콘텐츠', contents)

    React.useEffect(() => {
        dispatch(getContentsMD())
    }, [])

    return (
        <React.Fragment>
            <Container>
                <FlexBox>
                    <Title>워키도기 과제 - 윤진선</Title>
                    <Phone>
                        <Screen>
                            {contents?.list?.map((content, idx) => {
                                return (
                                    <>
                                        <ContentsBox>
                                            <ContentTitle>{content?.title}</ContentTitle>
                                            <Img>
                                                <img src={content?.image}></img>
                                            </Img>
                                            <Content>{content?.contents}</Content>
                                        </ContentsBox>
                                    </>
                                )
                            })}
                        </Screen>
                    </Phone>
                </FlexBox>
            </Container>
        </React.Fragment>
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
`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
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

const ContentsBox = styled.div`
    width: 100%;
    padding: 1rem 0;
    border-bottom: 2px solid #eee;
`

const ContentTitle = styled.div`
    width: 100%;
    padding-left: 1rem;
`

const Img = styled.div`
    img {
        width: 100%;
    }
`

const Content = styled.div`
    width: 100%;
    font-size: 0.8rem;
    padding-left: 1rem;
`

export default main
