menu_list_array=["chicken pizza","veggie pizza","panirtikka pizza","vege supreme pizza"]
function  getmenu(){
    var htmldata
    htmldata="<ol class='menulist'>"
    menu_list_array.sort()
    for(var i=0;i<menu_list_array.length;i++)
    {
        htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata

}
function  add_item(){
    var htmldata
    var item=document.getElementById("add_item").value
menu_list_array.push(item)

    htmldata="<section class='cards'>"
    menu_list_array.sort()
    for(var i=0;i<menu_list_array.length;i++)
    {
        htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata

}