import React, { memo } from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

const Loader = () => {
    return (
        <LoaderWrap>
            <ReactLoading type="spin" width="30px" height="30px" color="#A593E0" />
        </LoaderWrap>
    )
}

const LoaderWrap = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`

export default memo(Loader)
