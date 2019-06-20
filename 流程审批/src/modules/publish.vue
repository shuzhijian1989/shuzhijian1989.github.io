<style lang="less" scope>
	.content{
		overflow-y: auto!important;
		.detail{
			overflow: hidden;
			zoom: 1;
			min-height: 100%;
		}
	}
	ul,ol{
		list-style:none;
	}
	.weui-uploader__title{
		font-size: 16px;
		color: black;
	}
	.weui-dialog__btn.primary{
		color: #219afe;
	}
	.weui-cells{
		margin-bottom: 18px;
	}
	.weui-input,.weui-select{
		font-size: 15px;
	}
	.weui-textarea{
		font: 15px Arial;
	}
	.select-de{
		border: 1px solid #f3f3f3;
	}
	.dialog-chk{
		text-align: left;
	}
	.add-more{
		margin: auto;
		position: relative;
		padding-left: 24px;
		color: #219afe;
	}
	.add-icon{
		display: block;
		width: 16px;
		height: 16px;
		position: absolute;
		left: 0;
		top: 50%;
		margin-top: -8px;
		border: 1px solid #219afe;
		border-radius: 100%;
	}
	.add-icon:before,.add-icon:after{
		content: "";
		display: block;
		background: #219afe;
		position: absolute;
	}
	.add-icon:before{
		width: 10px;
		height: 1px;
		top: 50%;
		left: 50%;
		margin-left: -5px;
	}
	.add-icon:after{
		width: 1px;
		height: 10px;
		top: 50%;
		left: 50%;
		margin-top: -5px;
	}
	.people-list{
		.tit{
			padding: 10px 15px;
			border-bottom: 1px solid #f3f3f3;
			margin-bottom: 10px;
			span{
				color: #bababa;
				font-size: 13px;
				padding-left: 15px;
			}
		}
		.con{
			padding: 0 15px;
			.wraprule{
				display: flex;
				position: relative;
				&:before{
					content: "";
					position: absolute;
					width: 0;
					height: 100%;
					border-left: 1px solid #e6e6e6;
					left: 5px;
					top: 25px;
					z-index: 0
				}
				&:nth-last-child(1):before{
					height: 0;
				}
				.nav-left{
					display: inline-block;
					width: 10px;
					height: 10px;
					border-radius: 100%;
					background: #219afe;
					margin: 15px 10px 0 0;
				}
				.nav-right{
					flex: 1;
					background: #f5f5f5;
					padding: 15px;
					border-radius: 8px;
					margin-bottom: 20px;
					.wraprule-top{
						display: flex;
						margin-bottom: 10px;
						p{
							font-size: 15px;
							span{
								color: #999;
								padding-left: 10px;
							}
							&:nth-child(1){
								flex: 1
							}
							&:nth-child(2){
								color: #666;
							}
						}

					}

				}
			}
			.wrap{
				width: 48px;
				float: left;
				display: flex;
   				flex-wrap: wrap;
    			flex-direction: column;
    			align-items: center;
				.head-img{
					height: 30px;
					width: 30px;
					display: inline-block;
					border-radius: 100%;
					font-size: 10px;
					text-align: center;
					font-style: normal;
					line-height: 30px;
					color: #fff;
					background: #bac0d1;
				}
				.head-img.blue{
					background: #219afe;
				}
				.head-img.pink{
					background: #ffb0f4;
				}
				.head-img.head-icon{
					background: url(../img/approle.png) no-repeat center center;
					background-size: 100% 100%;
				}
				p{

					font-size: 10px;
					margin-bottom: 10px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}

		}
	}
	.weui-toast.weui-toast--text {
		transition: none;
		font-size: 14px;
		/*line-height: 32px;
		padding: 0 12px;*/
		width: initial;
    }
    .read-only{
    	-webkit-user-select:none;
    	-webkit-touch-callout:none;
    	height:44px;
    	line-height:44px;
    }
    .my-scroll{
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
    }
    .weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before,.toolbar .picker-button{
    	color: #219afe
    }
</style>
<template>
<div class="container">
<header  v-if="!detailState">
	<a href="javascript:;" onclick="window.history.go(-1)" class="left"></a>
	发起申请
	<a href="/iapp/home" class="right"></a>
</header>
	<div class="content no-data my-scroll" style="top: 45px;" v-if="!detailState">
		<div class="weui-grids">
			<a href="javascript:;" v-for="item in dataList" v-if="item.aflowProcess" @click="showDetail(item.aflowProcess)" class="weui-grid js_grid">
				<div class="weui-grid__icon">
					<img @error="setErrorImg" :src="'/api/service/image/'+item.aflowProcess.formVo.iconUrl">
				</div>
				<p class="weui-grid__label">&nbsp;{{item.aflowProcess.formVo.name}}&nbsp;</p>
			</a>
			<a href="javascript:;" v-for="item in dataList" @click="showDetail(item)" v-if="item.formVo" class="weui-grid js_grid">
				<div class="weui-grid__icon">
					<img @error="setErrorImg" :src="'/api/service/image/'+item.formVo.iconUrl">
				</div>
				<p class="weui-grid__label">&nbsp;{{item.formVo.name}}&nbsp;</p>
			</a>
		</div>
	</div>
	<header v-if="detailState && !organizationState">
		<a href="javascript:;" class="left" @click="hideDetail"></a>发起申请<a href="/iapp/home" class="right"></a>
	</header>
	<div class="content no-data my-scroll" style="top: 45px;" v-if="detailState && !organizationState">
		<div class="detail">
		<form id="publishForm" style="margin-top: 18px;padding-bottom: 55px">
			<template v-for="(item,index) in detail.formVo.items">
			<div class="weui-cells__title" v-if="item.componentName=='TableField'">明细</div>
			<div class="weui-cells">

				<template v-for="children in item.props.children" v-if="item.componentName=='TableField'">
				<div class="weui-cell" v-if="children.componentName=='TextField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-model="children.value" type="text" placeholder="请输入" v-if="children.props.required" data-validation="required" :data-validation-message="'请输入'+children.props.label">
						<input class="weui-input" v-model="children.value" type="text" placeholder="请输入" v-else>
					</div>
				</div>
				<div class="weui-cell" v-if="children.componentName=='MoneyField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-model="children.value" type="number" pattern="[0-9]*" placeholder="请输入" @change="count(index)" v-if="children.props.required" data-validation="required" :data-validation-message="'请输入'+children.props.label">
						<input class="weui-input" v-model="children.value" type="number" pattern="[0-9]*" placeholder="请输入" @change="count(index)" v-else>
					</div>
				</div>
				<div class="weui-cell" v-if="children.componentName=='TextareaField'" style="-webkit-align-items: self-start;align-items: self-start;">
					<div class="weui-cell__hd">
						<label class="weui-label" >{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<textarea class="weui-textarea" v-model="children.value" placeholder="请输入文本" rows="3" style="text-indent:0px"  v-if="children.props.required" data-validation="required" :data-validation-message="'请输入'+children.props.label"></textarea>
						<textarea class="weui-textarea" v-model="children.value" placeholder="请输入文本" rows="3" style="text-indent:0px"  v-else></textarea>
					</div>
				</div>
				<div class="weui-cell weui-cell_select weui-cell_select-after" v-if="children.componentName=='SelectField'">
					<div class="weui-cell__hd">
						<label for="" class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<select class="weui-select" v-model="children.value"  v-if="children.props.required" data-validation="required">
							<option v-for="opt in children.props.options" :value="opt">{{opt}}</option>
						</select>
						<select class="weui-select" v-model="children.value" v-else>
							<option v-for="opt in children.props.options" :value="opt">{{opt}}</option>
						</select>
					</div>
				</div>
				<div class="weui-cell weui-cell_access" v-if="children.componentName=='MultiSelectField'" style="padding: 0 15px;">
					<div class="weui-cell__hd">
						<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input type="text" v-if="children.props.required" class="weui-input read-only" :id="children.props.id" :placeholder="'请选择'+children.props.label" data-validation="required" :data-validation-message="'请选择'+children.props.label">
						<input type="text" v-else class="weui-input read-only" :id="children.props.id" :placeholder="'请选择'+children.props.label">
					</div>
					<div class="weui-cell__ft" style="width:0;"></div>
				</div>
				<div class="weui-cell weui-cell_access" v-if="children.componentName=='ExternalContactField'" @click="showOrganization">
					<div class="weui-cell__hd">
						<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<p></p>
					</div>
					<div class="weui-cell__ft"></div>
				</div>
				<div class="weui-cell" v-if="children.componentName=='WebSiteField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-model="children.value" type="text" placeholder="请输入" v-if="children.props.required" data-validation="required" :data-validation-message="'请输入'+children.props.label">
						<input class="weui-input" v-model="children.value" type="text" placeholder="请输入"   v-else>
					</div>
				</div>
				<div class="weui-cell" v-if="children.componentName=='NumberField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-model="children.value"  type="number" pattern="[0-9]*" placeholder="请输入"  v-if="children.props.required" data-validation="required" :data-validation-message="'请输入'+children.props.label">
						<input class="weui-input" v-model="children.value"  type="number" pattern="[0-9]*" placeholder="请输入"  v-else>
					</div>
				</div>
				<div class="weui-cell" v-if="children.componentName=='DDWebSiteField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-model="children.value"  type="text" placeholder="请输入">
					</div>
				</div>
				<div class="weui-cell" v-if="children.componentName=='DateField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd" v-if="children.props.format=='YYYY-MM-DD'">
						<input class="weui-input" v-model="children.value"  type="date" placeholder="请输入" >
					</div>
					<div class="weui-cell__bd" v-if="children.props.format=='YYYY-MM-DD hh:mm'">
          		<input class="weui-input" v-model="children.value"  type="datetime-local" placeholder="请输入">
          	</div>
				</div>
				<div class="weui-cell" v-if="children.componentName=='DateRangeField'" v-for="(lable,i) in children.props.label">
					<div class="weui-cell__hd">
						<label class="weui-label">{{lable}}<span v-if="children.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd" v-if="children.props.format=='YYYY-MM-DD'">
						<input class="weui-input" v-model="children.value[i]"  type="date" placeholder="请输入">
					</div>
					<div class="weui-cell__bd" v-if="children.props.format=='YYYY-MM-DD hh:mm'">
						<input class="weui-input" v-model="children.value[i]"  type="datetime-local" placeholder="请输入">
					</div>
				</div>
				<div class="weui-cell" v-if="children.componentName=='DDPhotoField'">
					<div class="weui-cell__bd">
						<div class="weui-uploader">
							<div class="weui-uploader__hd">
								<p class="weui-uploader__title">图片上传<span id="upload-image" v-if="children.props.required" style="color: red">*</span></p>
								<!-- <div class="weui-uploader__info">0/2</div> -->
							</div>
							<div class="weui-uploader__bd">
								<ul class="weui-uploader__files" id="uploaderFiles">
									<li v-for="imgSrc in localImg[`${children.props.id}`]" @click="delImage(children.props.id,imgSrc,$event)" class="weui-uploader__file" :style='{backgroundImage:"url("+imgSrc+")"}'>
										<!-- <img :src="imgSrc" alt="" > -->
									</li>
								</ul>
								<div class="weui-uploader__input-box" @click="addImage(children.props.id,children.props.numLimit,$event)">
									<!-- <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple=""> -->
								</div>
							</div>
						</div>
					</div>
				</div>
				</template>
				<div class="weui-loadmore" v-show='ok'>
					  <i class="weui-loading"></i>
					  <span class="weui-loadmore__tips">正在加载</span>
				</div>
				<a href="javascript:;" v-show='!ok' class="weui-cell weui-cell_link" @click="addTableField(index)" v-if="item.componentName=='TableField'">
					<div class="add-more"><span class="add-icon"></span>添加更多</div>
				</a>
				<div class="weui-cell" v-if="item.componentName=='TableField'&&moneyBool">
					<div class="weui-cell__hd">
						<label class="weui-label">总金额</label>
					</div>
					<div class="weui-cell__bd">
						<p v-if="tableField.length>0">{{moneySum}}</p>
						<p v-else>0</p>
					</div>
				</div>

				<div class="weui-cell" v-if="item.componentName=='TextField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
					<div v-if="item.props.required">
						<input :data-validation="'required,maxSize['+item.props.length+']'"
						:data-validation-message="vaildMessage(item)"
						class="weui-input" v-model="item.value" type="text" :placeholder="'请输入'+item.props.label">
					</div>
					<div v-else>
						<input class="weui-input" :data-validation="'maxSize['+item.props.length+']'" :data-validation-message="item.props.label+'长度不正确'" v-model="item.value" type="text" :placeholder="'请输入'+item.props.label">
					</div>
											</div>
				</div>

				<div class="weui-cell" v-if="item.componentName=='MoneyField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.branch" style="color: red">*</span></label>
					</div>
					<template v-if="item.props.branch">
					<div class="weui-cell__bd">
						<input class="weui-input" @change="addCondition(item)" v-model="item.value" data-validation="required" :data-validation-message="'请输入'+item.props.label"  type="number" pattern="[0-9]*" :placeholder="'请输入'+item.props.label">
						<!-- <input class="weui-input" v-else v-model="item.value" @change="addCondition(item)" type="number" pattern="[0-9]*" :placeholder="'请输入'+item.props.label"> -->
					</div>
					</template>
					<template v-else>
					<div class="weui-cell__bd">
						<input class="weui-input" v-if="item.props.required" v-model="item.value" data-validation="required" :data-validation-message="'请输入'+item.props.label"  type="number" pattern="[0-9]*" :placeholder="'请输入'+item.props.label">
						<input class="weui-input" v-else v-model="item.value" type="number" pattern="[0-9]*" :placeholder="'请输入'+item.props.label">
					</div>
					</template>
				</div>

				<div class="weui-cell" v-if="item.componentName=='TextareaField'" style="-webkit-align-items: self-start;align-items: self-start;">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<textarea class="weui-textarea" v-if="item.props.required" v-model="item.value" :data-validation="'required,maxSize['+item.props.length+']'"
                        :data-validation-message="vaildMessage(item)" placeholder="请输入文本" rows="3" style="text-indent:0px"></textarea>
						<textarea  style="text-indent:0px" class="weui-textarea" v-else :data-validation="'maxSize['+item.props.length+']'" :data-validation-message="item.props.label+'长度不正确'" v-model="item.value" :placeholder="'请输入'+item.props.label" rows="3"></textarea>
					</div>
				</div>

				<div class="weui-cell weui-cell_select weui-cell_select-after" v-if="item.componentName=='SelectField'">
					<div class="weui-cell__hd">
						<label for="" class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<select v-if="item.props.required" class="weui-select" data-validation="required" :data-validation-message="'请选择'+item.props.label" v-model="item.value">
							<option v-for="opt in item.props.options" :value="opt">{{opt}}</option>
						</select>
						<select v-else class="weui-select" v-model="item.value">
							<option v-for="opt in item.props.options" :value="opt">{{opt}}</option>
						</select>
					</div>
				</div>

				<div class="weui-cell weui-cell_access" v-if="item.componentName=='MultiSelectField'" style="padding: 0 15px;">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input type="text" v-if="item.props.required" class="weui-input read-only" :id="item.props.id" :placeholder="'请选择'+item.props.label" data-validation="required" :data-validation-message="'请选择'+item.props.label">
						<input type="text" v-else class="weui-input read-only" :id="item.props.id" :placeholder="'请选择'+item.props.label">
					</div>
					<div class="weui-cell__ft" style="width: 0"></div>
				</div>

				<div class="weui-cell weui-cell_access" v-if="item.componentName=='ExternalContactField'" @click="showOrganization">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<p></p>
					</div>
					<div class="weui-cell__ft"></div>
				</div>

				<div class="weui-cell" v-if="item.componentName=='WebSiteField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-if="item.props.required" v-model="item.value" type="text" :placeholder="'请输入'+item.props.label" data-validation="required,url" :data-validation-message="'请输入正确的'+item.props.label">
						<input class="weui-input" v-else v-model="item.value" type="text" :placeholder="'请输入'+item.props.label" data-validation="url" data-validation-message="请输入正确的网址">
					</div>
				</div>

				<div class="weui-cell" v-if="item.componentName=='NumberField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.branch" style="color: red">*</span></label>
					</div>
					<template v-if="item.props.branch">
					<div class="weui-cell__bd">
						<input class="weui-input" @change="addCondition(item)" v-model="item.value"  type="number" pattern="[0-9]*" :placeholder="'请输入'+item.props.label" data-validation="required" :data-validation-message="'请输入'+item.props.label">
					<!-- 	<input class="weui-input" v-else v-model="item.value" @change="addCondition(item)"  type="number" pattern="[0-9]*" :placeholder="'请输入'+item.props.label"> -->
					</div>
					</template>
					<template v-else>
					<div class="weui-cell__bd">
						<input class="weui-input" v-if="item.props.required" v-model="item.value"  type="number" pattern="[0-9]*" :placeholder="'请输入'+item.props.label" data-validation="required" :data-validation-message="'请输入'+item.props.label">
						<input class="weui-input" v-else v-model="item.value"  type="number" pattern="[0-9]*" :placeholder="'请输入'+item.props.label">
					</div>
					</template>
				</div>

				<div class="weui-cell" v-if="item.componentName=='DDWebSiteField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-if="item.props.required" v-model="item.value"  type="text" :placeholder="'请输入'+item.props.label" data-validation="required" :data-validation-message="'请输入'+item.props.label">
						<input class="weui-input" v-else v-model="item.value"  type="text" :placeholder="'请输入'+item.props.label">
					</div>
				</div>

				<div class="weui-cell" v-if="item.componentName=='DateField'">
					<div class="weui-cell__hd">
						<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd" v-if="item.props.format=='YYYY-MM-DD'">
						<input class="weui-input" v-if="item.props.required" v-model="item.value"  type="date" :placeholder="'请输入'+item.props.label" data-validation="required" :data-validation-message="'请输入'+item.props.label">
						<input class="weui-input" v-else v-model="item.value"  type="date" :placeholder="'请输入'+item.props.label">
					</div>
					<div class="weui-cell__bd" v-if="item.props.format=='YYYY-MM-DD hh:mm'">
          	<input class="weui-input" v-if="item.props.required" v-model="item.value"  type="datetime-local" :placeholder="'请输入'+item.props.label" data-validation="required" :data-validation-message="'请输入'+item.props.label">
          	<input class="weui-input" v-else v-model="item.value"  type="datetime-local" :placeholder="'请输入'+item.props.label">
         </div>
				</div>

				<div class="weui-cell" v-if="item.componentName=='DateRangeField'" v-for="(lable,i) in item.props.label">
					<template v-if="item.props.branch">
					<div class="weui-cell__hd">
						<label class="weui-label">{{lable}}<span style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd" v-if="item.props.format=='YYYY-MM-DD'">
						<input class="weui-input" v-model="item.value[i]"  type="date" @change="addCondition(item)" data-validation="required" :data-validation-message="'请输入'+item.props.label">
						<!-- <input class="weui-input" v-else v-model="item.value[i]"  type="date" @change="addCondition(item)"> -->
					</div>
					<div class="weui-cell__bd" v-if="item.props.format=='YYYY-MM-DD hh:mm'">
						<input class="weui-input"  v-model="item.value[i]"  type="datetime-local" @change="addCondition(item)" data-validation="required" :data-validation-message="'请输入'+item.props.label">
						<!-- <input class="weui-input" v-else v-model="item.value[i]"  type="datetime-local" @change="addCondition(item)"> -->
					</div>
					</template>
					<template v-else>
					<div class="weui-cell__hd">
						<label class="weui-label">{{lable}}<span v-if="item.props.required" style="color: red">*</span></label>
					</div>
					<div class="weui-cell__bd" v-if="item.props.format=='YYYY-MM-DD'">
						<input class="weui-input" v-if="item.props.required" v-model="item.value[i]"  type="date" data-validation="required" :data-validation-message="'请输入'+item.props.label">
						<input class="weui-input" v-else v-model="item.value[i]"  type="date">
					</div>
					<div class="weui-cell__bd" v-if="item.props.format=='YYYY-MM-DD hh:mm'">
						<input class="weui-input" v-if="item.props.required" v-model="item.value[i]"  type="datetime-local" data-validation="required" :data-validation-message="'请输入'+item.props.label">
						<input class="weui-input" v-else v-model="item.value[i]"  type="datetime-local">
					</div>
					</template>
				</div>

				<div class="weui-cell" v-if="item.componentName=='DDPhotoField'">
					<div class="weui-cell__bd">
						<div class="weui-uploader">
							<div class="weui-uploader__hd">
								<p class="weui-uploader__title">图片上传<span id="upload-image" v-if="item.props.required" style="color: red">*</span></p>
								<!-- <div class="weui-uploader__info">0/2</div> -->
							</div>
							<div class="weui-uploader__bd">
								<ul class="weui-uploader__files" id="uploaderFiles" >
									<li v-for="imgSrc in localImg[`${item.props.id}`]" @click="delImage(item.props.id,imgSrc,$event)" class="weui-uploader__file" :style='{backgroundImage:"url("+imgSrc+")"}'>
										<!-- <img :src="imgSrc" alt="" > -->
									</li>
								</ul>
								<div class="weui-uploader__input-box" @click="addImage(item.props.id,item.props.numLimit,$event)">
									<!-- <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple=""> -->
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			</template>
			<div class="weui-cells people-list">
				<div class="tit">审批人<span>管理员已设置默认审批员</span></div>
				<div class="con" v-if="auditor.content">
					<div class="wraprule" v-if="auditor.content[0].branch && condition>=0" v-for="(item,index) in branchAuditor">
						<span class="nav-left"></span>
						<div class="nav-right">
							<div class='wraprule-top'>
								<p v-if='item.approverType==1'>指定一级<span v-if='item.oneLevel!=1'>发起人的第{{item.oneLevel-0+1}}级负责人</span><span v-else>发起人的直接负责人</span></p>
								<p v-if='item.approverType==2'>连续多级</p>
								<p v-if='item.approverType==3'>指定成员</p>
								<p v-if='item.approverType==4'>固定角色<span>一组固定成员</span></p>
								<p v-if='item.nodeAuditType==2'>会签</p><p v-else>或签</p>
							</div>

							<ul>
							<template v-if='item.approverType==2&&item.totalUsers' v-for="users in item.totalUsers">
									<template v-if='users&&users.length>1'>
										<li class='wrap' @click='showrole(users)'>
											<div class="head-img head-icon"></div>
											<p>{{users.length+'人会签'}}</p>
										</li>
									</template>
									<template v-else>
										<li class='wrap' v-if='users' v-for="user in users">
											<div class="head-img" v-text="user.name.slice(-2)" ></div>
											<p v-text="user.name.slice(0,4)"></p>
										</li>
									</template>
								</template>
								<template v-else>
									<template v-if='item.approverType==4&&item.nodeAuditType==3'>

										<li class='wrap' v-if='roleBool&&roleBool[index]' v-for="user in roleBool[index]">
											<div class="head-img" v-text="user.name" ></div>
											<p v-text="user.name"></p>
										</li>
										<li class='wrap' @click='changerule(index,item)'>
											<div class="head-img" style="background: #fff;color: #999;font-size: 25px;">+</div>
											<input type="hidden" class="ruless" :id="'rules'+index">
										</li>
									</template>
									<template v-else v-for="users in item.totalUsers">
										<template v-for="user in users">
											<li class='wrap'>
												<div class="head-img" v-text="user.name.slice(-2)" ></div>
												<p v-text="user.name.slice(0,4)"></p>
											</li>
										</template>
									</template>
								</template>
							</ul>
						</div>
					</div>
					<div v-if="!auditor.content[0].branch" >
					<div class="wraprule" v-for="(item,index) in auditor.content[0].actionerConf.rules">
						<span class="nav-left"></span>
						<div class="nav-right">
							<div class='wraprule-top'>
								<p v-if='item.approverType==1'>指定一级<span v-if='item.oneLevel!=1'>发起人的第{{item.oneLevel-0+1}}级负责人</span><span v-else>发起人的直接负责人</span></p>
								<p v-if='item.approverType==2'>连续多级</p>
								<p v-if='item.approverType==3'>指定成员</p>
								<p v-if='item.approverType==4'>固定角色<span>一组固定成员</span></p>
								<p v-if='item.nodeAuditType==2'>会签</p><p v-else>或签</p>
							</div>
							<ul>
								<template v-if='item.approverType==2&&item.totalUsers' v-for="users in item.totalUsers">
									<template v-if='users&&users.length>1'>
										<li class='wrap' @click='showrole(users)'>
											<div class="head-img head-icon"></div>
											<p>{{users.length+'人会签'}}</p>
										</li>
									</template>
									<template v-else>
										<li class='wrap' v-if='users' v-for="user in users">
											<div class="head-img" v-text="user.name.slice(-2)" ></div>
											<p v-text="user.name.slice(0,4)"></p>
										</li>
									</template>
								</template>
								<template v-else>
									<template v-if='item.approverType==4&&item.nodeAuditType==3'>

										<li class='wrap' v-if='roleBool&&roleBool[index]' v-for="user in roleBool[index]">
											<div class="head-img" v-text="user.name" ></div>
											<p v-text="user.name"></p>
										</li>
										<li class='wrap' @click='changerule(index,item)'>
											<div class="head-img" style="background: #fff;color: #999;font-size: 25px;">+</div>
											<input type="hidden" class="ruless" :id="'rules'+index">
										</li>
									</template>
									<template v-else v-for="users in item.totalUsers">
										<template v-for="user in users">
											<li class='wrap'>
												<div class="head-img" v-text="user.name.slice(-2)" ></div>
												<p v-text="user.name.slice(0,4)"></p>
											</li>
										</template>
									</template>
								</template>
							</ul>
						</div>



						<!-- <div class="head-img" v-if="item.tag">
							<img src="../img/approle.png" style="width: 30px" />
						</div>
						<div class="head-img" v-else v-text="item.totalUsers[0].name.slice(-2)" :class="item.genderId==1?'blue':'pink'">
						</div>
						<p v-if="item.tag" v-text="item.tagName.slice(0,4)"></p>
						<p v-else v-text="item.totalUsers[0].name.slice(0,4)"></p> -->

					</div>


					</div>
				</div>
			</div>
			<div class="weui-cells people-list" v-if="CCP.content&&CCP.content.length>0">
				<div class="tit">抄送人<span v-if='CCP.content[0].position=="start"'>审批发起时通知抄送人</span>
					<span v-if='CCP.content[0].position=="finish"'>审批全部通过后通知抄送人</span>
					<span v-if='CCP.content[0].position=="start_finish"'>审批发起时和全部通过后通知抄送人</span>
				</div>
				<div class="con">
					<div class="wrap" v-for="item in CCP.content[0].rules">
					<div class="head-img" v-if="item&&item.genderId" v-text="item.name.slice(-2)" :class="item.genderId==1?'blue':'pink'">
						</div>
						<div class="head-img blue" v-else v-text="item.name.slice(-2)">
						</div>
						<p v-text="item.name.slice(0,4)"></p>
					</div>
				</div>
			</div>
			<div class="weui-btn-area">
				<a href="javascript:;" class="weui-btn weui-btn_primary" @click="submitData" style="background:#219afe">提交</a>
			</div>
		</form>
		</div>
	</div>
	<v-Nav v-if="!organizationState"></v-Nav>
	<v-Organization v-if="organizationState" v-on:inner="closeOrganization"></v-Organization>
</div>
</template>

<script>
import IScroll from 'iscroll'
import ajax from '../util/ajax'
import api from '../util/api'
import '../lib/cxvalidation.min.js'
export default {
    name: 'publish',
	mixins: [ajax],
	data () {
		return {
			//列表内容
			dataList: '',
			//详细内容
			detail: '',
			detailState: false,
			//滚动实例
			myScroll: '',
			//存放明细里面的表单
			tableField: [],
			//总金额
			moneySum:0,
			moneyBool:false,
			//部门组织
			organizationState:false,
			checkedData:[],
			checkedUserData:[],
			//审批人
			auditor: '',
			//分支审批人
			branchAuditor: '',
			//抄送人
			CCP: '',
			//分支条件
			condition: '',
			//本地图片id
			localImg: {},
			//暂存本地图片id
			tempLocalImg:[],
			//服务器图片
			serveImg: {},
			//多选暂存数据
			selectData: {},
			//明细缓存数据
			tempTableField: {},
			ok:false,
			//角色是否为空
			roleBool:[],
			//部门
			deHtml:"",
			deList:[],
			departmentId:"",
      approval_sub: null,
      approval_sub_id: null
		}
	},
	created() {
    var params = window.location.search;
    params = params.substr(1,params.length-1).split("&");
    for(var index in params) {
      var item = params[index].split("=");
      if(item[0] == "id") {
        this.approval_sub_id = item[1];
        break;
      }
    }
		this.updateData();
		this.fetchData(api.department+'?schoolId=' + selectedSchool.id + "&userId=" + user.id+'&_istype_='+selectedIdentity,'',(data) => {
			// this.$set('dataList',data);
				this.deList=data;
				this.deHtml='<div class="weui-cell weui-cell_select"><div class="weui-cell__bd"><select class="weui-select select-de" name="select1">';
				for (var i =  0; i <data.length; i++) {
					this.deHtml+='<option value="'+data[i].id+'">'+data[i].fullName+'</option>';
				}
				this.deHtml+='</select></div></div>';
			})

	},
	mounted() {

	},
	updated() {

		if(this.detailState){
			for(let i in this.selectData){
				var _items=[]
				for(let j in this.selectData[i]){
					_items.push({
						title: this.selectData[i][j],
						value: j
					})
				}
				$(`#${i}`).select({
					multi: true,
					items: _items
				})
				$(`#${i}`).focus(function(){
					document.activeElement.blur()
				})
			}
		}
	},
	methods: {
	vaildMessage(item){

      return '{"required":"'+item.props.label+'不能为空","maxSize":"'+item.props.label+'长度不正确"}';

	 },
		//部门组织方法
		showOrganization:function(data){
			this.organizationState=true
		},
		closeOrganization:function(data){
			if(data.state=='closeOrganization'){
				this.organizationState=false
				this.checkedData=data.checkedData
				this.checkedUserData=data.checkedUserData
			}
		},
		//end
		addImage(id,num,e) {
			var _vue = this
			this.localImg[id] = this.localImg[id] || []
			var _length = num - _vue.localImg[id].length
			//测试
			// _vue.localImg[id].push("http://192.168.1.127/api/service/image/5853d0a09ca4b15734df0903")
			// _vue.tempLocalImg.push("http://192.168.1.127/api/service/image/5853d0a09ca4b15734df0903")
			// _vue.uploadImage(id)
			// _vue.$forceUpdate()
			//正式
			wx.chooseImage({
				count: _length,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success: function (res) {
					for (let i in res.localIds) {
						_vue.localImg[id].push(res.localIds[i])
						_vue.tempLocalImg.push(res.localIds[i])
					}
					_vue.uploadImage(id)
					_vue.$forceUpdate()
					if(num==_vue.localImg[id].length){
						$(e.target).hide()
					}
				}
			})

		},
		delImage(id,localId,e) {
			var _index=this.localImg[id].indexOf('localId')
			this.localImg[id].splice(_index,1)
			this.serveImg[id].splice(_index,1)
			this.$forceUpdate()
			$(e.target).parent().next().show()
		},
		uploadImage(id) {
			var _vue = this;
			var localId = _vue.tempLocalImg.shift()
			this.serveImg[id] = this.serveImg[id] || []

			//测试
			// _vue.serveImg[id].push("测试serverimg id")
			//正式
			wx.uploadImage({
				localId: localId,
				isShowProgressTips: 1,
				success: function (res) {
					_vue.serveImg[id].push(res.serverId)
					if (_vue.tempLocalImg.length > 0) {
						_vue.uploadImage(id);
					}
				}
			})
		},
		updateData() {
			/*this.fetchData(api.approval+'?processStatus=PUBLISHED','',(data) => {
				this.dataList=data;
			})*/
			this.fetchData(api.approval+'/visible?usersId='+user.id+'&schoolId='+selectedSchool.id+'&sort=createTime,desc' ,'',(data) => {

		        if(data&&data.aflowProcess&&data.aflowProcess.content){
		        	// this.$set('dataList',data.aflowProcess.content);
              if(this.approval_sub_id) {
                for(var index in data.aflowProcess.content) {
                  if(data.aflowProcess.content[index].aflowProcess){
                    if(data.aflowProcess.content[index].aflowProcess.id == this.approval_sub_id) {
                      this.approval_sub = data.aflowProcess.content[index].aflowProcess;
                      this.showDetail(this.approval_sub);
                      return;
                    }
                  } else {
                    if(data.aflowProcess.content[index].id == this.approval_sub_id) {
                      this.approval_sub = data.aflowProcess.content[index];
                      this.showDetail(this.approval_sub);
                      return;
                    }
                  }
                }
              } else {
                this.dataList=data.aflowProcess.content;
              }
		        }


			})
		},
		setErrorImg(e) {
			e.srcElement.src=" "
		},
		showDetail(data) {
			var me=this;
			me.moneyBool=false;
			$.each(data.formVo.items,function(i,v){
				if(v.componentName=='TableField'){
					$.each(v.props.children,function(index,vl){
						if(vl.componentName=="MoneyField"&&vl.props.count){
							me.moneyBool=true;
						}
					})
				}
			})
			this.fetchData(api.approval+'/rule/checkDptProcess/'+data.id,'',(res) => {
					if(res){
						if(me.deList.length==1){
							me.modal(data,me.deList[0].id);
						}else if(me.deList.length){
							if(selectedIdentity==2||selectedIdentity==4){
								$.confirm({
									title: '请选择部门',
									text: me.deHtml,
									onOK: function () {
										me.modal(data,$('.select-de').val())
									}
								});
							}else{
								$.toast('流程含有部门，不支持您使用！','text');
								return false;
							}
						}else{
							$.toast('流程含有部门，不支持您使用！','text');
								return false;
						}
					}else{
						me.modal(data)
					}
				})
		},
		modal(data,deId){

			if(data.formVo.items){
				for(let i=0;i<data.formVo.items.length;i++){
					if(data.formVo.items[i].componentName=='TableField'){
						if(!!data.formVo.items[i].props.children){
							for(let j=0;j<data.formVo.items[i].props.children.length;j++){
								if(data.formVo.items[i].props.children[j].componentName=='MultiSelectField'){
									this.selectData[data.formVo.items[i].props.children[j].props.id]=data.formVo.items[i].props.children[j].props.options
									data.formVo.items[i].value=[]
								}else{
									data.formVo.items[i].props.children[j].value=[]
								}
							}
							this.tableField[i]=data.formVo.items[i].props.children.slice()
							this.tableField[i].sum=0
						}
						this.tempTableField[i]=[];
						$.extend(true,this.tempTableField[i],this.tableField[i]);
						data.formVo.items[i].value='';
					}else if(data.formVo.items[i].componentName=='MultiSelectField'){
						this.selectData[data.formVo.items[i].props.id]=data.formVo.items[i].props.options;
						data.formVo.items[i].value=[];
					}else{
						data.formVo.items[i].value=[];
					}
				}
			}
			//抄送人
			this.fetchData(api.approval+'/notifiers?processId='+data.id+'&userId='+user.id,'',(data) => {
				this.CCP=data
			})
			//审批人
			if(deId){
				this.fetchData(api.approval+'/rule?processId='+data.id+'&userId='+user.id+'&departmentId='+deId,'',(data) => {
					this.auditor=data;
					this.roleBool=[];
					// this.role(data);
				})
			}else{
				this.fetchData(api.approval+'/rule?processId='+data.id+'&userId='+user.id,'',(data) => {
					this.auditor=data;
					this.roleBool=[];
					// this.role(data);
				})
			}

			this.detail=data
			this.detailState=true
		},
		role(data){
			var _self=this;
			if(!data.content[0].branch){
				let items=data.content[0].actionerConf.rules;
				for (var i = 0 ; i < items.length; i++) {
					if(items[i].approverType==4&&items[i].nodeAuditType==3){
						_self.roleBool[i]=[];
					}


					// if(items[i].tag){
					// 	//审批人
					// 	let id=items[i].tag;
					// 	let name=items[i].tagName;
					// 	this.fetchData(api.approval+'/tag/user/list?approvalTagId='+id,'',(data) => {

					// 		if(data&&data.length){
					// 			_self.roleBool[id]=true
					// 		}else{
					// 			_self.roleBool[id]=false;
					// 			_self.roleBool.name=name;
					// 		$.toast('审批角色'+name+'不能为空，请重新设置！', "text")
					// 		}
					// 	})

					// }
				}
			}
		},
		changerule(n,data){
			var me=this;
			let items=[];
			let userObj=[];
			for(let item of data.totalUsers[0]){
				items.push({
					title: item.name,
				    value: item.userId
				})
				userObj[item.userId]=item
			}
			$('#rules'+n).select({
				  title: "选择审批人",
				  multi: true,
				  items: items,
				  onClose:function(obj){
				  	if(me.detailState&&obj.data.origins.length){
				  		data.user=[];
				  		me.roleBool[n]=[];
				  		for(let index in obj.data.origins){
				  			let id = obj.data.origins[index].value;
				  			me.$set(data.user,index,userObj[id]);
				  		}
				  		me.$set(me.roleBool,n,data.user);
				  	}
				  }
				})
			$('#rules'+n).select("open");
		},
		showrole(data){

			var html = '<div class="people-list"><div class="con" style="display:flex;flex-wrap: wrap;padding:0">';
			for(let v of data){
				html+='<div class="wrap">'
				if(v.genderId==1){
					html+='<div class="head-img blue">'+v.name.slice(-2)+'</div>';
				}else{
					html+='<div class="head-img pink">'+v.name.slice(-2)+'</div>';
				}
				html+='<p>'+v.name+'</p></div>';
			}

			html+='</div></div>';

			$.modal({
			  title: data.length+"人会签",
			  text: html,
			  buttons: [
			    { text: "取消", className: "default", onClick: function(){} },
			  ]
			});

		},
		banchrole(items){
			var _self=this;
			for (var i = 0 ; i < items.length; i++) {

				if(items[i].approverType==4&&items[i].nodeAuditType==3){
						if(!items[i].user){
							$.toast('审批人员不能为空，请选择审批人！', "text")
						}
					}
				}
		},
		addCondition(data) {
			if(data.componentName=='DateRangeField'){
				if(data.value.length>1){
					this.condition='';
					var _startTime=parseInt(data.value[0].replace(/[-,:,T]/g,""))
					var _endTime=parseInt(data.value[1].replace(/[-,:,T]/g,""))
					if(_endTime<=_startTime){
						$.toast('结束时间必须大于开始时间', "text")
							return false
					}
					this.condition=Math.abs(parseInt(data.value[0].split('-').join(''))-parseInt(data.value[1].split('-').join('')))

				}
			}else{
				this.condition=data.value
			}
		},
		addTableField(i) {
		    	this.ok=true;
				for(let j=0;j<this.tempTableField[i].length;j++){
					var _temp = {}
					$.extend(true,_temp,this.tempTableField[i][j])
					_temp.props.id=_temp.props.id+this.detail.formVo.items[i].props.children.length
				    if(this.detail.formVo.items[i].props.children[j].componentName=="MultiSelectField"){
	                   this.selectData[_temp.props.id]=this.detail.formVo.items[i].props.children[j].props.options
				    }
					this.detail.formVo.items[i].props.children.push(_temp)
		    	}
		    	this.ok=false;
		},
		count(i) {
			this.tableField[i].sum=0;
			for(let j=0;j<this.detail.formVo.items[i].props.children.length;j++){
				if(!!this.detail.formVo.items[i].props.children[j].props.count){
					if(!isNaN(parseFloat(this.detail.formVo.items[i].props.children[j].value))){
						this.tableField[i].sum += parseFloat(this.detail.formVo.items[i].props.children[j].value)
						this.moneySum=this.tableField[i].sum;
						if(this.moneyBool){
							//明细作为分支条件
							this.condition=this.moneySum;//condition变化引起审核人变化
						}

					}
				}
			}
		},
		hideDetail() {
	    if(this.approval_sub_id){
	      window.history.go(-1);
      } else {
        this.detailState=false
        this.detail=''
        this.tableField=[]
        this.auditor=''
        this.branchAuditor=''
        for(let i in this.selectData){
          $(`#${i}`).select("close")
        }
      }
		},
		subInfo() {
			var _approvers=[];

			if(!!this.auditor.content){
				if(this.auditor.content[0].branch){
					if(this.branchAuditor.length){
						_approvers=this.branchAuditor;
					}else{
						$.toast('不在设置范围内', "text")
						return false;
					}


				}else{
					if(this.auditor.content[0].actionerConf.rules.length){
						_approvers=this.auditor.content[0].actionerConf.rules;
					}else{
						$.toast('审批人不能为空！', "text")
						return false;
					}
				}
				var setPass=false;
				for (var i = 0 ; i < _approvers.length; i++) {
					if(_approvers[i].approverType==4&&_approvers[i].nodeAuditType==3){
						if(!_approvers[i].user){
							$.toast('审批人员不能为空，请选择审批人！', "text");
							return false;
						}else{
							_approvers[i].totalUsers[0]=_approvers[i].user
						}
					}
					if(_approvers[i].totalUsers){
						for(let v of _approvers[i].totalUsers){
							if(v.length){
								setPass=true;
							}
						}
					}

				}
				if(!setPass){
					$.toast('审批人不能为空!', "text");
					return false;
				}
			}else{
				$.toast("没有审批人", 'text')
				return false;
			}

			return {
				"sponsor": {
					"userId": user.id,
					"name": user.name
				},
				"schoolId": selectedSchool.id,
				"approvalFlow": {
					"aflowId": this.detail.id,
					"aflowName": this.detail.formVo.name,
					"sponsor": {
						"userId": user.id,
						"name": user.name,
					},
					"approvers": _approvers,
					"notifiers": (this.CCP.content&&this.CCP.content.length>0)?this.CCP.content[0].rules:null,
				},
				// "currentPersons":_approvers[0].totalUsers
			}
		},
		submitData(){
			var _vue=this
			cxValidation(document.getElementById('publishForm'), {
				success: function(result) {
					var _data=_vue.subInfo(),_items=JSON.parse(JSON.stringify(_vue.detail.formVo.items));
					if(_data){
					_data.approvalFlow.items=_items;
					}else{
						return false;
					}
					for(let i=0;i<_data.approvalFlow.items.length;i++){
						if(_data.approvalFlow.items[i].componentName=='TableField' && !!_data.approvalFlow.items[i].props.children){
							for(let j=0;j<_data.approvalFlow.items[i].props.children.length;j++){
								if(_data.approvalFlow.items[i].props.children[j].componentName=='DateRangeField'){
									if(!!_data.approvalFlow.items[i].props.children[j].value && _data.approvalFlow.items[i].props.children[j].value.length==2){
										var _startTime=_data.approvalFlow.items[i].props.children[j].value[0],_endTime=_data.approvalFlow.items[i].props.children[j].value[1]
										_startTime=parseInt(_startTime.replace(/[-,:,T]/g,""))
										_endTime=parseInt(_endTime.replace(/[-,:,T]/g,""))
										if(_endTime<_startTime){
											$.toast('结束时间必须大于开始时间', "text")
											return false
										}
									}
									if(_data.approvalFlow.items[i].props.children[j].value[0]){
										_data.approvalFlow.items[i].props.children[j].value[0]=_data.approvalFlow.items[i].props.children[j].value[0].replace(/T/g," ")
									}
									if(_data.approvalFlow.items[i].props.children[j].value[1]){
										_data.approvalFlow.items[i].props.children[j].value[1]=_data.approvalFlow.items[i].props.children[j].value[1].replace(/T/g," ")
									}
								}
								if(_data.approvalFlow.items[i].props.children[j].componentName=='DDPhotoField'){
									_data.approvalFlow.items[i].phone=true;
									if(_vue.serveImg[_data.approvalFlow.items[i].props.children[j].props.id] instanceof Array){
										_data.approvalFlow.items[i].props.children[j].value=_vue.serveImg[_data.approvalFlow.items[i].props.children[j].props.id].join()
									}else{
										//空图片
										if(_data.approvalFlow.items[i].props.children[j].props.required){
											$.toast('图片不能为空', "text")
											return false
										}else{
											_data.approvalFlow.items[i].props.children[j].value=""
										}

									}
								}
								if(_data.approvalFlow.items[i].props.children[j].value instanceof Array){
									_data.approvalFlow.items[i].props.children[j].value=_data.approvalFlow.items[i].props.children[j].value.join()
								}
							}
							//外面复制一份value
							_data.approvalFlow.items[i].children=_data.approvalFlow.items[i].props.children

						 }else	if(_data.approvalFlow.items[i].componentName=='DateField'&&_data.approvalFlow.items[i].value.length>0){
                           	_data.approvalFlow.items[i].value= _data.approvalFlow.items[i].value.replace(/T/g," ")
						 }else if(_data.approvalFlow.items[i].componentName=='DDPhotoField'){
							_data.approvalFlow.items[i].phone=true;
							if(_vue.serveImg[_data.approvalFlow.items[i].props.id] instanceof Array){
								_data.approvalFlow.items[i].value=_vue.serveImg[_data.approvalFlow.items[i].props.id].join()
							}else{
								//空图片
								if(_data.approvalFlow.items[i].props.required){
											$.toast('图片不能为空', "text")
											return false
										}else{
											_data.approvalFlow.items[i].value=""
										}

							}
						}else if(_data.approvalFlow.items[i].componentName=='MultiSelectField'){
							_data.approvalFlow.items[i].value=$(`#${_data.approvalFlow.items[i].props.id}`)[0].value
						}else if(_data.approvalFlow.items[i].componentName=='ExternalContactField'){
							var _target=[]
							_vue.checkedData.splice(_vue.checkedData.indexOf('myGroup:myGroup|我的群组'),1)
							for (let k in _vue.checkedData) {
								_target.push(_vue.checkedData[k].split('|')[0]);
							}
							_data.approvalFlow.items[i].value=_target.join()
						}else if(_data.approvalFlow.items[i].componentName=='DateRangeField'){
							if(!!_data.approvalFlow.items[i].value && _data.approvalFlow.items[i].value.length==2){
								var _startTime=_data.approvalFlow.items[i].value[0],_endTime=_data.approvalFlow.items[i].value[1]
								_startTime=parseInt(_startTime.replace(/[-,:,T]/g,""))
								_endTime=parseInt(_endTime.replace(/[-,:,T]/g,""))
								if(_endTime<_startTime){
									$.toast('结束时间必须大于开始时间', "text")
									return false
								}
							}
							if(_data.approvalFlow.items[i].value[0]){
								_data.approvalFlow.items[i].value[0]=_data.approvalFlow.items[i].value[0].replace(/T/g," ")
							}
							if(_data.approvalFlow.items[i].value[1]){
								_data.approvalFlow.items[i].value[1]=_data.approvalFlow.items[i].value[1].replace(/T/g," ")
							}
							_data.approvalFlow.items[i].value=_data.approvalFlow.items[i].value.join()
						}else{
							if(_data.approvalFlow.items[i].value instanceof Array){
								_data.approvalFlow.items[i].value=_data.approvalFlow.items[i].value.join()
							}
						}
					}
					if(!!_vue.auditor.content){
						if(!_vue.auditor.content[0].branch){
							_data.approvalFlow.auditType=_vue.auditor.content[0].actionerConf.type
						}else{
							_data.approvalFlow.auditType="other"
						}
					}
					_vue.subForm(api.approval+'/sponsor',_data,(data) => {
						$.toast("提交成功","text");
          			window.location.hash = "#/released";
         	})
				},
				error: function(result) {
					$.toast(result.message, "text");
				}
			})
		}
	},
	// beforeRouteLeave(){
	// 	this.hideDetail();


	// },
	watch: {
		condition(val,oVal){
			if(!!this.auditor.content[0].branchActionerConf){
				for(let i=0;i<this.auditor.content[0].branchActionerConf.multiRules.length;i++){
					if(i==this.auditor.content[0].branchActionerConf.multiRules.length-1){
						if(this.auditor.content[0].branchActionerConf.multiRules[i].upperBound=='0'&& val>=this.auditor.content[0].branchActionerConf.multiRules[i].lowerBound){
							this.branchAuditor=this.auditor.content[0].branchActionerConf.multiRules[i].rules
						}else{
							if(val<this.auditor.content[0].branchActionerConf.multiRules[i].upperBound && val>=this.auditor.content[0].branchActionerConf.multiRules[i].lowerBound){
								this.branchAuditor=this.auditor.content[0].branchActionerConf.multiRules[i].rules
							}
						}
					}else{
						if(val<this.auditor.content[0].branchActionerConf.multiRules[i].upperBound && val>=this.auditor.content[0].branchActionerConf.multiRules[i].lowerBound){
							this.branchAuditor=this.auditor.content[0].branchActionerConf.multiRules[i].rules
						}
					}
				}
				var _last = this.auditor.content[0].branchActionerConf.multiRules[this.auditor.content[0].branchActionerConf.multiRules.length-1].upperBound,_first=this.auditor.content[0].branchActionerConf.multiRules[0].lowerBound
				if(!_last=='0' && val>=_last){
					this.branchAuditor=[]
					$.toast('不在设置范围内', "text")
				}
				if(val<_first){
					this.branchAuditor=[]
					$.toast('不在设置范围内', "text")
				}
				// this.banchrole(this.branchAuditor);
			}
		},
		detailState(){
			if(!this.detailState){
				$('.ruless').select('close');
				$.closeModal();
			}
		}
	}
}
</script>
