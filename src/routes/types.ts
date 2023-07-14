import { FC, ReactNode } from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'

type RouterMap = {
  '/': ReactNode
  '*': ReactNode
  '/accounts': ReactNode
}

export type SupportPath = keyof RouterMap

export const CustomRoutes = Routes
export const CustomRoute = Route as FC<RouteProps & { path?: SupportPath; element: ReactNode }>
