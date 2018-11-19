const inventory = [
    {
        itemId: 'SM58',
        brand: 'Shure',
        desc: 'vocal mic',
        cost: 20.00,
        sellAt: 50.00,
        saleType:'trade-in',
        received:'11/16/2018',
        category:'mic',
        sold: false,
    },
    {
        itemId: 'Code50',
        brand: 'Marshall',
        desc: 'modeling combo amp',
        cost: 60.00,
        sellAt: 100.00,
        saleType:'trade-in',
        received:'09/08/2018',
        category: 'combo amp',
        sold: false,
    },
    {
        itemId: 'x32',
        brand: 'behringer',
        desc: '32 channel digital mixer',
        cost: 600.00,
        sellAt: 1000.00,
        saleType:'trade-in',
        received:'11/16/2018',
        category: 'mixer',
        sold: false,
    }
]




new Vue({
    el:'#app',
    data:{
        inv: inventory,
        
    },
    methods:{
        sold: function(item){
        	item.sold = !item.sold;    
        },
        newItem:function(e){
        	e.preventDefault();
          this.inv.push({
          	'itemId':this.newId,
            'brand':this.newBrand,
            'desc':this.newDesc,
            'cost':this.newCost,
            'sellAt':this.newSellAt,
            'saleType':this.newSaleType,
            'received':this.newRecDate,
            'category':this.newCategory,
            'sold':false
          })
         this.newId=this.newBrand=this.newDesc=
         this.newCost=this.newSellAt=this.newSaleType=
         this.newRecDate=this.newCategory= ''
        
        },
        post: function(item){
        item.needsPosted = false
        }
    },

});











