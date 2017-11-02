<template>
	<footer>
		<ul>
			<li><router-link id="routerlink" to="/NewsList/">新闻</router-link></li>
			<li><router-link to="/Weather/">天气</router-link></li>
		</ul>
	</footer>
</template>

<script>
	
</script>

<style scoped>
	footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 2.5rem;
		background: #fff;
		margin-top: 1rem;
		border-top: 0.05rem solid #ccc;
	}
	footer>ul>li{
		float:left;
		width: 50%;
		text-align: center;
		line-height: 2.5rem;
	}
	footer>ul>li>a{
		color: #616161;
		text-decoration: none;
		font-size: 1rem;
		letter-spacing: 0.3rem;
		display: block;
	}
	footer>ul>li>a.router-link-active{
		color: #fff;
		background:#26A2FF;
	}
</style>