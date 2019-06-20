<style lang="less">
	.all-checked{
		position: absolute;
		width: 100%;
		height: 54px;
		bottom: 0;
		border-top: 1px solid #ececec;
		background: #fff;
		.wrap{
			width: 100%;
			height: 54px;
			box-sizing: border-box;
			padding-right: 80px;
			.scroll{
				width: 100%;
				height: 54px;
				overflow: auto;
				-webkit-overflow-scrolling: touch;
				.con{
					height: 44px;
					span{
						display: block;
						float: left;
						height: 30px;
						border: 1px solid #219afe;
						line-height: 30px;
						padding: 0 6px;
						margin: 9px 0 0 10px;
						font-size: 14px;
						color: #219afe;
						position: relative;
						i{
							position: absolute;
							font-size: 18px;
							top: -7px;
							right: -12px;
						}
						i:before{
							background: #fff;
							border-radius: 50%;
							color: #219afe;
						}
					}
				}
			}
		}
		.btn{
			position: absolute;
			width: 60px;
			height: 30px;
			line-height: 30px;
			top: 50%;
			right: 10px;
			background: #219afe;
			color: #fff;
			margin-top: -15px;
			text-align: center;
			border-radius: 3px;
		}
	}
	.weui-cell__bd span{
		font-size: 15px;
		color: #999;
	}
	.weui-cell__ft{
		width: 50px;
		height: 26px;
	}
	.department-serach{
		padding: 10px 15px;
		position: relative;
		.inner{
			text-align: center;
			background: #f7f7f7;
			border-radius: 3px;
			color: #b6b6b6;
			font-size: 15px;
			padding: 4px 0;
			.btn{
				display: inline-block;
				position: relative;
				padding-left: 20px;
				background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwNTIwM0VFQTRFMjExRTZCODAxQzREQjdBQkQ0MDM5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEwNTIwM0VGQTRFMjExRTZCODAxQzREQjdBQkQ0MDM5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTA1MjAzRUNBNEUyMTFFNkI4MDFDNERCN0FCRDQwMzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTA1MjAzRURBNEUyMTFFNkI4MDFDNERCN0FCRDQwMzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5o/o4hAAACyElEQVR42ryXW4hNURjH9xmMuzkhM4x4GbmMU0JxyOUoQuHBLY0nlFKkaFzy4FJyeZAUpcSDeBHmTA0PY5QwTJgRNS4zrkO55JYHYozfqv+u0+msfW57n69+rbX3OXuv/17r+771rVA8HnfS2CBYBjGYAENhAHyHDmiBerike1lZd4/fhsAuWA/FKX4vEZVQBcfhNOyBj5kKKLLc3wDtsBF6wG3YAVEohYFQBjNgGzRCbz33VIJymoFucBLW6LpeA9+zPP8BbsIhmAkHYSqc1XJVQ1emMxCCMxr8L2yGuR6DJ9sNmAa7NehWOJDNEpjpXg2dsASOOtlbl3ygSu+p1jvTCqjQ9LlC6pz87DzsVP+Y/MZTgFHdC2rhhOOPHYZbEE4Qk1JAOayAf/Jov8wsx3b11yl3pBSwXNFwHVodf81EyEPoA4ttAmLq1zjBmJtqYzYBEfXvBySgSe14mwDXQ98GJKBDbZlNQE/1fwUkoFNtsU3AN/XDAQlwvf+nTUC7+pUBCRirts0moMnLS32wOWobbQJq1V9pW6c8LJwQ/3GbALPlvlI0rPVZgNlX+irEW2wCTArer+t9MNynwSsSUvHedJvRKbij+u+yUmc+Zkq1i3pPjW36EwWYWVgFn2CSRPTLcfDBcEUZtk0bUUYFifGDRcoLbiUUzXLwBVpv9znzQb+zKUrvqtB8DqO1n19QiBZ51JULtZuaQmYEPNLgUc1GSTZl+WOYrCJiEywVX6EZ3qvsNi8dCVOgf0I6PyKnG6UImw5XYX6qc0MozcFkGGxRjij3+N9LOKdq6l3C/XFwTRuRWdJ5+pCMBSSn1IjC1JwV/mgHbbalWdkYiTAf80D+9SWTk1GyteZYMT2RDzXARIkxIj57nYz8tmcwC97owNKgo1/BBDjadWcr3COKmtJCCnCd1Yh4IQetK7QAY68lwuSKH/8FGADTnJdgOcDNRwAAAABJRU5ErkJggg==") 0 center no-repeat;
				background-size: 16px;
			}
		}
	}
	.search-bd{
		box-sizing: border-box;
		height: 100%;
		padding: 52px 0 0 0;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		.weui-cells{
			margin-top: 0;
		}
	}
	.tab-bd{
		.weui-cells{
			margin-top: 0;
		}
	}
	.department-cur{
		z-index: 999;
		background: #fff;
		padding: 10px 55px 10px 15px;
		position: absolute;
		top: 0;
		width: 100%;
		box-sizing: border-box;
		.inner{
			text-align: center;
			background: #f7f7f7;
			border-radius: 3px;
			color: #b6b6b6;
			font-size: 15px;
			padding: 4px 0;
			input[type=text] {
				width: 100%;
				padding: 0;
				border: none;
				outline: none;
				height: 22px;
				line-height: 22px;
				font-size: 15px;
				text-indent: 30px;
				background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwNTIwM0VFQTRFMjExRTZCODAxQzREQjdBQkQ0MDM5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEwNTIwM0VGQTRFMjExRTZCODAxQzREQjdBQkQ0MDM5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTA1MjAzRUNBNEUyMTFFNkI4MDFDNERCN0FCRDQwMzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTA1MjAzRURBNEUyMTFFNkI4MDFDNERCN0FCRDQwMzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5o/o4hAAACyElEQVR42ryXW4hNURjH9xmMuzkhM4x4GbmMU0JxyOUoQuHBLY0nlFKkaFzy4FJyeZAUpcSDeBHmTA0PY5QwTJgRNS4zrkO55JYHYozfqv+u0+msfW57n69+rbX3OXuv/17r+771rVA8HnfS2CBYBjGYAENhAHyHDmiBerike1lZd4/fhsAuWA/FKX4vEZVQBcfhNOyBj5kKKLLc3wDtsBF6wG3YAVEohYFQBjNgGzRCbz33VIJymoFucBLW6LpeA9+zPP8BbsIhmAkHYSqc1XJVQ1emMxCCMxr8L2yGuR6DJ9sNmAa7NehWOJDNEpjpXg2dsASOOtlbl3ygSu+p1jvTCqjQ9LlC6pz87DzsVP+Y/MZTgFHdC2rhhOOPHYZbEE4Qk1JAOayAf/Jov8wsx3b11yl3pBSwXNFwHVodf81EyEPoA4ttAmLq1zjBmJtqYzYBEfXvBySgSe14mwDXQ98GJKBDbZlNQE/1fwUkoFNtsU3AN/XDAQlwvf+nTUC7+pUBCRirts0moMnLS32wOWobbQJq1V9pW6c8LJwQ/3GbALPlvlI0rPVZgNlX+irEW2wCTArer+t9MNynwSsSUvHedJvRKbij+u+yUmc+Zkq1i3pPjW36EwWYWVgFn2CSRPTLcfDBcEUZtk0bUUYFifGDRcoLbiUUzXLwBVpv9znzQb+zKUrvqtB8DqO1n19QiBZ51JULtZuaQmYEPNLgUc1GSTZl+WOYrCJiEywVX6EZ3qvsNi8dCVOgf0I6PyKnG6UImw5XYX6qc0MozcFkGGxRjij3+N9LOKdq6l3C/XFwTRuRWdJ5+pCMBSSn1IjC1JwV/mgHbbalWdkYiTAf80D+9SWTk1GyteZYMT2RDzXARIkxIj57nYz8tmcwC97owNKgo1/BBDjadWcr3COKmtJCCnCd1Yh4IQetK7QAY68lwuSKH/8FGADTnJdgOcDNRwAAAABJRU5ErkJggg==") 10px center no-repeat;
				background-size: 16px;
			}
			.search-cancel{
				position: absolute;
				width: 50px;
				color: #999;
				height: 30px;
				line-height: 30px;
				top: 50%;
				margin-top: -15px;
			}
		}
	}
	.head_wrap{
		.weui-cell__bd{
			padding: 8px 0;
			.icon{
				display: inline-block;
				width: 40px;
				height: 40px;
				position: absolute;
				border-radius: 50%;
				left: 50px;
				top: 10px;
				overflow: hidden;
			}
			.icon1{
				background: url("/img/dep.png") center 7px no-repeat #ffad4d;
				background-size: 26px;
			}
			.icon2{
				background: url("/img/dep.png") center -40px no-repeat #52ade6;
				background-size: 26px;
			}
			.icon3{
				background: #e65c52;
				background-size: 26px;
				line-height: 40px;
				color: #fff;
				text-align: center;
				font-size: 15px;
			}
			p{
				padding-left: 48px;
			}
		}		
	}
	.dp-scroll{
		position: absolute;
		top: 45px;
		bottom: 55px;
		width: 100%;
	}
