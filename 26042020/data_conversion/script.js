obj1 = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
];
let obj2 = [];
(function flat(obj){
    obj.forEach(element => {
        children = element["childrens"];
        element["childrens"] = [];
        obj2.push(element);
        if (children.length != 0) {
            flat(children);
        }
    });
})(obj1);
console.log(obj2);

obj3 = [
    {
         "productName" : "T-Shirt",
         "basePrice" : 500,
         "image" : "http://placehold.it/200x200",
         "description" : "Des",
         "varients" : [
              {
                   "type" : "Size",
                   "values" : ["xl","xxl"]
              },
              {
                   "type" : "Meterial",
                   "values" : ["cotton","silk"]
              },
              {
                   "type" : "Color",
                   "values" : ["yellow","red"]
              }
         ],
         "varientDetails" : [
              {
                   "size" : "xl",
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 30
              },
              {
                   "size" : "xl",
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 40
              },
              {
                   "size" : "xl",
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 50
              },
              {
                   "size" : "xl",
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 60
              },
              {
                   "size" : "xxl",
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 70
              },
              {
                   "size" : "xxl",
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 80
              },
              {
                   "size" : "xxl",
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 90
              },
              {
                   "size" : "xxl",
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 100
              }
         ]
    },
    {
         "productName" : "Saree",
         "basePrice" : 5000,
         "image" : "http://placehold.it/200x200",
         "description" : "Des",
         "varients" : [
              {
                   "type" : "Meterial",
                   "values" : ["cotton","silk"]
              },
              {
                   "type" : "Color",
                   "values" : ["yellow","red"]
              }
         ],
         "varientDetails" : [
              {
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 30
              },
              {
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 40
              },
              {
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 50
              },
              {
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 60
              }
         ]
    }
];

obj4 = [];

(function flat1(obj){
    obj.forEach(element => {
        vd = element["varientDetails"];
        delete element["varients"];
        delete element["varientDetails"];

        temp_obj = element;

        vd.forEach(e => {
            obj4.push({...temp_obj, ...e});
        });
    });
})(obj3);
console.log(obj4)