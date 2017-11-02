import axios from 'axios'
import { newsParams, APIRootUrl, weatherParams, APIWeatherUrl, APICityListUrl } from '@/config/index'

// 请求新闻列表
export function getNewsList (params) {
  // let path = APIRootUrl + '/topics'
  let path = APIRootUrl
  // 关于默认参数的配置
  // Object.assign() 组合对象，从前到后，相同属性覆盖，不同属性继承
  let paramsData = Object.assign({}, newsParams, params)
  // console.log(paramsData)
  return axios.get(path, {
    params: paramsData
  })
}

// 请求天气列表
export function getWeatherList (params) {
	let pathWeathUrl = APIWeatherUrl
	let paramsDataWeath = Object.assign({}, weatherParams, params)
	return axios.get(pathWeathUrl, {
		params: paramsDataWeath
	})
}
s
// 请求天气列表
export function getCityList () {
  return axios.get(APICityListUrl)
}