</style>
<template>
<div :class="{ 'tab-bd': !searchState , 'search-bd': searchState }">
	<template v-if="!searchState">
		<header>
			<a href="javascript:;" class="left" @click="back('backMyGroups')" v-if="myGroupUserState"></a>
			<a href="javascript:;" class="left" @click="back('backDepartments')" v-if="myGroupsState"></a>
			<a href="javascript:;" class="left" @click="back('backPublish')" v-if="departmentsState"></a>
			<a href="javascript:;" class="left" @click="back('previousDepartment')" v-if="previousState"></a>
			{{tit}}
			<a href="/" class="right"></a>
		</header>

		<div class="dp-scroll my-scroll">
			<div class="department-serach">
				<div class="inner" @click="showSearch">
					<span class="btn">请输入搜索条件</span>
				</div>
			</div>
			<div class="weui-cells weui-cells_checkbox">
				<label class="weui-cell weui-check__label">
					<div class="weui-cell__hd">
						<input type="checkbox" class="weui-check" v-model="checkAllState" @click="checkAll($event)">
						<i class="weui-icon-checked"></i>
					</div>
					<div class="weui-cell__bd">
						<p>全选</p>
					</div>
				</label>
				<!--my group-->
				<div class="weui-cell weui-check__label weui-cell_access head_wrap" v-if="departmentsState">
					<label class="weui-cell__hd">
						<input type="checkbox" class="weui-check single" id="my_group" v-model="checkedData" value="myGroup:myGroup|我的群组" @click="selectSingle('groups',true,$event)">
						<i class="weui-icon-checked"></i>
					</label>
					<label class="weui-cell__bd" for="my_group">
						<p>我的群组</p>
						<span class="icon icon1"></span>
					</label>
					<div class="weui-cell__ft" @click="showMyGroups($event)"></div>
				</div>
				<div class="weui-cell weui-check__label weui-cell_access head_wrap" v-for="item in groups" v-if="myGroupsState">
					<label class="weui-cell__hd">
						<input type="checkbox" class="weui-check single" :id="'sons'+item.id" v-model="checkedData" :value="'group:'+item.id+'|'+item.name" @click="selectSingle(item,false,$event)">
						<i class="weui-icon-checked"></i>
					</label>
					<label class="weui-cell__bd" :for="'sons'+item.id">
						<p>{{item.name}} <span>({{item.users.length}})</span></p>
						<span class="icon icon2"></span>
					</label>
					<div class="weui-cell__ft" @click="showMyGroupUsers(item)"></div>
				</div>
				<label class="weui-cell weui-check__label head_wrap" v-for="item in groupUsers.users">
					<div class="weui-cell__hd">
						<input type="checkbox" class="weui-check single" v-model="checkedData" :value="'user:'+item.member.id+'|'+item.member.name" @click="selectSingle(groupUsers,false,$event)">
						<i class="weui-icon-checked"></i>
					</div>
						<div class="weui-cell__bd">
						<p>{{item.member.name}}</p>
						<span v-if="item.member.gbGender.id=='1'" class="icon icon3" v-text="item.member.name.slice(-2)" style="background-color: #74dae6"></span>
						<span v-else class="icon icon3" v-text="item.member.name.slice(-2)"></span>
					</div>
				</label>
				<!--end-->
				<div class="weui-cell weui-check__label weui-cell_access head_wrap" v-for="item in departments.sons" v-if="departmentsState || previousState">
					<label class="weui-cell__hd">
						<input type="checkbox" class="weui-check single" :id="'sons'+item.id" v-model="checkedData" :value="'department:'+item.id+'|'+item.name" @click="selectSingle(item,true,$event)">
						<i class="weui-icon-checked"></i>
					</label>
					<label class="weui-cell__bd" :for="'sons'+item.id">
						<p>{{item.name}} <span>({{item._allUser.length}})</span></p>
						<span class="icon icon2"></span>
					</label>
					<div class="weui-cell__ft" @click="enterDepartment(item,$event)"></div>
				</div>
				<label class="weui-cell weui-check__label head_wrap" v-for="item in departments.users" v-if="departmentsState || previousState">
					<div class="weui-cell__hd">
						<input type="checkbox" class="weui-check single" v-model="checkedData" :value="'user:'+item.userId+'|'+item.name" @click="selectSingle(item,true,$event)">
						<i class="weui-icon-checked"></i>
					</div>
					<div class="weui-cell__bd">
						<p>{{item.name}}</p>
						<span v-if="item.genderId=='1'" class="icon icon3" v-text="item.name.slice(-2)" style="background-color: #74dae6"></span>
						<span v-else class="icon icon3" v-text="item.name.slice(-2)"></span>
					</div>
				</label>
			</div>
		</div>
		<div class="all-checked">
			<div class="wrap">
				<div class="scroll">
					<div class="con" :style="{width:itemWidth+'px'}">
						<span v-for="item in checkedData" @click="removeItem(item)">{{item.split('|')[1]}}<i class="weui-icon-cancel"></i></span>
					</div>
				</div>
			</div>
			<div class="btn" @click="back('backPublish')">确定</div>
		</div>
	</template>
	<div v-if="searchState">
		<div class="department-serach department-cur">
			<div class="inner">
				<input type="text" placeholder="请输入搜索条件" id="search-text" v-model="searchText" autofocus="autofocus"/><span class="search-cancel" @click="searchCancel">确定</span>
			</div>
		</div>
		<div class="weui-cells weui-cells_checkbox" v-if="searchUserState">
			<label class="weui-cell weui-check__label head_wrap" v-for="item in searchUserList">
				<div class="weui-cell__hd">
					<input type="checkbox" class="weui-check" v-model="checkedData" :value="'user:'+item.userId+'|'+item.name">
					<i class="weui-icon-checked"></i>
				</div>
				<div class="weui-cell__bd">
					<p>{{item.name}}</p>
					<span v-if="item.genderId=='1'" class="icon icon3" v-text="item.name.slice(-2)" style="background-color: #74dae6"></span>
					<span v-else class="icon icon3" v-text="item.name.slice(-2)"></span>
				</div>
			</label>
		</div>
	</div>
