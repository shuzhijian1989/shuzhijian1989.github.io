<style lang="less" scope>
	.bar{
		position: absolute;
		height: 42px;
		width: 100%;
		top: 45px;
		border-bottom: 1px solid #e5e5e5;
		background: #fff;
		.wrap{
			height: 42px;
			line-height: 40px;
			display: flex;
			a{
				position: relative;
				display: block;
				height: 41px;
				width: 33.33%;
				text-align: center;
				font-size: 14px;
				color: #999;
				b{
					color: #f34f50;
				}
			}
			a.cur{
				border-bottom: 2px solid #219afe;
				color: #219afe;
			}
			a:before{
				content: "";
				display: block;
				position: absolute;
				width: 1px;
				height: 23px;
				background: #e4e4e4;
				top: 50%;
				margin-top: -11px;
			}
			a:first-child:before{
				display: none;
			}
		}
	}
</style>
<template>
	<div class="bar">
		<slot name="wrap">

		</slot>
	</div>
</template>
