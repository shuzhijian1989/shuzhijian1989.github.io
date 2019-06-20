<template>
<div class="container">
	<v-Header title="我发起的" v-if="!detailState">
		
	</v-Header>
	<v-Bar v-if="!detailState">
		<div slot="wrap" class="wrap">
			<a href="javascript:;" :class="{'cur':yState}" @click="changeTab('y')"><span>已通过</span></a>
			<a href="javascript:;" :class="{'cur':nState}" @click="changeTab('n')"><span>未通过</span></a>
			<a href="javascript:;" :class="{'cur':wState}" @click="changeTab('w')"><span>审核中 (<b>{{aLength}}</b>)</span></a>	
		</div>
	</v-Bar>
	<div class="content no-data" :class="{'no-data':dataList.content?!dataList.content>0:true}" v-if="!detailState">
		<ul class="list">
			<li class="null-data" v-if="nullDataState"></li>
			<li v-for="item in dataList.content" @click="showDetail(item)">
			  <div class="item-li">
				<p>{{item.approvalFlow.aflowName}}</p>
				<p class="info">
					<span class="des f">{{item.approvalFlow.sponsor.name}}</span>&nbsp;
					<span class="des">{{item.approvalFlow.createdTime.split(':')[0]+':'+item.approvalFlow.createdTime.split(':')[1]}}</span>
				</p>
				 <div v-if="item.approvalFlow.status=='o'" :class="[item.approvalFlow.auditStatus=='y'?'status-pass':'']"><i class="scan"></i></div>
			     <div v-if="item.approvalFlow.status=='o'" :class="[item.approvalFlow.auditStatus=='n'?'status-nopass':'']"><i class="scan"></i></div>
			   </div>
			</li>
			<li class="no-more" v-if="loadingState">加载中...</li>
			<li class="no-more" v-if="noMoreState">没有更多数据了</li>
		</ul>
	</div>
	<header v-if="detailState">
		<a href="javascript:;" class="left" @click="hideDetail"></a>我发起的<a href="/iapp/home" class="right"></a>
	</header>
	<div class="content no-data" style="top: 45px;" v-if="detailState">
		<ul class="list" style="padding:0">
			<li>
				<div class="title-top">
				<div class="one">
				  <span class="user-img" v-text="detail.approvalFlow.sponsor.name.slice(-4)" :class="user.gender==1?'blue':'pink'">
				  </span>
				  <div class="des">
                      <p v-text='detail.approvalFlow.sponsor.name'></p> 
                      <p v-text='detail.approvalFlow.createdTime'></p>
                  </div>
				</div>
				<div v-if="detail.approvalFlow.status=='d'" class="state-icon state-wait"></div>
				<div v-if="detail.approvalFlow.status=='o'&&detail.approvalFlow.auditStatus=='y'" class="state-icon state-pass"></div>
				<div v-if="detail.approvalFlow.status=='o'&&detail.approvalFlow.auditStatus=='n'" class="state-icon state-nopass"></div>
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
                    <template v-if="u.totalUsers&&u.totalUsers[0].length" v-for="(u,i) in detail.approvalFlow.approvers">
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
                    					<p style="font-size: 13px;color: #888" v-if="v.auditDescription">{{v.auditDescription}}</p>
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
                    						<p style="font-size: 13px;color: #888" v-if='u.nodeStatus&&u.nodeStatus!="n"&&v.auditDescription'>{{v.auditDescription}}</p>
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
                     <!-- <li v-else style="margin: 0">
                      <div v-if="u.totalUsers[0].auditStatus" class="feedback">
                        <div style="display: flex;justify-content:flex-start;">
                            <div class="u-icon" :class="u.totalUsers[0].genderId==1?'blue':'pink'">
                           </div>
                          <div class="feedback-content" style="display: flex;justify-content:flex-start;">
                          <div class="pull-left">
                             <i class="agree-icon" v-if="u.totalUsers[0].passing"></i>
                             <i class="refuse-icon" v-else></i>
                          </div>
                          <div style='flex: 1'>
                          <p class="approval-p">
                          <span class="span-name">{{u.totalUsers[0].name}}</span>
                          <span class="span-time">{{u.totalUsers[0].handleDate}}</span>
                          </p>
                           <p style="font-size: 13px;color: #888">{{u.totalUsers[0].auditDescription}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                   <div v-if="!u.progress&&u.explains" class="feedback">
                 <div style="display: flex;justify-content:flex-start;">
                 <span class="user-img" v-text="u.user.name.slice(0,3)" :class="detail.approvalFlow.sponsor.passing?'blue':'pink'">
				  </span>
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
               </div>
               </li> -->
         		</template>
               </ul>	

				</div>
				<!-- <div class="weui-cells" v-if="detail.approvalFlow.notifiers">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">抄送人</label>
						</div>
						<div class="weui-cell__bd">
							<template v-for="(notifier,i) in detail.approvalFlow.notifiers">
								<template v-if="i=='0'">{{notifier.totalUsers[0].name}}</template>
								<template v-else="i=='0'">，{{notifier.totalUsers[0].name}}</template>
							</template>
						</div>
					</div>
				</div> -->
				<!-- <div class="weui-cells">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">审批状态</label>
						</div>
						<div class="weui-cell__bd" v-if="detail.approvalFlow.status=='d'">
							待审核
						</div>
						<div class="weui-cell__bd" v-if="detail.approvalFlow.status=='o'">
							<template v-if="detail.approvalFlow.auditStatus=='y'">通过</template>
							<template v-if="detail.approvalFlow.auditStatus=='n'">拒绝</template>
						</div>
					</div>
				</div> -->
				<!-- <div class="weui-cells" v-if="detail.approvalFlow.auditType=='GRADE'">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">审批节点</label>
						</div>
						<div class="weui-cell__bd" >
							{{detail.currentPersons?detail.currentPersons[0].name:''}}
						</div>
					</div>
				</div> -->
				<!-- <div class="weui-cells" v-for="item in detail.approvalFlow.approvers" v-if="item.totalUsers">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">审批意见</label>
						</div>
						<div class="weui-cell__bd">
							{{item.totalUsers[0].name+'：'+item.totalUsers[0].auditDescription}}
						</div>
					</div>
				</div> -->
				<!-- <div class="one-btn" v-if="wState">
					<a href="javascript:;" class="weui-btn weui-btn_primary" style="background:#3ac8ae" @click="cancel">撤销</a>
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
	name: 'releaseed',
	mixins: [ajax],
	data () {
		return {
			management:management,
			//Tab状态
			wState: true,
			yState: false,
			nState: false,
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
			detailState: false,
			detail: '',
			user:user,
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
		this.updateData()
		if(this.$route.query.data_id){
			this.fetchData(api.approval+"/sponsor/"+this.$route.query.data_id+'/user/'+user.id,"",(data)=>{
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
		updateData(){

		    let params = '?sponsor.userId='+user.id+'&size=20&page=0&sort=approvalFlow.createdTime,desc';
			if(this.wState){
			  params += '&approvalFlow.status=d';
			}else if(this.yState){
			 params += '&approvalFlow.status=o&approvalFlow.auditStatus=y';
			}else if(this.nState){
			 params += '&approvalFlow.status=o&approvalFlow.auditStatus=n';
			}
      if(this.approval_sub_id) {
        params += '&approvalFlow.aflowId=' + this.approval_sub_id;
      }

			this.fetchData(api.approval+'/sponsor'+params,'',(data) => {
			        if(this.wState){
					  this.aLength=data.totalElements
					}
					this.nullDataState=data.content?!data.content>0:true;
					if(!!data.last && !!data.content){
						this.noMoreState=true
					}
					if(!!data.content && !data.last){
						this.loadingState=true
						this.scrollState=true
					}
					this.dataList=data
			});

		},
		addData(){
			if (this.scrollState){
				this.page++
				if(this.wState){
          var url = api.approval+'/sponsor?sponsor.userId='+user.id+'&sort=approvalFlow.createdTime,desc&approvalFlow.status=d&size=20&page='+this.page;
          if(this.approval_sub_id) {
            url += '&approvalFlow.aflowId=' + this.approval_sub_id;
          }
					this.fetchData(url,'',(data) => {
						for (let i=0;i<data.content.length;i++) {
							this.dataList.content.push(data.content[i])
						}
						if(data.last){
							this.scrollState=false
							this.loadingState=false
							this.noMoreState=true
						}
					})
				}else if(this.aState){
          var url = api.approval+'/sponsor?sponsor.userId='+user.id+'&sort=approvalFlow.createdTime,desc&approvalFlow.status=o&size=20&page='+this.page;
          if(this.approval_sub_id) {
            url += '&approvalFlow.aflowId=' + this.approval_sub_id;
          }
					this.fetchData(url,'',(data) => {
						for (let i=0;i<data.content.length;i++) {
							this.dataList.content.push(data.content[i])
						}
						if(data.last){
							this.scrollState=false
							this.loadingState=false
							this.noMoreState=true
						}
					})
				}
			}
		},
		changeTab(state) {
			this.page=0
			this.dataList=[]
			this.noMoreState=false
			this.scrollState=false
			this.loadingState=false
			if(state=='w'){
				this.wState=true
				this.yState=false
				this.nState=false
			}else if(state=='y'){
				this.wState=false
				this.yState=true
				this.nState=false
			}else if(state=='n'){
				this.wState=false
				this.nState=true
				this.yState=false

			}
			this.updateData()
		},
		showDetail(data){
			this.detailState=true
			this.detail=data
		},
		hideDetail(){
			this.detailState=false
		},
		// cancel(){
		// 	// var _vue = this,param=this.approvalData()
		// 	// param.currentPerson.passing=false
		// 	$.confirm({
		// 		title: '确定撤销吗？',
		// 		onOK: function () {
		// 			// _vue.patchData(api.approval+'/aps/'+_vue.detail.id,param,(data) => {
		// 			// 	console.log(data)
		// 			// })
		// 		},
		// 		onCancel: function () {

		// 		}
		// 	})
		// }
	}
}
</script>
