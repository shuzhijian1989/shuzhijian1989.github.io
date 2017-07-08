
var m = {
	"admin": {
		'api_list': {
			'appid': false,
			'appname': true,
			'urlfront': true,
			'urlback': true,
			'acctoken': true,
			'whiteip': true,
			'blackip': true,
			'createDate': true,
			'lastUpdateDate': true
		},
		'api_update': {
			'appid': false,
			'appname': false,
			'urlfront': true,
			'urlback': true,
			'acctoken': true,
			'whiteip': true,
			'blackip': true

		},
		/*'api_create': {
			'appid': false,
			'appname': false,
			'urlfront': true,
			'urlback': true,
			'acctoken': true,
			'whiteip': true,
			'blackip': true
		},*/
		'api_btn': {
			"add": true,
			"edit": true,
			"detl": false
		},
		'resinfo_selelist': {
			'appname': true
		},
		'resinfo_list': {
			'resCode': true,
			'resName': true,
			'appid': true,
			'appName': true,
			'resPath': true,
			'resTypeVal': true,
			'createDate': true,
			'lastUpdateDate': true,
		},
		'resinfo_update': {
			'resCode': true,
			'resName': true,
			'appid': true,
			'resPath': true,
			'resType': true
		},
		'resinfo_create': {
			'resCode': true,
			'resName': true,
			'appid': true,
			'resPath': true,
			'resType': true
		},
		'resinfo_delete': {
			'id':true
		},
		'datarange_pkone': {
			'rescode1': true,
			'resname1': true,
			'paratype': true,
			'paraval': true,
			'sql': true
		},
		'datarange_update': {
			'rescode': true,
			'resname': true,
			'appid': true,
			'respath': true,
			'restype': true
		},
		'datarange_create': {
			'rescode': true,
			'resname': true,
			'appid': true,
			'respath': true,
			'restype': true
		},
		'datarange_delete': {

		},
		'appinfo_selelist': {

		},
		'role_list': {
			'roleCode': true,
			'roleName': true,
			'appid': true,
			'appName': true,
			'createDate': true,
			'lastUpdateDate': true
		},
		'role_update': {
			'roleCode': true,
			'roleName': true,
			'appid': true
		},
		'role_create':	{
			'roleCode': true,
			'roleName': true,
			'appid': true
		},
		'role_btn': {
			"add": true,
			"edit": true,
			"detl": true,
			'linkRes': true
		},
		'role_roleall4user': {
			'rolecode1': true,
			'rolename1': true,
			'appname': true,
			'tt': true,
		},	
		'role_roleall2user': {

		},
		'role_resall2role': {

		},
		'role_resall4role': {

		},
		'userextinfo_list': {
			"uaattrname": true,
			"uaattrvalue": true,
		},
		'userextinfo_update': {
			"uaattrname": true,
			"uaattrvalue": true
		},
		'userextinfo_create': {
			"uaattrname": true,
			"uaattrvalue": true
		},
		'userextinfo_btn': {
			"add": true,
			"edit": true,
			"detl": true
		},
		'user_pwdchange': {
			"username": true,
			"realname": true,
			"email": true,
			"mobile": true,
			"companydef": true,
			"department": true,
			"position": true,
			"isValid": true
		},
		'user_update':{
			"username": true,
			"realname": true,
			"email": true,
			"mobile": true,
			"companydef": true,
			"department": true,
			"position": true,
			"isValid": true
		},
		'user_create': {},
		'user_btn': {
			"add": true,
			"edit": true,
			"detl": true,
			"linkRole": true,
			"changeKeword": true
		},
		'user_list': {
			'id': true,
			'username': true,
			'realname': true,
			'email': true,
			'mobile': true,
			'companydefName': true,
			'companydef': true,
			'isValid': true,
			'isValidText': true,
			'createDate': true,
			'lastUpdateDate': true
		},							
		'enterpriseinfo_list': {
			'eiid': true,
			'entname': true,
			'entaddress': true,
			'entphone': true,
			'entmail': true,
			'createDate': true,
			'lastUpdateDate': true
		},
		'enterpriseinfo_update': {
			'entname': true,
			'entaddress': true,
			'entphone': true,
			'entmail': true
		},
		'enterpriseinfo_create': {
			'entname': true,
			'entaddress': true,
			'entphone': true,
			'entmail': true
		},
		'enterpriseinfo_btn': {
			"add": true,
			"edit": true,
			"detl": true
		},
		'enterpriseattr_list': {
			'eaattrname': true,
			'eaattrvalue': true
		},
		'enterpriseattr_update': {
			'eaid': true,
			'eaattrname': true,
			'eaattrvalue': true,
		},
		'enterpriseattr_create': {
			'eaid': true,
			'eaattrname': true,
			'eaattrvalue': true,
		},
		'enterpriseattr_btn': {
			"add": true,
			"edit": true,
			"detl": true
		},
		'sysconf_list': {
			"paraId": true,
			"parakey": true,
			"paraname": true,
			"paravalue1": true,
			"paravalue2": true,
			"paravalue3": true,
			"paravalue4": true,
			"createDate": true,
			"lastUpdateDate": true
		},
		'sysconf_update': {
			"parakey": true,
			"paraname": true,
			"paravalue1": true,
			"paravalue2": true,
			"paravalue3": true,
			"paravalue4": true,
			"bz": true
		},
		'sysconf_create': {
			"parakey": true,
			"paraname": true,
			"paravalue1": true,
			"paravalue2": true,
			"paravalue3": true,
			"paravalue4": true,
			"bz": true
		},
		'sysconf_delete': {
			"add": true,
			"edit": true,
			"detl": true
		},
		'logger_list': {
			"userid": true,
			"resid": true,
			"optstatus": true,
			"bz": true,
			"ip": true,
			"usetime": true
		},
		'auinvitecond_list': {
			"icondid": true,
			"icname": true,
			"ictype": true,
			"icvalue": true,
			"sfyx": true,
			"sfyxTxt": true,
			"createDate": true,
			"lastUpdateDate": true
		},
		'auinvitecond_update': {
			"icname": true,
			"ictype": true,
			"icvalue": true,
			"sfyx": true
			
		},
		'auinvitecond_create': {
			"icname": true,
			"ictype": true,
			"icvalue": true,
			"sfyx": true
		},
		'auinvitecond_btn': {
			"add": true,
			"edit": true,
			"detl": true
		},
		'auinvitetype_list': {
			"id": true,
			"gtype": true,
			"gtype_text": true,
			"icondidsName": true,
			"cnum": true,
			"isGen_text": true,
			"deadline": true,
			"sfyx": true,
			"sfyx_text": true,
			"bz": true,
			"createDate": true,
			"lastUpdateDate": true
		},

		'auinvitetype_update': {
			"gtype": true,
			"icondids": true,
			"cnum": true,
			"is_gen": true,
			"deadline": true,
			"sfyx": true,
			"bz": true
		},
		'auinvitetype_create': {
			"gtype": true,
			"icondids": true,
			"cnum": true,
			"is_gen": true,
			"deadline": true,
			"sfyx": true,
			"bz": true
		},
		/*'auinvitetype_choosecond': {

		},*/
		'auinvitetype_btn': {
			"add": true,
			"edit": true,
			"detl": true,
			"gen": true
		},
		/*'auinvitecode_createcodes': {},*/
		'auinvitecode_list': {
			"icode": true,
			"userid": true,
			"instatus": true,
			"instatus_text": true
		}

	}
}