import React from 'react';
import { View,Text,FlatList } from 'react-native';

import HeaderNavigation from '../component/HeaderNavigation';
import color from '../styles/color';
import fonts from '../styles/fonts';
import MyCartComponent from '../component/MyCartComponent';
import {offersOuterCategories} from "../Callings/Data"


function MyOrders({navigation,route}) {
    let ordersData=route.params;
    
    return (
        <View style={{flex:1}}>
        <HeaderNavigation title="My Orders" showIcons={false} navigation={navigation}/>
        {ordersData.ordersData===false ?
        <View style={{flex:1,backgroundColor:color.lightdarkGray,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:18,fontFamily:fonts.ssl,fontWeight:"600"}}>No Orders</Text>
        </View>:
       <View
            style={{
                flex: 1,
                marginHorizontal: 10,
            }}
        >
       <FlatList
            data={offersOuterCategories}
            keyExtractor={(offersOuterCategory) =>
            offersOuterCategory.id.toString()
         }
         renderItem={({ item }) => (
           <MyCartComponent
             key={item.id}
             image={item.image}
             price={item.price}
             prevPrice={item.prevPrice}
             title={item.description}
             grams={item.quantity}
             add={false}
             cross={false}
           />
         )}
       />
     </View>
        }
        </View>
    );
}

export default MyOrders;