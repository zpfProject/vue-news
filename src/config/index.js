// 定义请求新闻列表时的默认数据
export const newsParams = {
  channel: '头条', 
  num: 10,
  start: 0,
  appkey: 'b7e68f177915b259b6d2c9d6be441850'
}

const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

// 定义数据请求新闻的的API url地址
export const APIRootUrl = API_PROXY + 'https://way.jd.com/jisuapi/get'

// 定义请求天气列表时的默认数据
export const weatherParams = {
	city: '北京',
	appkey: 'b7e68f177915b259b6d2c9d6be441850'
}

// 定义数据请求天气API url地址
export const APIWeatherUrl = API_PROXY + 'https://way.jd.com/jisuapi/weather'

// 定义天气
export const APICityListUrl = API_PROXY + 'https://way.jd.com/jisuapi/weather1?appkey=b7e68f177915b259b6d2c9d6be441850'
