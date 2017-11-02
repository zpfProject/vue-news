<template>
	<div id="nav">
		<header>
			<!-- <h3>每日必看</h3> -->
			<mt-header fixed title="每日比看"></mt-header>
		</header>
		<!-- <ul>
			<li><router-link to="/NewsList/tt">头条</router-link></li>
			<li><router-link to="/NewsList/yl">娱乐</router-link></li>
			<li><router-link to="/NewsList/js">军事</router-link></li>
			<li><router-link to="/NewsList/ty">体育</router-link></li>
			<li><router-link to="/NewsList/kj">科技</router-link></li>
			<li><router-link to="/NewsList/nx">女性</router-link></li>
			<li><router-link to="/NewsList/jk">健康</router-link></li>
		</ul> -->
	</div>
</template>
<script>
	
</script>
<style scoped>
	.mint-header.is-fixed{
		/*height: 3rem;*/
		/*font-size: 1.05rem;*/
	}
	#nav>header{
		width: 100%;
		height:2.5rem;
		background: #3678EE;
		position: fixed;
		top: 0;
		left: 0;
	}
	#nav>header>h3{
		color: #fff;
		font-size: 1.05rem;
		line-height: 2.5rem;
		text-align: center;
	}
	#nav{
		width:100%;
		height:1.8rem;
		line-height:2rem;
		background: #f6f6f6;
	}
	#nav ul{
		width: 100%;
		height: 1.8rem;
		border-bottom: 0.01rem solid #f8f8f8;
	}
	#nav ul li{
		float: left;
		width: 14%;
		/*padding: 0 0.9rem;*/
		text-align: center;
		/*border-bottom: 1px solid #ccc;*/
	}
	#nav ul li a{
		font-size: 1rem;
		color: #000;
		text-decoration: none;
		font-weight: 500;
	}

	#nav ul li a.router-link-active{
		color: #3678EE;
		font-weight: bold;
	}
</style>