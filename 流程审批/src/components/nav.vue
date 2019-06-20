<style lang="less" scope>
	.nav{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		position: absolute;
		z-index: 2;
		bottom: 0;
		width: 100%;
		background-color: #fcfcfc;
		.item{
			display: block;
			-webkit-box-flex: 1;
			-webkit-flex: 1;
			flex: 1;
			padding: 7px 0 0;
			-webkit-tap-highlight-color: transparent;
			.nav-icon{
				width: 20px;
				height: 20px;
				margin: auto;
				img{
					width: 100%;
					height: auto;
				}
			}
			.nav-label{
				text-align: center;
				color: #888;
				font-size: 12px;
				margin: 3px 0;
			}
			.cur{
				color: #219afe;
			}
		}
	}
	.nav:before{
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 1px;
		border-top: 1px solid #dedede;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
	}
</style>
<template>
	<div class="nav">
		<router-link to="/released" class="item" v-if="management.indexOf('2') != -1">
			<!--<div class="nav-icon">-->
				<!--<img v-if="$route.path=='/released'" src="../img/released-c.png">-->
				<!--<img v-else src="../img/released.png">-->
			<!--</div>-->
			<p class="nav-label" :class="[$route.path=='/released'?'cur':'']">我发起的</p>
		</router-link>
		<router-link to="/" class="item" v-if="management.indexOf('1') != -1">
			<!--<div class="nav-icon">-->
				<!--<img v-if="$route.path=='/'" src="../img/mine-c.png">-->
				<!--<img v-else src="../img/mine.png">-->
			<!--</div>-->
			<p class="nav-label" :class="[$route.path=='/'?'cur':'']">我审批的</p>
		</router-link>
		<router-link to="/mine" class="item" v-if="management.indexOf('3') != -1">
			<!--<div class="nav-icon">-->
				<!--<img v-if="$route.path=='/mine'" src="../img/publish-c.png">-->
				<!--<img v-else src="../img/publish.png">-->
			<!--</div>-->
			<p class="nav-label" :class="[$route.path=='/mine'?'cur':'']">抄送我的</p>
		</router-link>

	</div>
</template>
<script>
export default {
	data () {
		return {
			management:management
		}
	}
}
</script>
