import React, { FC } from 'react'
import { MdAssignment } from 'react-icons/md'
import { CustomRoutes, CustomRoute } from './types'
import { Account, Dashboard } from '@/pages'
import { MainLayout, SideBarMenu } from '@/components'

export const CustomRouter: FC = () => {
  return (
    <CustomRoutes>
      <CustomRoute
        path='/'
        element={
          <MainLayout
            onSideBarMenus={() => <SideBarMenu resource='accounts' icon={MdAssignment} />}
          />
        }
      >
        <CustomRoute index element={<Dashboard />} />
        <CustomRoute path='/accounts' element={<Account />} />
      </CustomRoute>
    </CustomRoutes>
  )
}
