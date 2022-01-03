import React, { memo, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { api } from '../api'
import Loader from '../components/Loader'

const Contents = (props) => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    // 다음 페이지 있는지 확인하기
    const [pageO, setPageO] = useState(true)

    // 요소 관찰
    const [element, setElement] = useState(null)

    // 데이터 불러오기
    const getItems = (id) => {
        api.getAPI(id)
            .then((res) => {
                setLoading(true)
                setItems((prevState) => [...prevState, res.data.list])
            })
            .catch((error) => {
                setPageO(false)
                console.log(error)
            })
    }

    // page 값이 늘어날 때마다 데이터를 가져옴
    useEffect(() => {
        getItems(page)
    }, [page])

    // 인터렉션 옵저버 API 사용
    const observer = useRef(
        new IntersectionObserver(
            (e) => {
                const first = e[0]
                // isIntersecting의 값이 true일 때는 page 값을 더해줌
                if (first.isIntersecting) {
                    setPage((prevState) => prevState + 1)
                }
            },
            { threshold: 1 }
        )
    )

    useEffect(() => {
        // element가 바뀔때마다 동작
        const currentElement = element
        const currentObserver = observer.current

        if (currentElement) {
            currentObserver.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement)
            }
        }
    }, [element])

    return (
        <>
            {items?.map((list, idx) => {
                return (
                    <>
                        {list?.map((content, idx) => {
                            return (
                                <ContentsBox ref={setElement}>
                                    <Title>{content?.title}</Title>
                                    <img src={content?.image}></img>
                                    <Content>{content?.contents}</Content>
                                </ContentsBox>
                            )
                        })}
                    </>
                )
            })}
            {pageO && loading && <Loader />}
        </>
    )
}

const ContentsBox = styled.div`
    width: 100%;
    padding: 1rem 0;
    border-bottom: 2px solid #eee;

    img {
        width: 100%;
    }
`

const Title = styled.div`
    width: 100%;
    padding-left: 1rem;
    font-size: 1rem;
`

const Content = styled.div`
    width: 100%;
    font-size: 0.8rem;
    padding-left: 1rem;
`

export default memo(Contents)
