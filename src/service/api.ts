import { request } from '@/service/request'
import { initContract } from '@ts-rest/core'
import type { AppRoute, ClientInferRequest } from '@ts-rest/core'
import { z } from 'zod'

/** 定義request和response的資料結構 */
const OtpResponseSchema = z.object({
  Code: z.number(),
  Msg: z.string(),
  Data: z.object({
    OTP: z.number()
  })
})

/** 驗證用的API合約  */

const getOtpResponse = {
  method: 'GET',
  path: '/admin/otp',
  responses: {
    200: OtpResponseSchema
  },
  summary: 'Login'
} satisfies AppRoute

export const apiContract = initContract().router(
  {
    getOtpResponse
  },
  {
    pathPrefix: '/api'
  }
)
export interface ApiContract extends ClientInferRequest<typeof apiContract> {}

/* 取得登入OTP碼 */
export const getOtp = <T>(params: T) =>
  request({
    url: '/admin/otp',
    method: 'get',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

/* 登入 */
export const userLogin = <T>(params: T) =>
  request({
    url: '/admin/login',
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

/* Dashboard overview */
export const getOverview = <T>(params: T) =>
  request({
    url: '/admin/dashboard',
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

/* get img */
export const getImg = <T>(params: T) =>
  request({
    url: '/admin/image/r',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    params
  })

/* get img */
export const removeImg = <T>(params: T) =>
  request({
    url: '/admin/image/d',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    params
  })

/* Get goods list */
export const getGoodsList = <T>(params: T) =>
  request({
    url: '/admin/goods/r',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    params
  })

/* add goods */
export const addGoods = <T>(params: T) =>
  request({
    url: '/admin/goods/c',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    params
  })

/* update goods */
export const updateGoods = <T>(params: T) =>
  request({
    url: '/admin/goods/u',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    params
  })

/* remove goods */
export const removeGoods = <T>(params: T) =>
  request({
    url: '/admin/goods/d',
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

/* remove goods specs */
export const removeGoodsSpec = <T>(params: T) =>
  request({
    url: '/admin/goods/specs/d',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    params
  })

/* Get goods type list */
export const getGoodsType = <T>(params: T) =>
  request({
    url: '/admin/goods/goodstype/r',
    method: 'get',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

/* add goods type */
export const addGoodsType = <T>(params: T) =>
  request({
    url: '/admin/goods/goodstype/c',
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

/* update goods type */
export const updateGoodsType = <T>(params: T) =>
  request({
    url: '/admin/goods/goodstype/u',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    params
  })

/* remove goods type */
export const removeGoodsType = <T>(params: T) =>
  request({
    url: '/admin/goods/goodstype/d',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    params
  })

/* Admin List */

/* get Admin List */
export const getAdminMembers = <T>(params: T) =>
  request({
    url: '/admin/member/backstage/r',
    method: 'get',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

export const addAdminMembers = <T>(params: T) =>
  request({
    url: '/admin/member/backstage/c',
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

export const updateAdminMembers = <T>(params: T) =>
  request({
    url: '/admin/member/backstage/u',
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

export const removeAdminMembers = <T>(params: T) =>
  request({
    url: '/admin/member/backstage/d',
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
    params
  })

/* Permissions */

export const getAdminPermissions = <T>(params: T) =>
  request({
    url: '/admin/permission/r',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    params
  })

export const updateAdminPermissions = <T>(params: T) =>
  request({
    url: '/admin/permission/u',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    params
  })
