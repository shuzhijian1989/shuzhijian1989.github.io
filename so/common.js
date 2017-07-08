var ProjectDirectory = '';
// var ProjectDirectory = '/ssoadmin';
var Pn = {
    ServeAdress: 'http://localhost/ssoapiplat',
    // ServeAdress: 'http://app.gjyf.com.cn/ssoapiplat',
    post: function(_url, inputData, success) {
        var _this = this;
        var suc = success;
        $.ajax({
            type: "POST",
            contentType: "application/json",
            dataType: "text",
            url: _this.ServeAdress + _url,
            // url: _url,
            data: JSON.stringify(inputData),
            success: function(respData, textStatus) {
                var data = respData ? JSON.parse(respData) : respData;
                if (!data) {
                    ErrorPop('s', '空返回，请检查后台!');
                    return;
                }
                if (data.auth) {
                    if ('noauthe' == data.auth) {
                        ErrorPop('c', '请先登录！', function() { window.parent.window.location.href = ProjectDirectory + '/login.html'; });

                    } else {
                        ErrorPop('c', '无权限！');
                    }
                } else {
                    suc ? suc.call(_this, data) : null;
                }
            },
            error: function(er) {
                ErrorPop('s', '服务器错误，请检查后台!');
            }
        });
    }
};
/*easyui textbox赋值、取值
 *@para {string} _id
 *@para {string} _val
 */
function TValue(_id, _val) {
    var arg_len = arguments.length;
    var $this = $('#' + _id);
    if (2 == arg_len) {
        if (!_val) {
            $this.textbox('setValue', '');
            return;
        }
        if (_val.indexOf(';') > -1) {
            var _val_t = _val.replace(/\;/g, '\n');
            $this.textbox('setValue', _val_t);
        } else {
            $this.textbox('setValue', _val);
        }
    } else {
        var eleVal = $this.textbox('getValue');
        if (eleVal.indexOf('\n') > -1) {
            eleVal = eleVal.replace(/\n/g, ';');
            return eleVal;
        } else {
            return eleVal;
        }
    }
}
/*easyui combobox赋值、取值
 *@para {string} _id
 *@para {string} _val
 */
function CValue(_id, _val) {
    var arg_len = arguments.length;
    var $this = $('#' + _id);
    if (2 == arg_len) {
        if (!_val) {
            $this.combobox('setValue', '');
            return;
        }
        $this.combobox('setValue', _val);
    } else {
        return $this.combobox('getValue');
    }
}

/*easyui datebox赋值、取值
 *@para {string} _id
 *@para {string} _val
 */
function DValue(_id, _val) {
    var arg_len = arguments.length;
    var $this = $('#' + _id);
    if (2 == arg_len) {
        if (!_val) {
            $this.datetimebox('setValue', '');
            return;
        }
        $this.datetimebox('setValue', _val);
    } else {
        return $this.datetimebox('getValue');
    }
}

/*错误提示
 *@para {int} errtype 
 *@para {string} errmsg
 *@para {function} fn
 */
function ErrorPop(errtype, errmsg, fn) {
    if ('s' == errtype) {
        $.messager.show({
            title: '提示',
            msg: errmsg
        });
    } else {
        $.messager.alert({
            title: '提示',
            msg: errmsg,
            fn: function() {
                fn ? fn.call() : null;
            }
        });
    }
}

$.fn.datebox.defaults.formatter = function(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    if (m < 10) {
        m = '0' + m;
    };
    if (d < 10) {
        d = '0' + d;
    };
    return y + '-' + m + '-' + d;
};
//权限控制
var AuthGird = {
   /* grid: function(grid,divDoc,list){
        var toolbar = grid.toolbar;
        if(toolbar){
            this.displayButton(toolbar,m,list);
        }
        var columns = grid.columns[0];
        if(columns){
            this.displayColumns(columns,m,list);
        }
        divDoc.datagrid(grid);
    },*/
    /*gridToobar:function(grid,divDoc,list){
        var toolbar = grid.toolbar;
        if(toolbar){
            this.displayButton(toolbar,m,list);
        }
        divDoc.datagrid(grid);
    },
    gridColumns: function(grid,divDoc,list){
        var columns = grid.columns[0];
        if(columns){
            this.displayColumns(columns,m,list);
        }
        divDoc.datagrid(grid);
    }*/
    displayButton : function(arr,m){
        for(var i=0;i<arr.length;i++){
            if(!m[arr[i].id]){
                arr.splice(i,1);
            }
        }
    },
    displayColumns : function(arr,m){
        for(var i=0;i<arr.length;i++){
            if(!m[arr[i].field]){
                arr.splice(i,1);
            }
        }
    },
    displayLabel : function(m){
       for(name in m){
            if(!m[name]){
                $('#'+name).parent().remove();
            }
        }
    }
}