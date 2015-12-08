// jscs:disable
require(["views/ItemView", "models/ItemModel", "models/ItemCollection", "views/ItemCollectionView"],

    function(ItemView, ItemModel, ItemCollection, ItemCollectionView) {

        var itemCollection = new ItemCollection();
        var firstModel = new ItemModel({title: "First Title", message: "My First Message"});
        var secModel = new ItemModel({title: "Sec Title", message: "My Sec Message"});
        var threModel = new ItemModel({title: "Thr Title", message: "My Thr Message"});

        itemCollection.add(firstModel);
        itemCollection.add(secModel);
        itemCollection.add(threModel);

        var itemCollectionView = new ItemCollectionView({collection: itemCollection});
        itemCollectionView.render();



    });