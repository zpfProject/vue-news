<template>
	<div class="container">
		<!-- <img :src="require('@/assets/imgs/tq_qingtian.png')" alt=""> -->
		<div :style="{ 'background-image': 'url('+ require('@/assets/imgs/tq_qingtian.png') +')' }" class="top" v-for="item in weatherList">
				<div class="dingwei">
					<i class="iconfont icon-jiahaoyou"></i>
					<span>北京市</span>
					<i class="iconfont icon-dingwei"></i>
				</div>
				<div class="content">
					<div class="left">
						<div class="wendu">
							{{ item.temp }}
						</div>
						<div class="richu">
							<div>
								<img :src="require('@/assets/imgs/wendu.png')" alt=""><span> {{ item.weather }} </span>
							</div>
							<div class="rc">
								<img :src="require('@/assets/imgs/richu.png')" alt=""><span> {{ item.daily[0].sunrise }} </span>
							</div>
						</div>
					</div>
					<div class="right">
						<div class="fengxiang">
							<img :src="require('@/assets/imgs/fengxiang.png')" alt=""><span> {{ item.winddirect }} </span><span> {{ item.windpower }} </span>
						</div>
						<div class="rc">
						<img :src="require('@/assets/imgs/riluo.png')" alt=""><span> {{ item.daily[0].sunset }} </span>
						</div>
					</div>
				</div>
				<div class="kqzs">
					<p>空气指数:<span> {{ item.aqi.quality }} </span></p>
				</div>
		</div>
		<div v-for="(item, index) in week">
			<div class="week">
				<div class="left"><span> {{ item.week }} </span></div>
				<div class="center"><img :src="require('@/assets/imgs/' + item.day.img + '.png')" alt=""></div>
				<div class="right"><span>{{ item.night.templow }}°C~{{ item.day.temphigh }}°C</span></div>
			</div>
		</div>
		<!-- 正在加载 loading 状态 -->
    <div class="loading" v-show="!weatherList.length">
      <img :src="require('@/assets/imgs/loading.gif')" alt="">
    </div>
	</div>
</template>

<script>
	// 引入请求数据的方法
  import { getWeatherList, getCityList } from '@/common/js/getData'

  export default {
  	data() {
  		return {
  			weatherList: [],
  			week:[]
  		}
  	},
  	created () {
  		this._getWeatherList()
  	},
  	methods: {
  		_getWeatherList () {
	  		getWeatherList().then((res) => {
	  			this.weatherList.push(res.data.result.result)
	  			this.week = res.data.result.result.daily
	  			console.log(this.week)
	  		}).catch((error) => {
	  			console.log(error);
	  		})
	  	}
  	}
  }

</script>

<style scoped>
	.container{
		margin-top: 0.7rem;
	}
	.container>.top{
		width: 100%;
		height: 15.25rem;
		/*background: #6FABCF;*/
		background: no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
	}
	.container>.top>.dingwei{
		padding-top: 0.5rem;
		padding-left: 0.5rem;
		color: #fff;
	}
	.container>.top>.dingwei>i:last-child{
		font-size: 0.8rem;
	}
	.container>.top>.dingwei>span{
		font-size: 0.9rem;
	}
	.container>.top>.content{
		width: 100%;
		height:9.5rem;
	}
	
	.container>.top>.kqzs{
		width: 100%;
		height: 1.5rem;
		margin-top: 1rem;
		font-size: 0.8rem;
		margin-left: 0.8rem;
		color: #fff;
		letter-spacing: 0.2rem;
	}
	.content>.left{
		width: 50%;
		height: 100%;
		/*background: pink;*/
		float: left;
	}
	.content>.left>.wendu{
		float: left;
		font-size: 4rem;
		margin-top: 2.5rem;
		margin-left: 1rem;
		color: #fff;
	}
	.content>.left>.richu{
		margin-top: 2.5rem;
		float: left;
		margin-left: 0.1rem;
	}
	.content>.left>.richu>.rc{
		padding-top: 1.5rem;
	}
	.content>.left>.richu img{
		width: 1.2rem;
		height: 1.2rem;
		float: left;
	}
	.content>.left>.richu span{
		font-size: 0.9rem;
		color:#fff;
		margin-left: 0.7rem;
	}
	.content>.right{
		float: left;
		width: 50%;
		height: 100%;
		/*background: red;*/
	}
	.content>.right>.fengxiang{
		margin-top: 2.5rem;
	}
	.content>.right>.rc{
		padding-top: 1.5rem;
	}
	.content>.right img{
		width: 1.2rem;
		height: 1.2rem;
		float: left;
	}
	.content>.right span{
		font-size: 0.9rem;
		color:#fff;
		margin-left: 0.7rem;
	}

	.week{
		width: 100%;
		height: 3.5rem;
		border-bottom: 0.05rem solid #D6D6D6;
	}
	.week>div{
		float: left;
		width: 33.3%;
		/*margin-top: 1.5rem;*/
		color: #393939;
		font-size: 0.9rem;
		font-weight: 500;
	}
	.week>.left{
		text-align: left;
		margin-top: 1.5rem;
	}
	.week>.left>span{
		margin-left: 1rem;
	}
	.week>.center{
		text-align: center;
		margin-top: 1.2rem;
	}
	.week>.center>img{
		width: 1.5rem;
		height: 1.5rem;
	}
	.week>.center>i{
		font-size: 1.5rem;
	}
	.week>.right{
		text-align: right;
		margin-top: 1.5rem;
	}
	.week>.right>span{
		margin-right: 1rem;
	}
	.loading{
    width: 6rem;
    margin: 0 auto;
    margin-top:10rem;
  }
  .loading>img{
    width: 100%;
  }
</style>
