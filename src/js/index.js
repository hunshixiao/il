ajax({
    url:'/api/login',
    success:function(data){
        render(data.data)
    }
})
function render(data){
    var html='';
    data.forEach(function(item){
        
    })
}