angular.module('dateFormatApp',[])
.controller('dateController',['$scope','$filter',function ($scope,$filter) {
    var self = this;
    //获取当前时间戳的三种方式
    // self.timestamp = Date.parse(new Date());
    // self.timestamp = (new Date()).valueOf();
    self.timestamp = new Date().getTime();
    console.log(timestamp);
    self.getShowDateStr = function (input) {
        console.log("run fuinction");
        self.out  = '';
        self.dateStr = input;
        //获取当前时间
        var nowDate = new Date();
        self.nowDate = nowDate;
        //当前年
        var nowYear = nowDate.getFullYear();
        //当前月 +1
        var nowMonth = (nowDate.getMonth() + 1);
        //当前日
        var nowDay = nowDate.getDate();
        //当前时
        var nowHour = nowDate.getHours();
        
        self.Y = $filter('date')(self.dateStr,'yyyy');
        self.M = $filter('date')(self.dateStr,'MMMM');
        self.D = $filter('date')(self.dateStr,'dd');
        self.H = $filter('date')(self.dateStr,'HH');
        // var beDate = Y + M + D + H;
        // var nowDate = nowYear+nowMonth+nowDay + nowHour;

        if(self.Y != nowYear){
            // self.out.Y=nowYear;
            self.out += self.Y+'-'
        }
        
        if(self.M != nowMonth){
            self.out.M+=self.M;
        }
        
        if(self.D != nowDay){
            self.out.D+=self.D;
        }
        
        if(self.H != nowHour){
            self.out.H+=self.H;
        }
        self.out += self.H;
        return self.out;
    }
}]);