</div>
</template>
<script>
import ajax from '../util/ajax'
import api from '../util/api'
export default{
	mixins: [ajax],
	props: {
		show: {
			type: Boolean,
			defaule: false
		}
	},
	data() {
		return {
			tit:"外部联系人",
			groups:"",//所有我的群组数据
			groupUsers:[],//我的群组当前用户列表
			myGroupsState:false,
			myGroupUserState:false,
			departments:"",//所有部门数据
			departmentsData:"",//所有部门数据，用来算人数找人
			departmentsState:true,
			departmentAllUser:[],//当前部门下面所有的人
			tempUser:{},//departmentAllUser用来去重
			userList:[],//整个部门下所有的人
			checkedData:[],//选中的数据
			checkedUserData:[],//选中的部门转成人
			checkAllState:false,
			deparmentIndex:0,
			previousDepartments:{},//保存上级部门
			previousTit:{},//保存上级部门名字
			previousState:false,
			itemWidth:100,
			searchState:false,
			searchText:"",
			searchUserState:false
		}
	},
	created() {
		this.fetchData(api.organization,'',(data) => {
			this.loopUser(data);
			this.departments=data;
			this.departmentsData=data;
			this.addUserNum(this.departments);
		});
		this.fetchData(api.myGroup,'',(data) => {
			for(let i=0;i<data.length;i++){
				data[i].users=[];
				this.fetchData(api.myGroup+'/member?id.groupId='+data[0].id,'',(usersData) => {
					data[i].users=usersData;
				});
			}
			this.groups=data;
		});
	},
	computed: {
		searchUserList:function(){
			var that = this;
			return this.userList.filter(function(userList){
				return userList.name.indexOf(that.searchText) !== -1;
			});
		}
	},
	methods: {
		handleElement:function(data){
			if (data.toElement.checked){
				if (this.checkedData.indexOf(data.toElement.value)==-1){
					this.checkedData.push(data.toElement.value);
				}
			} else {
				for (let j=0;j<this.checkedData.length;j++){
					if (this.checkedData[j]==data.toElement.value){
						this.checkedData.splice(j,1);
					}
				}
			}
		},
		selectSingle:function(departments,state,element){
			this.handleElement(element);
			var _selectNum=0;
			var _checkbox=document.getElementsByClassName("single");
			for (let i=0;i<_checkbox.length;i++){
				_checkbox[i].checked ? _selectNum++ : "";
			}
			if(state){
				var _departmentNum = this.departments.sons == null ? 0 : this.departments.sons.length;
				var _userNum = this.departments.users == null ? 0 : this.departments.users.length;
				var _myGroupNum = document.getElementById("my_group") == null ? 0 : 1;
				var _tote=_departmentNum+_userNum+_myGroupNum;
				if(_tote==_selectNum){
					this.checkAllState=true;
					this.checkAllSwitch(true);
				}else{
					this.checkAllState=false;
					this.checkAllSwitch(false);
				}
				//子部门取消，子部门下面的所有部门和人都取消
				this.deselectionDepartments(departments);
				this.deselectionUsers(departments);
			} else {
				if(this.myGroupsState){
					var _myGroupNum = this.groups == null ? 0 : this.groups.length;
					if (_myGroupNum==_selectNum){
						this.checkAllState=true;
						if (this.checkedData.indexOf("myGroup:myGroup|我的群组")==-1){
							this.checkedData.push("myGroup:myGroup|我的群组");
						}
					} else {
						this.checkAllState=false;
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]=="myGroup:myGroup|我的群组"){
								this.checkedData.splice(j,1);
							}
						}
					}
				} else {
					var _groupUsersNum = departments.users == null ? 0 : departments.users.length;
					if (_groupUsersNum==_selectNum){
						this.checkAllState=true;
						if (this.checkedData.indexOf("group:"+departments.id+"|"+departments.name)==-1){
							this.checkedData.push("group:"+departments.id+"|"+departments.name);
						}
						for (let i=0;i<this.groups.length;i++){
							if (this.checkedData.indexOf("group:"+this.groups[i].id+"|"+this.groups[i].name)==-1){
								return
							} else {
								if (this.checkedData.indexOf("myGroup:myGroup|我的群组")==-1){
									this.checkedData.push("myGroup:myGroup|我的群组");
									return
								}
							}
						}
					} else {
						this.checkAllState=false;
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]=="group:"+this.groupUsers.id+"|"+this.groupUsers.name){
								this.checkedData.splice(j,1);
							}
						}
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]=="myGroup:myGroup|我的群组"){
								this.checkedData.splice(j,1);
							}
						}
					}
				}
			}
			if (departments=="groups"){
				var _element = element.toElement || element;
				if(!_element.checked){
					for (let i=0;i<this.groups.length;i++){
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]=="group:"+this.groups[i].id+"|"+this.groups[i].name){
								this.checkedData.splice(j,1);
							}
						}
						for (let j=0;j<this.checkedData.length;j++){
							for (let k=0;k<this.groups[i].users.length;k++){
								if (this.checkedData[j]=="user:"+this.groups[i].users[k].member.id+"|"+this.groups[i].users[k].member.name){
									this.checkedData.splice(j,1);
								}
							}
						}
					}
				}
			}
		},
		checkAll:function(e){
			var _element = e.toElement || e;
			this.checkAllState=_element.checked;
			if(_element.checked){
				if (!this.myGroupsState && !this.myGroupUserState) {
					this.checkAllSwitch(true);
				}
				if (this.myGroupsState){
					for (let i=0;i<this.groups.length;i++){
						if (this.checkedData.indexOf("group:"+this.groups[i].id+"|"+this.groups[i].name)==-1){
							this.checkedData.push("group:"+this.groups[i].id+"|"+this.groups[i].name);
						}
					}
					if (this.checkedData.indexOf("myGroup:myGroup|我的群组")==-1){
						this.checkedData.push("myGroup:myGroup|我的群组");
						return
					}
				}
				if (this.myGroupUserState){
					for (let i=0;i<this.groupUsers.users.length;i++){
						if (this.checkedData.indexOf("user:"+this.groupUsers.users[i].member.id+"|"+this.groupUsers.users[i].member.name)==-1){
							this.checkedData.push("user:"+this.groupUsers.users[i].member.id+"|"+this.groupUsers.users[i].member.name);
						}
					}
					if (this.checkedData.indexOf("group:"+this.groupUsers.id+"|"+this.groupUsers.name)==-1){
						this.checkedData.push("group:"+this.groupUsers.id+"|"+this.groupUsers.name);
					}
					for (let i=0;i<this.groups.length;i++){
						if (this.checkedData.indexOf("group:"+this.groups[i].id+"|"+this.groups[i].name)==-1){
							return
						} else {
							if (this.checkedData.indexOf("myGroup:myGroup|我的群组")==-1){
								this.checkedData.push("myGroup:myGroup|我的群组");
								return
							}
						}
					}
				}
				if (this.deparmentIndex==0){
					if(document.getElementById("my_group")){
						var _myGroupVal=document.getElementById("my_group").value;
						if (this.checkedData.indexOf(_myGroupVal)==-1){
							this.checkedData.push(_myGroupVal);
						}
					}
				}
				if (this.departments.sons && !this.myGroupsState && !this.myGroupUserState){
					for (let i=0;i<this.departments.sons.length;i++){
						if (this.checkedData.indexOf("department:"+this.departments.sons[i].id+"|"+this.departments.sons[i].name)==-1){
							this.checkedData.push("department:"+this.departments.sons[i].id+"|"+this.departments.sons[i].name);
						}
					}
				}
				if (this.departments.users && !this.myGroupsState && !this.myGroupUserState){
					for (let i=0;i<this.departments.users.length;i++){
						if (this.checkedData.indexOf("user:"+this.departments.users[i].userId+"|"+this.departments.users[i].name)==-1){
							this.checkedData.push("user:"+this.departments.users[i].userId+"|"+this.departments.users[i].name);
						}
					}
				}
			} else {
				if (!this.myGroupsState && !this.myGroupUserState) {
					this.checkAllSwitch(false);
					//子部门取消，子部门下面的所有部门和人都取消
					this.deselectionDepartments(this.departments);
					this.deselectionUsers(this.departments);
				}
				if (this.myGroupsState){
					for (let i=0;i<this.groups.length;i++){
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]=="group:"+this.groups[i].id+"|"+this.groups[i].name){
								this.checkedData.splice(j,1);
							}
						}
					}
					for (let j=0;j<this.checkedData.length;j++){
						if (this.checkedData[j]=="myGroup:myGroup|我的群组"){
							this.checkedData.splice(j,1);
						}
					}
					//取消我的群组下面所有的人building
				}
				if (this.myGroupUserState){
					for (let i=0;i<this.groupUsers.users.length;i++){
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]=="user:"+this.groupUsers.users[i].member.id+"|"+this.groupUsers.users[i].member.name){
								this.checkedData.splice(j,1);
							}
						}
					}
					for (let j=0;j<this.checkedData.length;j++){
						if (this.checkedData[j]=="group:"+this.groupUsers.id+"|"+this.groupUsers.name){
							this.checkedData.splice(j,1);
						}
					}
					for (let j=0;j<this.checkedData.length;j++){
						if (this.checkedData[j]=="myGroup:myGroup|我的群组"){
							this.checkedData.splice(j,1);
						}
					}
				}
				if (this.deparmentIndex==0){
					if(document.getElementById("my_group")){
						var _myGroupVal=document.getElementById("my_group").value;
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]==(_myGroupVal)){
								this.checkedData.splice(j,1);
							}
						}						
					}
				}
				if (this.departments.sons && !this.myGroupsState && !this.myGroupUserState){
					for (let i=0;i<this.departments.sons.length;i++){
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]=="department:"+this.departments.sons[i].id+"|"+this.departments.sons[i].name){
								this.checkedData.splice(j,1);
							}
						}
					}
				}
				if (this.departments.users && !this.myGroupsState && !this.myGroupUserState){
					for (let i=0;i<this.departments.users.length;i++){
						for (let j=0;j<this.checkedData.length;j++){
							if (this.checkedData[j]==("user:"+this.departments.users[i].userId+"|"+this.departments.users[i].name)){
								this.checkedData.splice(j,1);
							}
						}
					}
				}
				if (this.departmentsState){
					this.checkedData=[];
				}
			}
		},
		checkAllSwitch:function(state){
			if (state){
				if(this.deparmentIndex>0){
					if (this.checkedData.indexOf("department:"+this.departments.id+"|"+this.departments.name)==-1){
						this.checkedData.push("department:"+this.departments.id+"|"+this.departments.name);
					}
				}
				//子部门全选，上级部门按条件选中
				for (let i=(this.deparmentIndex-1);i>0;i--){
					for (let k=0;k<this.previousDepartments[i].sons.length;k++){
						if(this.checkedData.indexOf("department:"+this.previousDepartments[i].sons[k].id+"|"+this.previousDepartments[i].sons[k].name)==-1){
							return
						}
					}
					for (let k=0;k<this.previousDepartments[i].users.length;k++){
						if(this.checkedData.indexOf("user:"+this.previousDepartments[i].users[k].userId+"|"+this.previousDepartments[i].users[k].name)==-1){
							return
						}
					}
					if(this.checkedData.indexOf("department:"+this.previousDepartments[i].id+"|"+this.previousDepartments[i].name)==-1){
						this.checkedData.push("department:"+this.previousDepartments[i].id+"|"+this.previousDepartments[i].name);
					}
				}
			} else {
				if(this.deparmentIndex>0){
					for (let j=0;j<this.checkedData.length;j++){
						if (this.checkedData[j]=="department:"+this.departments.id+"|"+this.departments.name){
							this.checkedData.splice(j,1);
						}
					}
				}
				//子部门取消全选，所有上级部门取消选中
				for (let i=(this.deparmentIndex-1);i>0;i--){
					for (let j=0;j<this.checkedData.length;j++){
						if (this.checkedData[j]=="department:"+this.previousDepartments[i].id+"|"+this.previousDepartments[i].name){
							this.checkedData.splice(j,1);
						}
					}
				}
			}
		},
		deselectionDepartments:function(departments){
			if (departments.sons){
				for (let i=0;i<departments.sons.length;i++){
					for (let j=0;j<this.checkedData.length;j++){
						if (this.checkedData[j]=="department:"+departments.sons[i].id+"|"+departments.sons[i].name){
							this.checkedData.splice(j,1);
						}
					}
					this.deselectionDepartments(departments.sons[i]);
				}
			}
		},
		deselectionUsers:function(departments){
			if (departments._allUser){
				for (let i=0;i<departments._allUser.length;i++){
					for (let j=0;j<this.checkedData.length;j++){
						if (this.checkedData[j]==departments._allUser[i]){
							this.checkedData.splice(j,1);
						}
					}
				}
			}
		},
		enterDepartment:function(item,event){
			var _parentVal=event.toElement.parentElement.getElementsByTagName("input")[0].value;
			this.previousDepartments[this.deparmentIndex]=this.departments;
			this.previousTit[this.deparmentIndex]=this.tit;
			this.deparmentIndex++;
			this.departments=item;
			this.tit=item.name;
			this.previousState=true;
			this.departmentsState=false;
			if (!(this.checkedData.indexOf(_parentVal)==-1)) {
				this.checkAllState=true;
				if(item.sons){
					for (let i=0;i<item.sons.length;i++){
						if (this.checkedData.indexOf("department:"+item.sons[i].id+"|"+item.sons[i].name)==-1){
							this.checkedData.push("department:"+item.sons[i].id+"|"+item.sons[i].name);
						}
					}
				}
				if(item.users){
					for (let i=0;i<item.users.length;i++){
						if (this.checkedData.indexOf("user:"+item.users[i].userId+"|"+item.users[i].name)==-1){
							this.checkedData.push("user:"+item.users[i].userId+"|"+item.users[i].name);
						}
					}
				}
			}
			this.$nextTick(function(){this.ifCheckAll();});
		},
		ifCheckAll:function(){
			var _selectNum=0;
			var _checkbox=document.getElementsByClassName("single");
			if (_checkbox){
				for (let i=0;i<_checkbox.length;i++){
					_checkbox[i].checked ? _selectNum++ : "";
				}
				_selectNum==_checkbox.length ? this.checkAllState=true : this.checkAllState=false;
			}
		},
		back:function(data){
			if (data=="backMyGroups") {
				this.tit="我的群组";
				this.myGroupsState=true;
				this.myGroupUserState=false;
				this.groupUsers=[];
				this.$nextTick(function(){this.ifCheckAll();});
			} else if (data=="backDepartments") {
				this.tit="发送范围";
				this.myGroupsState=false;
				this.departmentsState=true;
				this.$nextTick(function(){this.ifCheckAll();});
			} else if (data=="backPublish"){
				//计算选中的所有的部门、分组下面的人
				this.checkedUserData=[];
				for (let i=0;i<this.checkedData.length;i++){
					var _prefix=this.checkedData[i].split(":")[0];
					if (_prefix=="user"){
						if(this.checkedUserData.indexOf(this.checkedData[i])==-1){
							this.checkedUserData.push(this.checkedData[i]);
						}
					}else if (_prefix=="department") {
						var _departmentId=this.checkedData[i].split("|")[0].split(":")[1];
						this.addDepartmentUser(this.departmentsData,_departmentId);
					}else if (_prefix=="group"){
						var _groupId=this.checkedData[i].split("|")[0].split(":")[1];
						this.addGroupUser(_groupId);
					}
				}
				this.$emit('inner' , {"state":"closeOrganization","checkedData":this.checkedData,"checkedUserData":this.checkedUserData,"myGroups":this.groups});
			} else if (data=="previousDepartment"){
				this.deparmentIndex--;
				this.departments=this.previousDepartments[this.deparmentIndex];
				this.tit=this.previousTit[this.deparmentIndex];
				if (this.deparmentIndex==0){
					this.departmentsState=true;
					this.previousState=false;
				}
				this.$nextTick(function(){this.ifCheckAll();});
			}
		},
		addDepartmentUser:function(departments,id){
			if (departments.sons) {
				for (let i=0;i<departments.sons.length;i++) {
					if (departments.sons[i].id==id){
						for (let j=0;j<departments.sons[i]._allUser.length;j++){
							if (this.checkedUserData.indexOf(departments.sons[i]._allUser[j])==-1){
								this.checkedUserData.push(departments.sons[i]._allUser[j]);
							}
						}
					}else {
						this.addDepartmentUser(departments.sons[i],id);
					}
				}
			}
		},
		addGroupUser:function(id){
			for (let i=0;i<this.groups.length;i++){
				if (this.groups[i].id==id){
					for (let j=0;j<this.groups[i].users.length;j++){
						if (this.checkedUserData.indexOf("user:"+this.groups[i].users[j].member.id+"|"+this.groups[i].users[j].member.name)==-1){
							this.checkedUserData.push("user:"+this.groups[i].users[j].member.id+"|"+this.groups[i].users[j].member.name);
						}
					}
				}
			}
		},
		showMyGroups:function(event){
			var _parentVal=event.toElement.parentElement.getElementsByTagName("input")[0].value;
			this.tit="我的群组";
			this.myGroupsState=true;
			this.departmentsState=false;
			if (!(this.checkedData.indexOf(_parentVal)==-1)) {
				this.checkAllState=true;
				for (let i=0;i<this.groups.length;i++){
					if (this.checkedData.indexOf("group:"+this.groups[i].id+"|"+this.groups[i].name)==-1){
						this.checkedData.push("group:"+this.groups[i].id+"|"+this.groups[i].name);
					}
				}
			}
			this.$nextTick(function(){this.ifCheckAll();});
		},
		showMyGroupUsers:function(data){
			var _parentVal=event.toElement.parentElement.getElementsByTagName("input")[0].value;
			this.tit=data.name;
			this.myGroupsState=false;
			this.myGroupUserState=true;
			this.groupUsers=data;
			if (!(this.checkedData.indexOf(_parentVal)==-1)) {
				this.checkAllState=true;
				for (let i=0;i<this.groupUsers.users.length;i++){
					if (this.checkedData.indexOf("user:"+this.groupUsers.users[i].member.id+"|"+this.groupUsers.users[i].member.name)==-1){
						this.checkedData.push("user:"+this.groupUsers.users[i].member.id+"|"+this.groupUsers.users[i].member.name);
					}
				}
			}
			this.$nextTick(function(){this.ifCheckAll();});
		},
		loopUser: function (departments) {
			if (departments) {
				if (departments.sons) {
					for (var j in departments.sons) {
						this.loopUser(departments.sons[j]);
					}
				}
				if (departments.users) {
					for (var i in departments.users) {
						if (!this.tempUser[departments.users[i].userId]) {
							this.tempUser[departments.users[i].userId] = departments.users[i];
							this.userList.push(departments.users[i]);
						}
					}
				}
			}
		},
		loopUserNum:function(departments){
			if (departments) {
				if (departments.users) {
					for (var i in departments.users) {
						if (this.departmentAllUser.indexOf("user:"+departments.users[i].userId+"|"+departments.users[i].name) == -1) {
							this.departmentAllUser.push("user:"+departments.users[i].userId+"|"+departments.users[i].name);
						}
					}
				}
				if (departments.sons) {
					for (var j in departments.sons) {
						this.loopUserNum(departments.sons[j]);
					}
				}
			}
		},
		addUserNum: function (departments) {
			this.departmentAllUser = [];
			if (departments) {
				if (departments.sons) {
					for (var j in departments.sons) {
						this.loopUserNum(departments.sons[j]);
						departments.sons[j]._allUser = this.departmentAllUser;
						this.addUserNum(departments.sons[j]);
					}
				}
			}
		},
		removeItem:function(data){
			for (let j=0;j<this.checkedData.length;j++){
				if (this.checkedData[j]==data){
					this.checkedData.splice(j,1);
				}
			}
			this.$nextTick(function(){this.ifCheckAll();});
		},
		showSearch:function(){
			this.searchState=true;
		},
		searchCancel:function(){
			this.searchState=false;
			this.searchText="";
		}
	},
	watch: {
		'checkedData': function (val, oldVal) {
			this.$nextTick(function () {
				let _gapWidth=val.length*24 , _arr = [] , _str , _strWidth;
				for (let i=0;i<val.length;i++){
					_arr.push(val[i].split("|")[1]);
				}
				_str = _arr.join("");
				_strWidth = _str.length * 14;
				this.itemWidth = _gapWidth+_strWidth+24;
			});
		},
		'searchText': function (val, oldVal) {
			if (val){
				this.searchUserState=true;
			}else{
				this.searchUserState=false;
			}
		}
	}
}
</script>
