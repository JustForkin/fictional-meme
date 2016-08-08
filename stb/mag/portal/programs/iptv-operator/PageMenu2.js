//<!--
function PageMenu()
{
//private
	this.Co = null;
	this.Items = [];
	this.pos = -1;
	this.prev = -1;
	this.page = 0;
	this.pages = 1;
//public
	this.List = [];
	this.size = 16;
	this.selectedClass = 'selectMi';
	this.unSelectedClass = 'unSelectMi';
//private:
	this.Select = function()
	{
		if ( this.prev > -1 ){
			this.Items[this.prev].className = this.unSelectedClass;
		}
		this.Items[this.pos].className = this.selectedClass;
	}
	this.SelectFirst = function()
	{
		this.prev = this.pos;
		this.pos = 0;
		this.Select();
	}
	this.SelectLast = function()
	{
		this.prev = this.pos;
		this.pos = this.size - 1;
		this.Select();
	}
	this.SelectNext = function()
	{
		this.prev = this.pos;
		++this.pos;
		this.Select();
	}
	this.SelectPrev = function()
	{
		this.prev = this.pos;
		--this.pos;
		this.Select();
	}
	this.ChangePage = function()
	{
		var offs = this.page * this.size;
		for( var i=0; i<this.size; ++i ){
			var I = this.Items[i];
			if ( this.List[offs+i] ){
				I.innerHTML = (offs+i+1)+'. '+this.List[offs+i][1];
			} else {
				I.innerHTML = "";
			}
		}
	}
	this.PageNext = function()
	{
		if ( this.page < this.pages - 1 ){
			++this.page;
			this.ChangePage();
			this.SelectFirst();
			this.TxtDiv.innerHTML = '<div class=\"pageInfo\"> Page '+(this.page+1)+' of '+this.pages+"</div>";
		}
	}
	this.PagePrev = function()
	{
		if ( this.page > 0 ){
			--this.page;
			this.ChangePage();
			this.SelectLast();
			this.TxtDiv.innerHTML = '<div class=\"pageInfo\"> Page '+(this.page+1)+' of '+this.pages+"</div>";
		}
	}
//initialization
	this.Init = function( cId )
	{
		this.Co = document.getElementById(cId);
		for( var i=0; i<this.size; ++i ){
			var txt = "";
			if ( this.List[i] ){
				txt = (i+1)+'. '+this.List[i][1];
			}
			var Item = document.createElement('DIV');
			//var Tn = document.createTextNode(txt);
			//Item.appendChild(Tn);
			Item.innerHTML = txt;
			Item.className = this.unSelectedClass;
			this.Items[i] = Item;
			this.Co.appendChild(Item);
		}
		this.pages = Math.ceil(this.List.length / this.size);
		this.TxtDiv = document.createElement('DIV');
		//var Tn = document.createTextNode("Page 1 of "+this.pages);
		this.Co.appendChild(this.TxtDiv);
		//this.TxtDiv.appendChild(Tn);
		this.TxtDiv.innerHTML = "<div class=\"pageInfo\">Page 1 of "+this.pages+"</div>";
		this.SelectFirst();
	}
//select next element
	this.Next = function()
	{
		if ( this.page * this.size + this.pos < this.List.length-1 ){
			if ( this.pos < this.size-1 ){
				this.SelectNext();
			} else {
				this.PageNext();
			}
		}
	}
//select prev element
	this.Prev = function()
	{
		if ( this.pos > 0 ){
			this.SelectPrev();
		} else {
			this.PagePrev();
		}
	}
//page down
	this.PageDown = function()
	{
		if ( this.page < this.pages - 1 ){
			++this.page;
			this.ChangePage();
			this.SelectFirst();
			this.TxtDiv.innerHTML = '<div class=\"pageInfo\"> Page '+(this.page+1)+' of '+this.pages+"</div>";
		}
	}
//page up
	this.PageUp = function()
	{
		if ( this.page > 0 ){
			--this.page;
			this.ChangePage();
			this.SelectFirst();
			this.TxtDiv.innerHTML = '<div class=\"pageInfo\"> Page '+(this.page+1)+' of '+this.pages+"</div>";
		}
	}
//show menu
	this.Show = function()
	{
		this.Co.style.visibility = 'visible';
	}
//hide menu
	this.Hide = function()
	{
		this.Co.style.visibility = 'hidden';
	}
//check display
	this.IsShow = function()
	{
		return this.Co.style.visibility == 'visible';
	}
//set item by id
	this.SetItemId = function( id )
	{
		if ( id > -1 && id < this.List.length ){
			var nPage = Math.ceil(id / this.size)-1;
			var nPos = id - (nPage * this.size);
			if ( nPage != this.page ){
				this.page = nPage;
				this.ChangePage();
				this.TxtDiv.innerHTML = '<div class=\"pageInfo\"> Page '+(this.page+1)+' of '+this.pages+"</div>";
			}
			//alert(nPos);
			if ( nPos != this.pos ){
				this.prev = this.pos;
				this.pos = nPos;
				this.Select();
			}
		}
	}
	this.GetItemId = function()
	{
		return this.page * this.size + this.pos;
	}
//end class
}
//-->

