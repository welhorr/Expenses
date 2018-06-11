({
    createItem: function(component, expense) {
        var theItems = component.get("v.items");
 
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newItem = JSON.parse(JSON.stringify(item));
 
        console.log("Items before 'create': " + JSON.stringify(theItems));
        theItems.push(newExpense);
        component.set("v.items", theItems);
        console.log("Items after 'create': " + JSON.stringify(theItems));
    }
})