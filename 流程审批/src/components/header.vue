
<template>
<header>
	<a href="javascript:;" onclick="window.history.go(-1)" class="left"></a>
	{{title}}
	<a href="#/publish" class="new" v-if="management.indexOf('0') != -1"></a>
	<a href="/iapp/home" class="right"></a>
</header>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {
    	management:management,
    }
  },
  props: {
  	title: {
  		type: String,
  		default: ''
  	}
  }
}
</script>
<style lang="less" scope>
	header{
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		height: 45px;
		line-height: 45px;
		background: #219afe;
		padding: 0;
		color: #fff;
		font-size: 19px;
		text-align: center;
		.left{
			width: 45px;
			height: 45px;
			position: absolute;
			left: 0;
			top: 0;
		}
		.left:before{
			content: "";
			display: block;
			position: absolute;
			border-left: 2px solid #fff;
			border-top: 2px solid #fff;
			transform: rotate(-45deg);
			width: 12px;
			height: 12px;
			left: 20px;
			top: 50%;
			margin-top: -7px;
		}
		.new{
		    display: block;
            position: absolute;
            right: 50px;
            top: 0;
            width: 45px;
            height: 45px;
		 }
		 .new:before{
		 	content: "";
		    position: absolute;
            display: block;
            width: 30px;
            height: 30px;
            top: 50%;
            margin-top: -15px;
            right: 12px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRBQjZEM0ZCN0NBMDExRTc4QjFDQ0Q2NTFFRDg2RTE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRBQjZEM0ZDN0NBMDExRTc4QjFDQ0Q2NTFFRDg2RTE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REFCNkQzRjk3Q0EwMTFFNzhCMUNDRDY1MUVEODZFMTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REFCNkQzRkE3Q0EwMTFFNzhCMUNDRDY1MUVEODZFMTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4vt38oAAAB4ElEQVR42uyYv0sDMRTHk2tF/IGIg+Ci/4Kd3ASdhDoqVNFBcOzoIA4uUtvuLqJYa3VyFnFQcFMnF3FwcZO6CqK2Gr+RtDyOXHvXu8QOffDptbnk+PAuIa/hQgjWBrEGXsBJnDQOgSkQA9UWHuqAb3AB3n2O4aAIltXvMpMZAnPgXkQTW+qZzYiDgmtsSt5Igi8RXWz6kIlpZLKgh+PjBqmaUK9pB5yp18ZbeGVv4A58Nugnn70HVkhbFmz8fYNQVRnu+kx1GLgmMznah5EbCxaESi6ZvLsPFUoZFJFz5lAzZ1gjoUVDMrrVtO3V37SQzMyBXxnTQtxjabP/EjpuNoFtCTmgGDQzpoS6gkxg00JO0AlsUsjRZCbjY9woSICBqIVKjbYDD6TEs+qfrrU7IQurQXAElkhbHqz7GNsHxkgtVt+hw0SSFFdBZGT8kKqgGpVQWV1lHZwLIOMZ8ZDjL8Es6AWnURTXYYWEKugiC4e1WXSEOkIdIZtCtk8dRDOhimWhD50HFZq0LJTQ7RSy4QpMgzR4Bddq9+WGROSRzQjIqP/5Mm7r5zMoimZwPXcNqhgW6ia/C2BVlSOsVr3NgydhP/ZBP60kOTnSk2kcB8NqBZhadVydsD2CB/fNXwEGALPeKUSUFjtkAAAAAElFTkSuQmCC) center center no-repeat;
            background: url();
            background-size: 22px;
		 }
		.right{
			display: block;
			position: absolute;
			right: 0;
			top: 0;
			width: 45px;
			height: 45px;
		}
		.right:before{
			content: "";
			position: absolute;
			display: block;
			width: 30px;
			height: 30px;
			top: 50%;
			margin-top: -15px;
			right: 12px;
			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkREOTNCRkVDN0NBMDExRTc5OUI1OTNDOTA3RDExNzI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkREOTNCRkVEN0NBMDExRTc5OUI1OTNDOTA3RDExNzI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REQ5M0JGRUE3Q0EwMTFFNzk5QjU5M0M5MDdEMTE3MjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REQ5M0JGRUI3Q0EwMTFFNzk5QjU5M0M5MDdEMTE3MjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kRMkcAAADmElEQVR42uyYS0hUURjHveNjVEhSdIzaRFujRURFiWmhRiZImCb2QKkI3US5qAhatHJh9qCFFUIFSWUvSggrU3u5itqZ+CIow1LKyFfO3P4H/le+LveOZ2YwCvrg58ydc843//Odc77zOYZpmlHzbLmgGiwDj8F50OfaG4Jilah5ogxMm7/bEMhxG6P+JM6TmFIwSRFPwGkwyudPINNpnCGWbB3I1lyGaXAX9Lq0l4KrIBY8BUVgDGSBe2AhGAGF4JV9yRS5Qr2udYOVDrPcLpapDSTb2rPBCNvVa5Y9Qgug6wHVvwedwAsMl9lPgXyQytkW2SJzBcSBR2AHGHXwsQk0gTRGqhi0WxFKBwNUXAW83FduqPYa9h8UsysXe6YFpM6xx/LAZ/ZXq7PR2tQ+0MuGYs0Nu5P9e/lcAqaEGJ+mnzyxVZS4FR5rK/HVq7mprX5fQTqo5TK1ggowrOmnlcs6zC1Q44kw6U0y4S0FP8DeEMRIUcf5PjtSQQaFWKlgVZh+1vJ1PFJBSaAbtIBk0AByQvRRDyr5/kKkghIYmf3gBY/xLR5rHasDB/lejTsbriD7jfyR+aiDkWoGW4KM91DMIT7fALvAjHXs+0I89nsc8pDlq51tX0CBw1gPqBMZvwkkyMvVR8fKjoHFTJaLXFDtDez/zuELl4BOtg+DzaItBtQLMddBvNNt3yg6fWDCG3Sgn+2WnXCJoBL1XCS8fH4mI3NTRkYKUqSB22BG82L9Bi6DlCDLqqL5kv0nwFsxvtkeGafyQ1kBSOEF6mbR3MQdGptfZd9rrBrlMT/q9h3GHyhhla1nilDVRE+wjjG20qFS3FOmS2Y2WVKcYu6Rpu6x3aJ0MZnJVYkRoO80fu+Ayjvgjb1AU1GqAOMhFmhDVslAH0fEja9rPWCNfQ+pRPYQrAbPwB3OxClpBriHykAGaGNWXs5SNZXjuzjeyYcfJIIDwMdIH5YRkomxTDMxVrN/P5838NkPMjR9nOOYS/Jzj5h5lMuMnGzCNs4U5YhfY3y02GcB+50Sbtnh9rkRyXH0RP1l9l/QPy9I9x7xByncdH2YboIMcYWMaTqbsv07FC2uolHNCU3axs46CIhcsFVV/lRvuMxK/YBQwufvNoFxLEVfBzn+ykc8yHS4T2d/H6o1w7N9zLBJLLjCsUKZqZW6n+AkVZezTJiZIymqeqgRXBRLXcWIbeOs/XNUGepXtDPgvmz4JcAA1qlLF6GpHwMAAAAASUVORK5CYII=) center center no-repeat;
			background-size: 22px;
		}
	}
</style>