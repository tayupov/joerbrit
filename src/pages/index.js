import React from "react"
import styled from 'styled-components'

import './index.css'

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -89px;
    margin-top: -89px;
`

export default () =>
    <Container>
        <img className="image" src="https://i.imgur.com/sMPBu6M.png" alt="" />
    </Container>
