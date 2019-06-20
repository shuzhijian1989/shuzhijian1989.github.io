<style lang="less" scope>
   body{
     background: #f3f3f3;
   }
	.content{
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #f3f3f3;
		overflow: hidden;
		ul.list{
			li{
				list-style: none;
				overflow: hidden;
				position: relative;
			    background: #fff;
			    -webkit-background-size: 100% 100%;
			    background-size: 100% 100%;
			    .item-li{
                        padding: 0 15px;
                        position: relative;
                        padding-top: 15px;
                    .info{
                         font-size: 13px;
                         padding: 10px 0;
                         color: #999;
                       .f{
                           width: 50px;
                           white-space: nowrap;
                           text-overflow: ellipsis;
                       }
                       .des{
                           display: inline-block;
                           overflow: hidden;
                        }
                       .me{
                           width: 25px;
                           height: 25px;
                           background: url(../img/me.png) 5px 5px no-repeat;
                           -webkit-background-size: 15px;
                           background-size: 15px;  
                           display: inline-block; 
                           position: absolute;
                           background-position-y: 2px;
                        }
                        .time{
                           width: 25px;
                           height: 25px;
                           background: url(../img/time.png) 5px 5px no-repeat;
                           -webkit-background-size: 15px;
                           background-size: 15px;  
                           display: inline-block;
                           position: absolute;  
                           background-position-y: 2px;
                        }
                    }
                    .status-agree{
                         background: url(../img/agree.png);
                         position: absolute;
                         width: 69px;
                         height: 50px;
                         right: 15px;
                         top: 50%;
                         margin-top: -25px;
                         background-size: 69px;
                         background-repeat: no-repeat;
                    }
                    .status-refuse{
                         background: url(../img/refuse.png);
                         position: absolute;
                         width: 69px;
                         height: 50px;
                         right: 15px;
                         top: 50%;
                         margin-top: -25px;
                         background-size: 69px;
                         background-repeat: no-repeat;
                    }
                    .status-pass{
                         background: url(../img/pass.png);
                         position: absolute;
                         width: 69px;
                         height: 50px;
                         right: 15px;
                         top: 50%;
                         margin-top: -25px;
                         background-size: 69px;
                         background-repeat: no-repeat;
                    }
                    .status-nopass{
                         background: url(../img/nopass.png);
                         position: absolute;
                         width: 69px;
                         height: 50px;
                         right: 15px;
                         top: 50%;
                         margin-top: -25px;
                         background-size: 69px;
                         background-repeat: no-repeat;
                    }
                    .status-end{
                         background: url(../img/finished.png);
                         position: absolute;
                         width: 69px;
                         height: 50px;
                         right: 15px;
                         top: 50%;
                         margin-top: -25px;
                         background-size: 69px;
                         background-repeat: no-repeat;
                    }
			    }
				.time{
					font-size: 13px;
					padding: 8px 0;
					color: #999;
					span{
						display: inline-block;
						overflow: hidden;
					}
					span:first-child{
						color: #3ac8ae;
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
			li:last-child{
				border-bottom: none;
			}
			li.no-more{
				background: #f3f3f3;
				border-bottom: none;
				color: #999;
				text-align: center;
				font-size: 14px;
				line-height: 34px;
				height: 88px;
			}
			li.null-data{
				position: absolute;
				background: url(../img/nulldata.png) center center no-repeat;
				width: 100%;
				left: 0;
				height: 150px;
				top: 60px;
				background-size: 150px;
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
</style>
<template>
<div class="container">
	<v-Header v-if="!detailState" title="抄送我的"></v-Header>
	<div class="content no-data" v-if="!detailState" style="top: 65px;">
		<ul class="list">
			<li class="null-data" v-if="nullDataState"></li>
			<li v-for="item in dataList.content" @click="showDetail(item)">
			   <div class="item-li">
				<p>{{item.approvalFlow.aflowName}}</p>
				<p class="info">
					<span class="des f">{{item.approvalFlow.sponsor.name}}</span>&nbsp;
					<span class="des">{{item.approvalFlow.createdTime.split(':')[0]+':'+item.approvalFlow.createdTime.split(':')[1]}}</span>
			   </p>
			   <div :class="[item.approvalFlow.status=='o'?'status-end':'']"></div>
			   </div>		
			</li>
			<li class="no-more" v-if="loadingState">加载中...</li>
			<li class="no-more" v-if="noMoreState">没有更多数据了</li>
		</ul>
	</div>
	<header v-if="detailState">
		<a href="javascript:;" class="left" @click="hideDetail"></a>抄送我的<a href="/iapp/home" class="right"></a>
	</header>
	<div class="content no-data" style="top: 45px;" v-if="detailState">
		<ul class="list" style="padding:0">
			<li>
				<!-- <div class="title-top">{{detail.approvalFlow.sponsor.name}} 填的{{detail.approvalFlow.aflowName}}审批</div> -->
					<div class="title-top">
				<div class="one">
				  <span class="user-img" v-text="detail.approvalFlow.sponsor.name.slice(-4)" :class="detail.currentPersons&&detail.currentPersons[0].genderId==1?'blue':'pink'">
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
				<div class="weui-cells" style="margin: 0;">

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
							<a style="display:block" v-for="file in children.value.split(',')" target="_blank" :href="'/api/service/file/'+file.split('/')[0]">{{file.split('/')[1]}}</a>
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
										<li class="weui-uploader__file" v-for="imgSrc in children.value.split(',')" :style="{backgroundImage:'url(/api/service/file/'+imgSrc+'.png)'}"></li>
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
							<a style="display:block" v-for="file in item.value.split(',')" target="_blank" :href="'/api/service/file/'+file.split('/')[0]">{{file.split('/')[1]}}</a>
						</div>
						<div class="weui-cell__bd" v-else>
						</div>
					</div>

					<div class="weui-cell" v-if="item.componentName=='DDPhotoField'">
						<div class="weui-cell__bd">
							<div class="weui-uploader">
								<div class="weui-uploader__hd">
									<p class="weui-uploader__title">{{item.props.label}}<span v-if="item.props.required" style="color: red">*</span></p>
									<!-- <div class="weui-uploader__info">0/2</div> -->
								</div>
								<div class="weui-uploader__bd">
									<ul class="weui-uploader__files" id="uploaderFiles" v-if="item.value">
										<li class="weui-uploader__file" v-for="imgSrc in item.value.split(',')" :style="{backgroundImage:'url(/api/service/file/'+imgSrc+'.png)'}"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="weui-cell" v-if="item.componentName=='DateRangeField'" v-for="(lable,i) in item.props.label">
						<div class="weui-cell__hd">
							<label class="weui-label">{{lable}}<span v-if="item.props.required" style="color: red">*</span></label>
						</div>
						<div class="weui-cell__bd">
							<template v-if="item.value">
							{{item.value.split(',')[i]}}
							</template>
							<template v-else>
							</template>
						</div>
					</div>

				</div>
				</template>
					<div class="weui-cells" style="border-top: 18px solid #f3f3f3;margin: 0">
				    <div class="weui-cell" style="align-items: center;">
                       <div class="weui-cell__hd">
                           <label class="weui-uploader__title">
                           审批流程</label>
                       </div>
                    </div>

                    <ul class="approval-user">
                    	<template v-for="(u,i) in detail.approvalFlow.approvers" v-if="u.totalUsers&&u.totalUsers[0].length">
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
								<template v-if="i=='0'">{{approver.name}}</template>
								<template v-else>，{{approver.name}}</template>
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
			fState: true,
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
			//权限
			management:management,
			user:user,
      approval_sub_id: null
		}
	},
	created(){
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
		if(this.$route.query.data_id){
			this.fetchData(api.approval+"/nots/"+this.$route.query.data_id+'/user/'+user.id,"",(data)=>{
				this.showDetail(data)
			})
		}
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
		updateData() {
		  var url = api.approval+'/nots?notifier.userId='+user.id+'&size=20&page=0&sort=approvalFlow.createdTime,desc';
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
		},
		addData() {
			if (this.scrollState){
				this.page++;
        var url = api.approval+'/nots?notifier.userId='+user.id+'&sort=approvalFlow.createdTime,desc&size=20&page='+this.page;
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
		},	
		showDetail(data){
			this.detailState=true;
			this.detail=data;
		},
		hideDetail(){
			this.detailState=false
		},
	
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