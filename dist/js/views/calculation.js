define(["jquery","underscore","backbone"],function(e,t,n){return Сalculation=n.View.extend({tagName:"li",template:t.template(e("#templateli").html()),initialize:function(){},events:{"click .delete":"destroy"},render:function(){return this.model.calc(),console.log(this.model),this.$el.html(this.template(this.model.toJSON())),this.attachEvents(),this},attachEvents:function(){this.model.on("destroy",this.remove,this),this.$(".delete").on("click",t.bind(this.destroy,this))},destroy:function(){console.log("yyyeeee"),this.model.delete(),this.remove()}}),Сalculation});