import React from 'react'
import { News, Notes, UserInfo } from '../components'

const Dashboard = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      padding: '2rem 6rem',
      backgroundColor: 'black',
      position : 'relative'
    }}>
        <UserInfo />
        <Notes />
        <News />
    </div>
  )
}

export default Dashboard
