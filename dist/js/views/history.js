define(["jquery","underscore","backbone","calculationView"],function(e,t,n,r){return HistoryCollections=n.View.extend({tagName:"ul",id:"historyUl",initialize:function(){this.render(),this.collection.on("add",this.add,this)},render:function(){return this.collection.each(function(e){var t=new r({model:e});this.$el.append(t.render().el)},this),e("#history").html(this.el),this},add:function(){var t=new r({model:this.collection.last()});this.$el.append(t.render().el),e("#history").append(this.el)}}),HistoryCollections});