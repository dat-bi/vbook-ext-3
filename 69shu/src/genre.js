function execute() {

    let response = fetch("https://www.69shuba.com/newtags");
    if (response.ok) {
        let doc = response.html('gbk');
        let menu = doc.select(".tag ul a")
        var nav = []
        menu.forEach(e => {
            nav.push({ 
                title: e.text(), 
                input: e.attr('href'), 
                script: "gen2.js" 
                })
        })
        return Response.success(nav)
    }

    return null;
}