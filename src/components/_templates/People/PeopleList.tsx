import { Avatar, Divider, List, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { DOWNLOAD_SIZE, GENDER, OPTIONS } from 'src/constants/Text'
import { IUser } from 'src/redux'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/action'
import { getIsLoading, getUserInfo } from 'src/redux/users/selecor'
import './People.scss'
import { PeopleFilter } from './PeopleFilter'

export const PeopleList = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(getUserInfo)
  const { isLoading } = useAppSelector(getIsLoading)
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [pageCounter, setPageCounter] = useState(1)

  useEffect(() => {
    setFilteredUsers(users)
  }, [users])

  const loadMoreData = () => {
    if (isLoading) {
      return
    }
    dispatch(requestUserInfo(pageCounter, DOWNLOAD_SIZE))
    setPageCounter(pageCounter + 1)
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <div className="people_wrapper">
      <PeopleFilter setFilteredUsers={setFilteredUsers} />
      <div id="scrollableDiv">
        <InfiniteScroll
          className="scroll"
          dataLength={filteredUsers.length}
          next={loadMoreData}
          hasMore={filteredUsers.length < 100}
          loader={<div className="loading">...</div>}
          endMessage={<Divider plain>That's all</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            className="people_list"
            dataSource={filteredUsers}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={`${item.first_name} ${item.last_name} ${item.is_active} ${item.role} ${item.gender} ${item.age}`}
                  description={item.email}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  )
}
