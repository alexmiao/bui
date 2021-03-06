/**
 * @fileOverview A collection of commonly used function buttons or controls represented in compact visual form.
 * @author dxq613@gmail.com, yiminghe@gmail.com
 * @ignore
 */
define('bui/toolbar/bar',function(){

	var Component = BUI.Component,
    UIBase = Component.UIBase;
		
	/**
	 * bar的视图类
	 * @class BUI.Toolbar.BarView
	 * @extends BUI.Component.View
	 * @private
	 */
	var barView = Component.View.extend({

		renderUI:function() {
        var el = this.get('el');
        el.attr('role', 'toolbar');
           
        if (!el.attr('id')) {
            el.attr('id', BUI.guid('bar'));
        }
    }
	});

	/**
	 * 工具栏
   * 可以放置按钮、文本、链接等，是分页栏的基类
   * xclass : 'bar'
   * <p>
   * <img src="../assets/img/class-toolbar.jpg"/>
   * </p>
   * @class BUI.Toolbar.Bar
   * @extends BUI.Component.Controller
   * @mixins BUI.Component.UIBase.ChildList
   */
	var Bar = Component.Controller.extend([UIBase.ChildList],
	 /**
	 * @lends BUI.Toolbar.Bar.prototype
   * @ignore 
	 */	
	{
		/**
		* 通过id 获取项
		* @param {String|Number} id the id of item 
		* @return {BUI.Toolbar.BarItem}
		*/
		getItem : function(id){
			return this.getChild(id);
		}
	},{
		ATTRS:
    /** 
    * @lends BUI.Toolbar.Bar.prototype
    * @ignore
    */
		{
      elTagName :{
          view : true,
          value : 'ul'
      },
      /**
       * 默认子项的样式
       * @type {String}
       * @override
       */
      defaultChildClass: {
        value : 'bar-item'
      },
			/**
			* 获取焦点
      * @protected
      * @ignore
			*/
			focusable : {
				value : false
			},
			/**
			* @private
      * @ignore
			*/
			xview : {
				value : barView	
			}
		}
	},{
		xclass : 'bar',
		priority : 1	
	});

	return Bar;
});