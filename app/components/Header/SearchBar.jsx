import { InfoCircleOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Tooltip } from 'antd'
import React from 'react'

const SearchBar = () => {
  return (
    <div><Input
    placeholder="Search Here" className='!bg-white text-base'
    
    suffix={
      <Tooltip title="Extra information">
        <SearchOutlined style={{
            color: 'rgba(0,0,0,.45)',
          }}  />
      </Tooltip>
    }
  /></div>
  )
}

export default SearchBar