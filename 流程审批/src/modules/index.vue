<style lang="less" scope>
   .green{
     color:#219afe!important;
   }
	.content{
		position: absolute;
		z-index: 1;
		top: 105px;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #f3f3f3;
		overflow: hidden;
		ul.list{
			li{
				list-style: none;
				/*border-bottom: 1px solid #e5e5e5;*/
				overflow: hidden;
				position: relative;
			    background: #fff;
			    margin-bottom: 18px;
				.time{
					font-size: 13px;
					padding: 8px 0;
					color: #999;
					span{
						display: inline-block;
						overflow: hidden;
					}
					span:first-child{
						color: #219afe;
						width: 50px;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
				.tit{
					background: url(../img/tit.png);
					padding: 8px 0 0 22px;
					background-size: 16px;
					background-repeat: no-repeat;
					background-position: 0px 12px;
				}
			}
		}
		.title-top{
			width: 100%;
			display: box;
			display: -webkit-box;
			margin: 0;
			padding: 15px 0;
			font-size: 16px;
			border-bottom: 18px solid #f3f3f3;
			.user-img{
			   float: left;
                height: 60px;
                width: 60px;
                border-radius: 100%;
                margin-left: 15px;
                font-size: 15px;
                line-height:60px;
                color: #fff;
                text-align: center;
			}
			.user-img.blue{
					background: #219afe;
				}
				.user-img.pink{
					background: #ffb0f4;
				}
            .des{
                float: left;
                margin-top: 7px;
                margin-left: 15px;
                p:last-child{
                    font-size: 13px;
                    color: #999;
                }
            }
		}
	}
	.tow-btn{
		padding:10px 15px;
		a:first-child{
			margin-right: 5px;
		}
		a:last-child{
			margin-left: 5px;
		}
	}
	.one-btn{
		padding:10px 15px;
	}
    .state-wait{
       background:url(../img/wait.png) no-repeat;
       background-size:70%;
     }
     .state-agree{
       background:url(../img/agree.png) no-repeat;
       background-size:70%;
     }
     .state-refuse{
       background:url(../img/refuse.png) no-repeat;
       background-size:70%;
     }
     .state-pass{
       background:url(../img/pass.png) 0 10px no-repeat;
       background-size:70%;
     }
     .state-nopass{
       background:url(../img/nopass.png) 0 10px no-repeat;
       background-size:70%;
     }
    .state-icon{
	    position: absolute;
        right: -15px;
        top: 8px;
        width: 100px;
        height: 60px;
        z-index: 5;
      }
    .feedback{
       /*height: 96px;*/
       vertical-align: middle;
     }
     .approval-user>li{
		display: flex;
		justify-content:flex-start;
		padding: 0 15px 0 15px;
		position: relative;
		overflow: inherit!important;
     }
     .approval-user>li:before{
     		content: "";
			position: absolute;
		    display: block;
		    width: 1px;
		    height: 100%;
		    top: 40px;
		    left: 22.5px;
		    border-left: 1px solid #ccc;
		}
		.approval-user>li:nth-last-child(1):before{
			height: 0;
		}
		.approval-user>li.np{
				&:before{
				border-left: 1px solid #219afe;
			}
			.feedback-status{
				background: url(../img/pas.png) no-repeat center center;
				background-size: 100% 100%; 
			}
		}
		
		.approval-user>li.nr{
			&:before{
				border-left: 1px solid red;
			}
			.feedback-status{
				background: url(../img/fal.png) no-repeat center center;
				background-size: 100% 100%; 
			}
		}
		.approval-user>li.d{
			&:before{
				border-left: 1px solid #ccc;
			}
			.feedback-status{
				background: #fff;
				border: 1px solid #219afe;
			}
		}
		.approval-user>li.n{
			&:before{
				border-left: 1px dashed #ccc;
			}
			.feedback-status{
				background: #fff;
				border: 1px solid #ccc;
			}
		
		}
     .feedback-content{
        border: 1px solid #EDEDED;
        flex: 1;
        border-radius: 6px;
        padding: 10px;
        background: #f5f5f5;
        .feedback-list{
        	display: flex;
        	justify-content:flex-start;
        	min-height: 40px;
        	.approval-p{
        		display: flex;
        		justify-content: space-between;
        		align-items: center;
        		height: 25px;
        		.span-name{
        			font-size: 15px;
        		}
        		.span-time{
        			font-size: 13px;
        			color: #888;
        		}
        	}
        }
     }
     .feedback-status{
     	 height: 15px;
          width: 15px;
          border-radius: 100%;
          margin-right: 10px;
          margin-top: 10px;
          background: #219afe;
     }
     .u-icon{
          height: 30px;
          width: 30px;
          border-radius: 100%;
          font-size: 10px;
          color: #fff;
          text-align: center;
          line-height: 30px;
          margin-right: 10px;
       }
       .u-icon.blue{
       	background: #219afe;
       }
       .u-icon.pink{
       	background: #ffb0f4;
       }
       .u-icon.orang{
       	background: url(../img/approle.png) no-repeat center center;
       	background-size: 100% 100%;
       }
    .agree-icon {
        width: 18px;
        height: 18px;
        background: url(../img/ok.png) 0 0 no-repeat;
        display: inline-block;
        background-size: 18px;
        background-position-y: 2px;
      }
   .refuse-icon {
        width: 18px;
        height: 18px;
        background: url(../img/false.png) 0 0 no-repeat;
        display: inline-block;
        background-size: 18px;
        background-position-y: 2px;

       }
       .weui-cells:before,.weui-cell:before{
       	border: 0;
       	position: relative;
       }
       .weui-label{
		font-size: 16px;
       }
       .weui-cell__bd{
       	font-size: 16px;
       	color: #333;
       }
       	.my-view{
       	display: inline-block;
		width: 18px;
		height: 18px;
		background: url(../img/view.png) 0 0 no-repeat;
		background-size: 18px;
		margin-right:10px;
       	}
       	.handle{
       		display: flex;
			justify-content: center;
			align-items: center;
			border-top: 1px solid #e6e6e6;
			height: 36px;
			a{
				display: inline-block;
			    line-height: 16px;
			    flex: 1;
			    text-align: center;
			    color: #666;
			    border-right: 1px solid #e6e6e6;
			    font-size: 13px;
			}
       	}
</style>
<template>
<div class="container">
	<v-Header v-if="!detailState" title="我审批的"></v-Header>
	<v-Bar v-if="!detailState">
		<div slot="wrap" class="wrap">
			<a href="javascript:;" :class="{'cur':wState}" @click="changeTab('w')" style="width: 50%;"><span>待审核 (<b>{{aLength}}</b>)</span></a>
			<a href="javascript:;" :class="{'cur':aState}" @click="changeTab('a')" style="width: 50%;"><span>已审核</span></a>
		</div>
	</v-Bar>
	<div class="content no-data" v-if="!detailState">
		<ul class="list">
			<li class="null-data" v-if="nullDataState"></li>
			<li v-for="item in dataList.content">
			 <div class="item-li" @click="showDetail(item)">
				<p>{{item.approvalFlow.aflowName}}</p>
				<p class="info">
					<span class="des f">{{item.approvalFlow.sponsor.name}}</span>&nbsp;
					<span class="des">{{item.approvalFlow.createdTime.split(':')[0]+':'+item.approvalFlow.createdTime.split(':')[1]}}</span>
				</p>
				   <div v-if="item.approvalFlow.status=='o'" :class="[item.approvalFlow.auditStatus=='y'?'status-agree':'']"><i class="scan"></i></div>
			       <div v-if="item.approvalFlow.status=='o'" :class="[item.approvalFlow.auditStatus=='n'?'status-refuse':'']"><i class="scan"></i></div>
			   </div>
			   	<template v-if="item.approvalFlow.status=='d'&&item.currentPersons" v-for='v in item.currentPersons'>
			   		<div v-if="v.userId==user.id&&!v.passing" class="handle">
			   			<a href="javascript:;" @click="agree(item)" style="color: #219afe">同意</a>
                    	<a href="javascript:;" @click="refuse(item)" style="color: #f34f50">拒绝</a>
			   		</div>
				</template> 
			</li>
			<li class="no-more" v-if="loadingState">加载中...</li>
			<li class="no-more" v-if="noMoreState">没有更多数据了</li>
		</ul>
	</div>
	<header v-if="detailState">
		<a href="javascript:;" class="left" @click="hideDetail"></a>我审批的<a href="/iapp/home" class="right"></a>
	</header>
	<div class="content no-data" style="top: 45px;" v-if="detailState">
		<ul class="list" style="padding:0">
			<li>
				<!-- <div class="title-top">{{detail.approvalFlow.sponsor.name}} 填的{{detail.approvalFlow.aflowName}}审批</div> -->
				<div class="title-top">
				<div class="one">
				  <span class="user-img" v-text="detail.approvalFlow.sponsor.name.slice(-4)" :class="user.gender==1?'blue':'pink'">
				      <!-- <img :src='"/api/service/image/usericon_"+detail.approvalFlow.sponsor.userId+"?w=30"'> -->
				  </span>
				  <div class="des">
                      <p>{{detail.approvalFlow.sponsor.name}}</p> 
                      <p>{{detail.approvalFlow.createdTime}}</p>
                  </div>
				</div>
				<div v-if="detail.approvalFlow.status=='d'" class="state-icon state-wait"></div>
				<div v-if="detail.approvalFlow.status=='o'&&detail.approvalFlow.auditStatus=='y'" class="state-icon state-agree"></div>
				<div v-if="detail.approvalFlow.status=='o'&&detail.approvalFlow.auditStatus=='n'" class="state-icon state-refuse"></div>
				</div>
				
				<template v-for="(item,index) in detail.approvalFlow.items">

				<div class="weui-cells__title" v-if="item.componentName=='TableField'">明细</div>
				<div class="weui-cells" style="margin: 0">

					<template v-for="children in item.children" v-if="item.componentName=='TableField'">
					<div class="weui-cell" v-if="!(children.componentName=='DateRangeField') && !(children.componentName=='Attachment') && !(children.componentName=='DDPhotoField')">
						<div class="weui-cell__hd">
							<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
						</div>
						<div class="weui-cell__bd">
							{{children.value}}
						</div>
					</div>
					<div class="weui-cell" v-if="children.componentName=='DateRangeField'" v-for="(lable,i) in children.props.label">
						<div class="weui-cell__hd">
							<label class="weui-label">{{lable}}<span v-if="children.props.required" style="color: red">*</span></label>
						</div>
						<div class="weui-cell__bd">
							<template v-if="children.value">
							{{children.value.split(',')[i]}}
							</template>
							<template v-else>
							</template>
						</div>
					</div>
						<div class="weui-cell" v-if="children.componentName=='Attachment'">
						<div class="weui-cell__hd">
							<label class="weui-label">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></label>
						</div>
						<div class="weui-cell__bd" v-if="children.value">
							<template v-if="children.value.length>0">
							<a style="display:block;line-height: 32px" v-for="file in children.value.split(',')" target="_blank" :href="'/api/service/file/'+file.split('/')[0]">{{file.split('/')[1]}}</a>
							</template>
						</div>
						<div class="weui-cell__bd" v-else>
						</div>
					</div>
					<div class="weui-cell" v-if="children.componentName=='DDPhotoField'">
						<div class="weui-cell__bd">
							<div class="weui-uploader">
								<div class="weui-uploader__hd">
									<p class="weui-uploader__title">{{children.props.label}}<span v-if="children.props.required" style="color: red">*</span></p>
									<!-- <div class="weui-uploader__info">0/2</div> -->
								</div>
								<div class="weui-uploader__bd">
									<ul class="weui-uploader__files" id="uploaderFiles" v-if="children.value">
										<template v-if="children.value.length>0">
										<li class="weui-uploader__file" v-for="imgSrc in children.value.split(',')" :style="{backgroundImage:'url(/api/service/file/'+imgSrc+')'}"></li>
										</template>
									</ul>
								</div>
							</div>
						</div>
					</div>
					</template>

					<div class="weui-cell" v-if="!(item.componentName=='DateRangeField') && !(item.componentName=='TableField') && !(item.componentName=='DDPhotoField') && !(item.componentName=='Attachment')">
						<div class="weui-cell__hd">
							<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
						</div>
						<div class="weui-cell__bd">
							{{item.value}}
						</div>
					</div>

					<div class="weui-cell" v-if="item.componentName=='Attachment'">
						<div class="weui-cell__hd">
							<label class="weui-label">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></label>
						</div>
						<div class="weui-cell__bd" v-if="item.value">
							<a style="display:block;line-height: 32px" v-for="file in item.value.split(',')" target="_blank" :href="'/api/service/file/'+file.split('/')[0]">{{file.split('/')[1]}}</a>
						</div>
						<div class="weui-cell__bd" v-else>
						</div>
					</div>

					<div class="weui-cell" v-if="item.componentName=='DDPhotoField' && item.value">
						<div class="weui-cell__bd">
							<div class="weui-uploader">
								<div class="weui-uploader__hd">
									<p class="weui-uploader__title">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></p>
									<!-- <div class="weui-uploader__info">0/2</div> -->
								</div>
								<div class="weui-uploader__bd">
									<ul class="weui-uploader__files" id="uploaderFiles">
										<li class="weui-uploader__file" v-for="imgSrc in item.value.split(',')" :style="{backgroundImage:'url(/api/service/file/'+imgSrc+')'}"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="weui-cell" v-if="item.componentName=='DateRangeField'" v-for="(lable,i) in item.props.label">
						<div class="weui-cell__hd">
							<label class="weui-label">{{lable}}<span v-if="item.props.required" style="color: red">*</span></label>
						</div>
						<div class="weui-cell__bd" v-if="item.value">
							{{item.value.split(',')[i]}}
						</div>
						<div class="weui-cell__bd" v-else>

						</div>
					</div>

				</div>

				</template>
					<div class="weui-cells" style="border-top: 18px solid #f3f3f3;margin:0;">
				    <div class="weui-cell" style="align-items: center;">
                       <div class="weui-cell__hd">
                           <label class="weui-uploader__title">审批结果</label>
                       </div>
                    </div>

                    <ul class="approval-user">
                    	<template v-for="(u,i) in detail.approvalFlow.approvers"  v-if="u.totalUsers&&u.totalUsers[0].length">
                    	<li v-if="u.nodeAuditType==2" :class="u.nodeStatus||'n'">
                    		<div class="feedback-status"></div>
                    		<div class="feedback-content">
                    			<template v-if="u.totalUsers" v-for="users in u.totalUsers">
                    			<div class="feedback-list"  v-for="v in users">
                    				<div class="u-icon" :class="v.genderId==1?'blue':'pink'" v-text="v.name.slice(-2)"></div>
                    				<div style='flex: 1' v-if="v.auditStatus">
                    					<p class="approval-p">
                    							<span class="span-name" >{{v.name}}<span v-if='u.nodeStatus&&u.nodeStatus!="n"'>{{v.passing?"·同意":"·拒绝"}}</span></span>
                    							<span class="span-time"  v-if='u.nodeStatus&&u.nodeStatus!="n"&&v.handleDate'>{{v.handleDate.slice(0,16)}}</span>
                    						</p>
                    						<p style="font-size: 13px;color: #888"  v-if='u.nodeStatus&&u.nodeStatus!="n"&&v.auditDescription'>{{v.auditDescription}}</p>
                    				</div>
                    				<div v-else>
                    					<p class="approval-p">
                    						<span class="span-name">{{v.name}}</span>
                    					</p>
                    				</div>
                    			</div>
                    		</template>
                    		</div>
                    	</li>
                    	<li v-else :class="u.nodeStatus||'n'">
                    		<div class="feedback-status"></div>
                    		<div class="feedback-content">
                    			<template v-if="u.totalUsers&&u.totalUsers.length" v-for='users in u.totalUsers'>
                    			<template v-if="users.length<3">
                    				<div class="feedback-list" v-for="v in users">
                    					<div class="u-icon" :class="v.genderId==1?'blue':'pink'" v-text="v.name.slice(-2)"></div>
                    					<div style='flex: 1' v-if="v.auditStatus">
                    						<p class="approval-p">
                    							<span class="span-name" >{{v.name}}<span v-if='u.nodeStatus&&u.nodeStatus!="n"'>{{v.passing?"·同意":"·拒绝"}}</span></span>
                    							<span class="span-time"  v-if='u.nodeStatus&&u.nodeStatus!="n"&&v.handleDate'>{{v.handleDate.slice(0,16)}}</span>
                    						</p>
                    						<p style="font-size: 13px;color: #888"  v-if='u.nodeStatus&&u.nodeStatus!="n"&&v.auditDescription'>{{v.auditDescription}}</p>
                    					</div>
                    					<div style='flex: 1' v-else>
                    						<p class="approval-p">
                    							<span class="span-name">{{v.name}}<span v-if="u.nodeStstus&&u.nodeStstus=='d'" style='color: #219afe'>·审批中</span></span>
                    						</p>
                    					</div>
                    				</div>
                    			</template>
                    			<template v-else>
                    				<div class="feedback-list" v-if="users" v-for="(v,inde) in users">
                    					<div class="u-icon" v-if="inde"></div>
                    					<div class="u-icon orang" v-else></div>
                    					<div style='flex: 1' v-if="v.auditStatus">
                    						<p class="approval-p">
                    							<span class="span-name" >{{v.name}}<span v-if='u.nodeStatus&&u.nodeStatus!="n"'>{{v.passing?"·同意":"·拒绝"}}</span></span>
                    							<span class="span-time"  v-if='u.nodeStatus&&u.nodeStatus!="n"&&v.handleDate'>{{v.handleDate.slice(0,16)}}</span>
                    						</p>
                    						<p style="font-size: 13px;color: #888"  v-if='u.nodeStatus&&u.nodeStatus!="n"&&v.auditDescription'>{{v.auditDescription}}</p>
                    					</div>
                    					<div style='flex: 1' v-else>
                    						<p class="approval-p">
                    							<span class="span-name">{{v.name}}</span>
                    						</p>
                    					</div>
                    				</div>
                    			</template>
                    		</template>
                    		</div>
                 <!--   <div v-if="!u.progress&&u.explains" class="feedback">
                 <div style="display: flex;justify-content:flex-start;">
                 <div class="user-img" style="margin-top: 25px;">
                 <img :src="'/api/service/image/usericon_'+u.user.id+'?w=30'">
                 </div>
                <div class="feedback-content">
                <div class="pull-left">
                    <i class="refuse-icon "></i>
                </div>
                <div>
                    <p>
                    <span>{{u.user.name}}</span>
                    <span style="float: right;padding-right: 15px;color: #D1D1D1;">{{u.createDate}}</span>
                    </p>
                    <p>{{u.explains}}</p>
                </div>
                </div>
               </div>
               </div> -->
               </li>
         		</template>
               </ul>	

				</div>
				<!-- <div class="title-top">审批人员反馈</div>
				<div class="weui-cells">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">审批人</label>
						</div>
						<div class="weui-cell__bd">
							<template v-for="(approver,i) in detail.approvalFlow.approvers">
								<template v-if="i=='0'"><label  :class="{'green':approver.auditStatus}">{{approver.name}}</label></template>
								<template v-else>，<label  :class="{'green':approver.auditStatus}">{{approver.name}}</label></template>
							</template>
						</div>
					</div>
				</div>
				<div class="weui-cells" v-if="detail.approvalFlow.notifiers">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">抄送人</label>
						</div>
						<div class="weui-cell__bd">
							<template v-for="(notifier,i) in detail.approvalFlow.notifiers">
								<template v-if="i=='0'">{{notifier.name}}</template>
								<template v-else>，{{notifier.name}}</template>
							</template>
						</div>
					</div>
				</div>
				<div class="weui-cells">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">审批状态</label>
						</div>
						<div class="weui-cell__bd" v-if="detail.approvalFlow.status=='d'">待审核</div>
						<div  class="weui-cell__bd" v-else>
							<template v-if="detail.approvalFlow.auditStatus=='y'">通过</template>
							<template v-if="detail.approvalFlow.auditStatus=='n'">拒绝</template>
						</div>
					</div>
				</div>
				<div class="weui-cells">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">审批节点</label>
						</div>
						<div class="weui-cell__bd">{{detail.currentPersons[0].name}}</div>
					</div>
				</div> -->
				<template v-if="detail.approvalFlow.status=='d'&&detail.currentPersons" v-for="v in detail.currentPersons">
				<template v-if="v.userId==user.id&&!v.passing">
				<div class="weui-cells" v-if="wState || aState" style="border-top: 18px solid #f3f3f3;border-bottom:18px solid #f3f3f3;margin: 0;">
					<div class="weui-cell" style="align-items:self-start">
						<div class="weui-cell__hd">
							<label class="my-view"></label>
						</div>
						<div class="weui-cell__bd">
							<textarea class="weui-textarea" placeholder="请输入审批意见..." rows="3" v-model="view"></textarea>
						</div>
					</div>
				</div>
				<div class="weui-flex tow-btn" style="background: #f3f3f3">
					<div class="weui-flex__item"><div class="placeholder"><a href="javascript:;" class="weui-btn weui-btn_default" @click="refuse(detail)" style="color: #f34f50;border: 1px solid #f34f50;background: #f3f3f3">拒绝</a></div></div>
					<div class="weui-flex__item"><div class="placeholder"><a href="javascript:;" class="weui-btn weui-btn_primary" style="background:#219afe" @click="agree(detail)">同意</a></div></div>
				</div>
				</template>
				</template>
			</li>
		</ul>
	</div>
	<v-nav v-if="!detailState"></v-nav>
</div>
</template>

<script>
import IScroll from 'iscroll'
import ajax from '../util/ajax'
import api from '../util/api'
export default {
	name: 'index',
	mixins: [ajax],
	data () {
		return {
			management:management,
			//Tab状态
			wState: true,
			aState: false,
			noMoreState: false,
			loadingState: false,
			nullDataState: false,
			page: 0,
			scrollState: false,
			aLength: 0,
			//列表内容
			dataList: '',
			//滚动实例
			myScroll:'',
			//详细内容
			detail: '',
			detailState: false,
			//处理审核意见
			view: '',
			//权限
			management:management,
			//当前审批人索引
			number:0,
			user:user,
      approval_sub_id: null
		}
	},
	created(){
		if(location.search){
			if(this.getUrlParam('anchor')=='approvalDetail'){

     this.fetchData(api.approval+"/aps/"+this.getUrlParam('data_id')+'/user/'+user.id,"",(data)=>{
				this.showDetail(data)
			})
			}else if(this.getUrlParam('anchor')=='feedbackDetail'){
				window.location.hash='#/released?data_id='+this.getUrlParam('data_id');
			}else if(this.getUrlParam('anchor')=='copyMineDetail'){
				window.location.hash='#/mine?data_id='+this.getUrlParam('data_id');
			}
      this.approval_sub_id = this.getUrlParam('id');

 
    }
		this.updateData();
		// if(this.$route.query.data_id){
		// 	this.fetchData(api.approval+"/aps/"+this.$route.query.data_id+'/user/'+user.id,"",(data)=>{
		// 		this.showDetail(data)
		// 	})
		// }
	},
	mounted() {
		var _vue = this;
		this.myScroll = new IScroll(this.$el.querySelector('.content'),{
			mouseWheel: true,
			scrollbars: true,
			fadeScrollbars: true,
			click: true
		})
		this.myScroll.on('scrollEnd',function(){
			if(this.maxScrollY == this.y){
				_vue.addData()
			}
		})
	},
	updated() {
		this.myScroll.refresh()
	},
	methods: {
		   getUrlParam(name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                    var r = window.location.search.substr(1).match(reg); //匹配目标参数
                    if (r != null) return unescape(r[2]); return null; //返回参数值
                },
		updateData() {
			if(this.wState){
        var url = api.approval+'/aps?approver.userId='+user.id+'&approver.auditStatus=false&nodeStatus=false&size=20&page=0&sort=approvalFlow.createdTime,desc';
        if(this.approval_sub_id) {
          url += '&approvalFlow.aflowId=' + this.approval_sub_id;
        }
				this.fetchData(url,'',(data) => {
					this.aLength=data.totalElements;
					this.nullDataState=data.content?!data.content>0:true;
					if(!!data.last && !!data.content){
						this.noMoreState=true;
					}
					if(!!data.content && !data.last){
						this.loadingState=true;
						this.scrollState=true;
					}
					this.dataList=data;
				})
			}else if(this.aState){
			  var url = api.approval+'/aps?approver.userId='+user.id+'&approver.auditStatus=true&size=20&page=0&sort=approvalFlow.createdTime,desc';
			  if(this.approval_sub_id) {
          url += '&approvalFlow.aflowId=' + this.approval_sub_id;
        }
				this.fetchData(url,'',(data) => {
					this.nullDataState=data.content?!data.content>0:true;
					if(!!data.last && !!data.content){
						this.noMoreState=true;
					}
					if(!!data.content && !data.last){
						this.loadingState=true;
						this.scrollState=true;
					}
					this.dataList=data;
				})
			}
		},
		addData() {
			if (this.scrollState){
				this.page++;
				if(this.wState){
          var url = api.approval+'/aps?approver.userId='+user.id+'&sort=approvalFlow.createdTime,desc&approvalFlow.status=d&size=20&page='+this.page;
          if(this.approval_sub_id) {
            url += '&approvalFlow.aflowId=' + this.approval_sub_id;
          }
					this.fetchData(url,'',(data) => {
						for (let i=0;i<data.content.length;i++) {
							this.dataList.content.push(data.content[i])
						}
						if(data.last){
							this.scrollState=false;
							this.loadingState=false;
							this.noMoreState=true;
						}
					})
				}else if(this.aState){
          var url = api.approval+'/aps?approver.userId='+user.id+'&sort=approvalFlow.createdTime,desc&approvalFlow.status=o&size=20&page='+this.page;
          if(this.approval_sub_id) {
            url += '&approvalFlow.aflowId=' + this.approval_sub_id;
          }
					this.fetchData(url,'',(data) => {
						for (let i=0;i<data.content.length;i++) {
							this.dataList.content.push(data.content[i])
						}
						if(data.last){
							this.scrollState=false;
							this.loadingState=false;
							this.noMoreState=true;
						}
					})
				}
			}
		},
		changeTab(state){
			this.page=0;
			this.dataList=[];
			this.noMoreState=false;
			this.scrollState=false;
			this.loadingState=false;
			if(state=='w'){
				this.wState=true;
				this.aState=false;
			}else if(state=='a'){
				this.wState=false;
				this.aState=true;
			}
			this.updateData();
		},
		showDetail(data){
			this.detailState=true;
			this.detail=data;
		},
		hideDetail(){
			this.detailState=false
			this.view=''
		},
		approvalData() {
			// if(!!!this.detail.approvalFlow.auditType || this.detail.approvalFlow.auditType=='MULTI'){
			// 	//会签模式和分支模式
			// 	return {
			// 		"id":this.detail.id,
			// 		"currentPerson":{
			// 			"auditStatus":true,
			// 			"auditDescription":this.view
			// 		}
			// 	}
			// }else{
				//单人模式和逐级模式
				if ((this.detail.num+1)<this.detail.approvalFlow.approvers.length) {
					// if (!this.detail.approvalFlow.approvers[this.detail.num+1]["tag"]){
					this.number=this.detail.num+1;
					// }else{
					// this.number=this.detail.num;
					// }
				}else{
					this.number=this.detail.num;
				}
				return {
					"id":this.detail.id,
					"userId":user.id,
					"currentPerson":{
						"userId":user.id,
						"name":user.name,
						"auditStatus":true,
						"auditDescription":this.view
					},
					// "currentPersons":this.detail.approvalFlow.approvers[this.number].totalUsers
				}
			// }
		},
		agree(item) {
				this.detail=item;
			var _vue = this,param=this.approvalData()
			param.currentPerson.passing=true
			// if(this.view){
				$.confirm({
					title: '确定同意吗？',
					onOK: function () {
						_vue.patchData(api.approval+'/aps/'+_vue.detail.id,param,(data) => {
							window.location.reload()
						})
					},
					onCancel: function () {

					}
				})
			// }else{
			// 	$.toast("请填写意见", 'text');
			// }
		},
		refuse(item) {
				this.detail=item;
			var _vue = this,param=this.approvalData()
			param.currentPerson.passing=false
			// if(this.view){
				$.confirm({
					title: '确定拒绝吗？',
					onOK: function () {
						_vue.patchData(api.approval+'/aps/'+_vue.detail.id,param,(data) => {
							window.location.reload()
						})
					},
					onCancel: function () {

					}
				})
			// }else{
			// 	$.toast("请填写意见", 'text');
			// }
		}
	},
	beforeRouteEnter: function (to, from, next) {
		next(vm => {
			if (vm.management.indexOf('1') == -1) {
				if(vm.management.indexOf('2') != -1){
					next('/released')
				}else{
					next('/publish')
				}
			} else {
				next()
			}
		})
	}
}
</script>
