const http = uni.http;
// 获取菜单
export const api = ( a ) => uni.$u.http.request({
			
			          url: a,  //这里的lid,page,pagesize只能是数字或字母
			
			          method: 'GET',
			
			          success: (res)=>{return res},

			
			    })